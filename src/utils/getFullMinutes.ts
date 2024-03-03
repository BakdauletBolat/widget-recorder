export const getFullMinutes = (date: Date) => {
    if (date.getMinutes() < 10) {
        return "0"+date.getMinutes();
    }
    return date.getMinutes();
}

export const getFullHours = (date: Date) => {
    if (date.getHours() < 10) {
        return "0"+date.getHours();
    }
    return date.getHours();
}