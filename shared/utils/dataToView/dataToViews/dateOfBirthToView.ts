import {ageDeclension} from "@/shared/utils";


export function dateOfBirthToView(dateOfBirth: Date) {
    const today = new Date();
    const age = today.getFullYear() - dateOfBirth.getFullYear() -
        Number((today.getMonth() * 100 + today.getDate()) <= (dateOfBirth.getMonth() * 100 + dateOfBirth.getDate()));

    return ageDeclension(age);
}
