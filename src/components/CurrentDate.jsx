import { useCurrentDate } from "../hooks/useCurrentDate"

const CurrentDate = ({ locale = "ar-US", className = "" }) => {
  const date = useCurrentDate(locale)

  return (
    <time dateTime={new Date().toISOString()} className={className}>
      {date}
    </time>
  )
}

export default CurrentDate
