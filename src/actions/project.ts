"use server"

import { db } from "@/lib/prisma"
import { del } from "@vercel/blob"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { ProjectPayload } from "@/types/projects"

export async function createProjectAction(data: ProjectPayload) {
  const session = await getServerSession(authOptions)
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized")
  }

  try {
    const categoriesArray = data.categories.split(",").map((c: string) => c.trim())
    const techStackArray = data.techStack.split(",").map((t: string) => t.trim())

    const project = await db.project.create({
      data: {
        title: data.title,
        subTitle: data.subTitle,
        description: data.description,
        longDescription: data.longDescription,
        challenge: data.challenge,
        solution: data.solution,
        liveUrl: data.liveUrl || null,
        categories: categoriesArray,
        techStack: techStackArray,
        imageUrl: data.imageUrl,
        metrics: data.metrics || [],
        details: data.details,
      },
    })

    return { success: true, id: project.id }
  } catch (error) {
    console.error("Database Error:", error)

    //🚨 ROLLBACK SYSTEM: Jika DB gagal, hapus gambar dari Vercel Blob!
    if (data.imageUrl && data.imageUrl.length > 0) {
      const uploadedUrls = data.imageUrl.map((img) => img.url).filter(Boolean)
      if (uploadedUrls.length > 0) {
        console.log("Rolling back... Deleting blobs:", uploadedUrls)
        await del(uploadedUrls)
      }
    }

    throw new Error("Failed to save project to database")
  }
}

export async function updateProjectAction(data: ProjectPayload) {
  const session = await getServerSession(authOptions)
  if (!session || session.user.role !== "ADMIN") throw new Error("Unauthorized")
  if (!data.id) throw new Error("Project ID is required for update")

  try {
    const categoriesArray = data.categories
      .split(",")
      .map((c: string) => c.trim())
      .filter(Boolean)
    const techStackArray = data.techStack
      .split(",")
      .map((t: string) => t.trim())
      .filter(Boolean)

    const project = await db.project.update({
      where: { id: data.id },
      data: {
        title: data.title,
        subTitle: data.subTitle,
        description: data.description,
        longDescription: data.longDescription,
        challenge: data.challenge,
        solution: data.solution,
        liveUrl: data.liveUrl || null,
        categories: categoriesArray,
        techStack: techStackArray,
        imageUrl: data.imageUrl,
        metrics: data.metrics || [],
        details: data.details,
      },
    })

    return { success: true, id: project.id }
  } catch (error) {
    console.error("Update error:", error)
    throw new Error("Failed to update project")
  }
}

export async function deleteProjectAction(id: string) {
  const session = await getServerSession(authOptions)
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized")
  }

  try {
    const project = await db.project.findUnique({
      where: { id },
      select: { imageUrl: true },
    })

    if (!project) throw new Error("Project not found")

    await db.project.delete({
      where: { id },
    })

    const images = project.imageUrl as { url: string; title: string }[]
    const urlsToDelete = images.map((img) => img.url).filter(Boolean)

    if (urlsToDelete.length > 0) {
      await del(urlsToDelete)
      console.log("Cleanup: Blobs deleted successfully")
    }

    return { success: true }
  } catch (error) {
    console.error("Delete error:", error)
    throw new Error("Failed to delete project")
  }
}
