export function monthDeclension(month: number) {
    if (month % 10 >= 5 || (month >= 5 && month <= 20) || month % 10 === 0) {
        return `${month} месяцев`;
    }
    if (month % 10 >= 2 && month % 10 <= 4) {
        return `${month} месяца`;
    }
    return `${month} месяц`;
}
