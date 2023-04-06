export function ageDeclension(age: number) {
    if (age % 10 >= 5 || (age >= 5 && age <= 20) || age % 10 === 0) {
        return `${age} лет`;
    }
    if (age % 10 >= 2 && age % 10 <= 4) {
        return `${age} года`;
    }
    return `${age} год`;
}