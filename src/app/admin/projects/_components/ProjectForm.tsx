"use client"

import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { Loader2, Save, X, Plus, Trash2, UploadCloud, Image as ImageIcon, ZoomIn } from "lucide-react"
import { toast } from "sonner"
import Image from "next/image"

import { projectSchema, ProjectFormValues } from "@/lib/validations/project"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { createProjectAction, updateProjectAction } from "@/actions/project"
import { upload } from "@vercel/blob/client"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ProjectModel, ProjectPayload } from "@/types/projects"

interface ProjectFormProps {
  initialData?: ProjectModel | null
}

export default function ProjectForm({ initialData }: ProjectFormProps) {
  const router = useRouter()

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: initialData
      ? {
          ...initialData,
          categories: initialData.categories.join(", "),
          techStack: initialData.techStack.join(", "),
          liveUrl: initialData.liveUrl || "",
        }
      : {
          title: "",
          subTitle: "",
          description: "",
          longDescription: "",
          challenge: "",
          solution: "",
          liveUrl: "",
          categories: "",
          techStack: "",
          details: { role: "", timeline: "", client: "" },
          imageUrl: [{ title: "", url: "" }],
          metrics: [],
        },
  })

  const { isSubmitting } = form.formState

  const {
    fields: imageFields,
    append: appendImage,
    remove: removeImage,
  } = useFieldArray({
    control: form.control,
    name: "imageUrl",
  })

  const {
    fields: metricFields,
    append: appendMetric,
    remove: removeMetric,
  } = useFieldArray({
    control: form.control,
    name: "metrics",
  })

  async function onSubmit(values: ProjectFormValues) {
    try {
      const finalImages = await Promise.all(
        values.imageUrl.map(async (img) => {
          if (img.file) {
            const fileExtension = img.file.name.split(".").pop()
            const safeTitle = values.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)+/g, "")

            const timestamp = Date.now()
            const customFileName = `projects/project-${timestamp}-${safeTitle}.${fileExtension}`

            const blob = await upload(customFileName, img.file, {
              access: "public",
              handleUploadUrl: `/api/upload`,
            })

            return { title: img.title, url: blob.url }
          }
          return { title: img.title, url: img.url || "" }
        }),
      )

      const payload: ProjectPayload = {
        ...values,
        imageUrl: finalImages,
      }

      if (initialData?.id) {
        payload.id = initialData.id
        await updateProjectAction(payload)
        toast.success("Project updated successfully!")
      } else {
        await createProjectAction(payload)
        toast.success("Project created successfully!")
      }

      router.push("/admin/projects")
      router.refresh()
    } catch (error) {
      console.error(error)
      toast.error("Process failed. Images were safely rolled back.")
    }
  }

  const inputClassName = "bg-[#182234]/50 border-[#222f49] text-white rounded-lg focus-visible:ring-1 focus-visible:ring-blue-500 hover:border-[#3b82f6]/50 transition-colors placeholder:text-[#52668d]"
  const sectionTitleClassName = "text-sm font-bold text-blue-400 uppercase tracking-wider mt-10 mb-4 border-b border-[#222f49] pb-2"

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-4 border-b border-[#222f49] pb-2">Basic Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Project Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. My Portfolio" {...field} className={inputClassName} />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Subtitle</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Fullstack Web App" {...field} className={inputClassName} />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-300">Short Description (Summary)</FormLabel>
              <FormControl>
                <Textarea placeholder="A brief summary..." className={`${inputClassName} min-h-[80px] resize-none`} {...field} />
              </FormControl>
              <FormMessage className="text-red-400 text-xs" />
            </FormItem>
          )}
        />

        <h3 className={sectionTitleClassName}>Project Specs & Details</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          <FormField
            control={form.control}
            name="details.role"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">My Role</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Frontend Dev" {...field} className={inputClassName} />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="details.timeline"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Timeline</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Jan - Mar 2026" {...field} className={inputClassName} />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="details.client"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Client / Context</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Internal / PT XYZ" {...field} className={inputClassName} />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          <FormField
            control={form.control}
            name="categories"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Categories (Comma separated)</FormLabel>
                <FormControl>
                  <Input placeholder="Next.js, UI/UX" {...field} className={inputClassName} />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="techStack"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">Tech Stack (Comma separated)</FormLabel>
                <FormControl>
                  <Input placeholder="React, Prisma, Tailwind" {...field} className={inputClassName} />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="liveUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-300">Live URL (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="https://myapp.com" {...field} className={inputClassName} />
              </FormControl>
              <FormMessage className="text-red-400 text-xs" />
            </FormItem>
          )}
        />

        <h3 className={sectionTitleClassName}>Case Study Content</h3>

        <FormField
          control={form.control}
          name="longDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-300">Full Description</FormLabel>
              <FormControl>
                <Textarea className={`${inputClassName} min-h-[120px]`} {...field} />
              </FormControl>
              <FormMessage className="text-red-400 text-xs" />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          <FormField
            control={form.control}
            name="challenge"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">The Challenge</FormLabel>
                <FormControl>
                  <Textarea className={`${inputClassName} min-h-[100px]`} {...field} />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="solution"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-300">The Solution</FormLabel>
                <FormControl>
                  <Textarea className={`${inputClassName} min-h-[100px]`} {...field} />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />
        </div>

        <div className="flex items-center justify-between mt-10 mb-4 border-b border-[#222f49] pb-2">
          <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider">Project Images</h3>
          <Button type="button" variant="ghost" size="sm" onClick={() => appendImage({ title: "", file: undefined, url: "" })} className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/30 h-8">
            <Plus className="w-4 h-4 mr-2" /> Add Image
          </Button>
        </div>

        <div className="space-y-4">
          {imageFields.map((field, index) => (
            <div key={field.id} className="flex flex-col sm:flex-row gap-4 items-start bg-[#0b0f1a]/50 p-4 rounded-xl border border-[#222f49]/50 relative group">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-start">
                <FormField
                  control={form.control}
                  name={`imageUrl.${index}.title`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-slate-400">Image Title</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Homepage View" {...field} className={inputClassName} />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`imageUrl.${index}.file`}
                  render={({ field: { value, onChange, ...fieldProps } }) => {
                    const currentUrl = form.getValues(`imageUrl.${index}.url`)
                    const previewUrl = value instanceof File ? URL.createObjectURL(value) : currentUrl

                    return (
                      <FormItem>
                        <FormLabel className="text-xs text-slate-400">Upload Image</FormLabel>
                        <div className="flex items-center gap-3">
                          <Dialog>
                            <DialogTrigger asChild>
                              <div className={`w-12 h-12 rounded-lg border border-[#222f49] bg-[#182234] shrink-0 overflow-hidden flex items-center justify-center relative shadow-inner ${previewUrl ? "cursor-pointer group" : ""}`}>
                                {previewUrl ? (
                                  <>
                                    <Image src={previewUrl} alt="Preview thumbnail" fill className="object-cover transition-all duration-300 group-hover:opacity-40 group-hover:scale-110" unoptimized />
                                    <ZoomIn className="w-5 h-5 text-white absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md z-10" />
                                  </>
                                ) : (
                                  <ImageIcon className="w-5 h-5 text-[#52668d]/50" />
                                )}
                              </div>
                            </DialogTrigger>

                            {previewUrl && (
                              <DialogContent className="max-w-4xl bg-[#0b0f1a] border-[#222f49] p-2 overflow-hidden shadow-2xl">
                                <DialogTitle className="sr-only">Image Preview</DialogTitle>
                                <DialogDescription className="sr-only">Full-size preview of the uploaded project image.</DialogDescription>

                                <div className="relative w-full h-[80vh] flex items-center justify-center bg-[#182234]/50 rounded-lg overflow-hidden">
                                  <Image src={previewUrl} alt="Full-size preview" fill className="object-contain rounded-md" unoptimized />
                                </div>
                              </DialogContent>
                            )}
                          </Dialog>

                          <FormControl>
                            <div className="relative flex-1">
                              <Input type="file" accept="image/jpeg, image/png, image/webp" onChange={(e) => onChange(e.target.files && e.target.files[0])} className={`${inputClassName} h-12 pt-2.5 file:text-blue-400 file:font-semibold file:border-0 file:bg-[#222f49]/50 file:px-3 file:py-1 file:rounded-md file:mr-4 hover:file:bg-[#222f49] file:cursor-pointer cursor-pointer transition-all`} {...fieldProps} />
                              <UploadCloud className="w-4 h-4 text-[#52668d] absolute right-3 top-4 pointer-events-none" />
                            </div>
                          </FormControl>
                        </div>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )
                  }}
                />
              </div>

              <Button type="button" variant="ghost" size="icon" onClick={() => removeImage(index)} disabled={imageFields.length === 1} className="mt-0 sm:mt-8 text-red-400 hover:bg-red-900/30 disabled:opacity-50 shrink-0">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-10 mb-4 border-b border-[#222f49] pb-2">
          <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider">Impact Metrics (Optional)</h3>
          <Button type="button" variant="ghost" size="sm" onClick={() => appendMetric({ label: "", value: "" })} className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/30 h-8">
            <Plus className="w-4 h-4 mr-2" /> Add Metric
          </Button>
        </div>

        <div className="space-y-4">
          {metricFields.length === 0 && <p className="text-xs text-[#52668d] italic">No metrics added. Click &quot;Add Metric&quot; to showcase results (e.g. Performance, Users).</p>}
          {metricFields.map((field, index) => (
            <div key={field.id} className="flex gap-4 items-start bg-[#0b0f1a]/50 p-4 rounded-xl border border-[#222f49]/50 relative">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <FormField
                  control={form.control}
                  name={`metrics.${index}.label`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-slate-400">Metric Label</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Lighthouse Score" {...field} className={inputClassName} />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`metrics.${index}.value`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs text-slate-400">Metric Value</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 100%" {...field} className={inputClassName} />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="button" variant="ghost" size="icon" onClick={() => removeMetric(index)} className="mt-0 sm:mt-8 text-red-400 hover:bg-red-900/30">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-[#222f49] my-8" />

        <div className="flex items-center justify-end gap-3 pb-8">
          <Button type="button" variant="ghost" onClick={() => router.back()} disabled={isSubmitting} className="text-[#90a4cb] hover:text-white hover:bg-[#222f49] rounded-lg h-10 px-4 text-sm font-medium">
            <X className="w-4 h-4 mr-2" /> Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-10 px-6 min-w-[140px] text-sm font-medium shadow-md shadow-blue-900/20">
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" /> Save Project
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
