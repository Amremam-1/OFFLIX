import { useEffect, useState } from "react"
import { FormatDate } from "../utils/dateFormatter"

export const useCurrentDate = (locale = "en-US") => {
  const [date, setDate] = useState(() => FormatDate(new Date(), locale))

  useEffect(() => {
    const updateDate = () => {
      setDate(FormatDate(new Date(), locale))
    }

    updateDate()

    // check once per minute (lightweight)
    const interval = setInterval(updateDate, 60 * 1000)

    return () => clearInterval(interval)
  }, [locale])

  return date
}
