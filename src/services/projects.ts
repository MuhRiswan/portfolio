import { db as firebaseDb } from "@/lib/firebase"
import { collection, getDocs, getDoc, doc, query, orderBy } from "firebase/firestore"
import { Project as FirebaseProject } from "@/types/portfolio"
import { CACHE_TIMES, FIREBASE_COLLECTIONS } from "@/config/constans"
import { db as prismaDb } from "@/lib/prisma"
import { unstable_cache } from "next/cache"
import { cache } from "react"
import { ProjectModel } from "@/types/projects"

export const PROJECTS_REVALIDATE = CACHE_TIMES.DEFAULT

/* 🔴 FIREBASE METHODS (LEGACY / LEARNING) */

async function getFirebaseProjectsUncached(): Promise<FirebaseProject[]> {
  const q = query(collection(firebaseDb, FIREBASE_COLLECTIONS.PROJECTS), orderBy("order", "asc"))
  const querySnapshot = await getDocs(q)
  if (querySnapshot.empty) return []

  return querySnapshot.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<FirebaseProject, "id">),
  }))
}

export const getFirebaseProjects = unstable_cache(getFirebaseProjectsUncached, [FIREBASE_COLLECTIONS.PROJECTS, "list"], { revalidate: PROJECTS_REVALIDATE })

async function getFirebaseProjectByIdUncached(id: string): Promise<FirebaseProject | null> {
  if (!id) return null
  const docRef = doc(firebaseDb, FIREBASE_COLLECTIONS.PROJECTS, id)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) return null
  return { id: docSnap.id, ...docSnap.data() } as FirebaseProject
}

export const getFirebaseProjectById = cache((id: string) => unstable_cache(() => getFirebaseProjectByIdUncached(id), [FIREBASE_COLLECTIONS.PROJECTS, "detail", id], { revalidate: PROJECTS_REVALIDATE })())

/* 🔵 PRISMA METHODS (NEW CMS POSTGRESQL) */

async function getProjectsUncached(): Promise<ProjectModel[]> {
  const projects = await prismaDb.project.findMany({
    orderBy: { createdAt: "desc" },
  })

  if (!projects || projects.length === 0) return []
  return projects as unknown as ProjectModel[]
}

export const getProjects = unstable_cache(getProjectsUncached, ["projects", "list"], { revalidate: PROJECTS_REVALIDATE })

async function getProjectByIdUncached(id: string): Promise<ProjectModel | null> {
  if (!id) return null

  const project = await prismaDb.project.findUnique({
    where: { id },
  })

  if (!project) return null
  return project as unknown as ProjectModel
}

export const getProjectById = cache((id: string) => unstable_cache(() => getProjectByIdUncached(id), ["projects", "detail", id], { revalidate: PROJECTS_REVALIDATE })())
