export function GetValidationPassword(password: string): boolean {
    return !(password.length >= 8);
}

export function GetValidationPhone(phone: string): boolean {
    return !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone);
}

export function GetValidationCode(code:string):boolean {
    return !/^\d+$/.test(code);
}

export function GetValidationUsername(username:string):boolean{
    return  !/^[a-zA-Z0-9]+$/.test(username);
}