export function weekDeclension(week: number) {
    if (week % 10 >= 5 || (week >= 5 && week <= 20) || week % 10 === 0) {
        return `${week} недель`;
    }
    if (week % 10 >= 2 && week % 10 <= 4) {
        return `${week} недели`;
    }
    return `${week} неделю`;
}