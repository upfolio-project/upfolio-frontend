export function GetValidationPassword(password: string): boolean {
    return !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20}/.test(password);
}

export function GetValidationPhone(phone: string): boolean {
    return !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone);
}