import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import localizedFormat from "dayjs/plugin/localizedFormat"
import "dayjs/locale/id"

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
dayjs.locale("id")

export const formatDate = {
  // Format standar: "Apr 15, 2026"
  standard: (date: Date | string | null) => {
    if (!date) return "-"
    return dayjs(date).format("MMM D, YYYY")
  },

  // Format lengkap: "April 15, 2026 11:46 AM"
  full: (date: Date | string | null) => {
    if (!date) return "-"
    return dayjs(date).format("LLLL")
  },

  // Format relatif: "2 days ago", "a few seconds ago"
  relative: (date: Date | string | null) => {
    if (!date) return "-"
    return dayjs(date).fromNow()
  },

  // Format kustom sesuai kebutuhan
  custom: (date: Date | string | null, template: string) => {
    if (!date) return "-"
    return dayjs(date).format(template)
  },
}
