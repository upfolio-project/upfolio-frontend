import {ProfileModelStatus} from "@/shared/api/entities";

export function userStatusToView(status: ProfileModelStatus | undefined) {
    switch (status) {
        case ProfileModelStatus.NOT_LOOKING_FOR_JOB:
            return "Не ищу работу";
        case ProfileModelStatus.LOOKING_FOR_JOB:
            return "Ищу работу";
        case ProfileModelStatus.FOUND_JOB:
            return "Нашёл работу";
        default:
            return "";
    }
}
