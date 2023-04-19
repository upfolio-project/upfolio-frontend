import {ageDeclension, dayDeclension, monthDeclension, weekDeclension} from "@/shared/utils";

export function registerDateToView(registerDate: Date) {
    const now = new Date();

    if (!registerDate || !now) {
        return undefined;
    }
    const agesPass = now.getFullYear() - registerDate.getFullYear() -
        Number((now.getMonth() * 100 + now.getDate()) <= (registerDate.getMonth() * 100 + registerDate.getDate()));

    if (agesPass > 0)
        return `${ageDeclension(agesPass)} назад`;

    const monthsPass = now.getMonth() - registerDate.getMonth() +
        (now.getFullYear() - registerDate.getFullYear()) * 12 -
        Number(now.getDate() < registerDate.getDate());

    if (monthsPass > 0)
        return `${monthDeclension(monthsPass)} назад`;

    const weeksPass = Math.floor((now.valueOf() - registerDate.valueOf()) / 1000 / 60 / 60 / 24 / 7);

    if (weeksPass > 0) {
        return `${weekDeclension(weeksPass)} назад`;
    }

    const daysPass = Math.floor(
        (now.valueOf() - registerDate.valueOf()) / 1000 / 60 / 60 / 24);

    if (daysPass > 0) {
        return `${dayDeclension(daysPass)} назад`;
    }

    return "сегодня";
}
