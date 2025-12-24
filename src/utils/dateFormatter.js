export const FormatDate = (date = new Date(), locale = "en-US") => {
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date)
}
