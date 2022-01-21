export const formatDate = (locale, date) => {
    const options = { month:"long", year:"numeric", day:"numeric" }
    return Intl.DateTimeFormat(locale,options).format(date)
}