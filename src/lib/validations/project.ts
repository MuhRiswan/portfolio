import * as z from "zod"

export const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  subTitle: z.string().min(3, "Subtitle must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  longDescription: z.string().min(20, "Long description must be at least 20 characters"),
  challenge: z.string().min(10, "Challenge must be at least 10 characters"),
  solution: z.string().min(10, "Solution must be at least 10 characters"),
  liveUrl: z.string().url("Please enter a valid URL").or(z.literal("")).optional(),

  categories: z.string().min(1, "At least one category is required"),
  techStack: z.string().min(1, "At least one tech stack is required"),
  imageUrl: z
    .array(
      z.object({
        title: z.string().min(1, "Image title is required"),
        file: z
          .any()
          .optional()
          .refine((file) => !file || file.size <= 5 * 1024 * 1024, "Max file size is 5MB"),
        url: z.string().optional(),
      }),
    )
    .refine((data) => data.every((item) => item.file || item.url), "Please select an image file"),

  metrics: z
    .array(
      z.object({
        label: z.string().min(1, "Metric label is required (e.g., 'Users')"),
        value: z.string().min(1, "Metric value is required (e.g., '10k+')"),
      }),
    )
    .optional(),

  details: z.object({
    role: z.string().min(1, "Role is required (e.g., 'Fullstack Dev')"),
    timeline: z.string().min(1, "Timeline is required (e.g., '3 Months')"),
    client: z.string().min(1, "Client is required (e.g., 'Internal', 'PT ABC')"),
  }),
})

export type ProjectFormValues = z.infer<typeof projectSchema>
