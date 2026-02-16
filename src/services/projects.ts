import { db } from "@/lib/firebase";
import { collection, getDocs, getDoc, doc, query, orderBy } from "firebase/firestore";
import { Project } from "@/types/portfolio";
import { CACHE_TIMES, FIREBASE_COLLECTIONS } from "@/config/constans";
import { unstable_cache } from "next/cache";
import { cache } from "react";

export const PROJECTS_REVALIDATE = CACHE_TIMES.DEFAULT;

async function getAllProjectsUncached(): Promise<Project[]> {
  try {
    const q = query(collection(db, FIREBASE_COLLECTIONS.PROJECTS), orderBy("order", "asc"));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.warn("Firestore: No projects found in collection.");
      return [];
    }

    return querySnapshot.docs.map((d) => ({
      id: d.id,
      ...(d.data() as Omit<Project, "id">),
    }));
  } catch (error) {
    if (error instanceof Error) {
      console.error("Firebase Service Error [getAllProjects]:", error.message);
    } else {
      console.error("Firebase Service Error [getAllProjects]:", error);
    }
    return [];
  }
}

export const getAllProjects = unstable_cache(getAllProjectsUncached, [FIREBASE_COLLECTIONS.PROJECTS, "list"], { revalidate: PROJECTS_REVALIDATE });

async function getProjectByIdUncached(id: string): Promise<Project | null> {
  if (!id) return null;
  try {
    const docRef = doc(db, FIREBASE_COLLECTIONS.PROJECTS, id);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return null;
    return { id: docSnap.id, ...docSnap.data() } as Project;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Firebase Service Error [getProjectById] for ID ${id}:`, error.message);
    } else {
      console.error(`Firebase Service Error [getProjectById] for ID ${id}:`, error);
    }
    return null;
  }
}

export const getProjectById = cache((id: string) => unstable_cache(() => getProjectByIdUncached(id), [FIREBASE_COLLECTIONS.PROJECTS, "detail", id], { revalidate: PROJECTS_REVALIDATE })());
