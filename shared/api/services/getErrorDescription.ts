export default function GetErrorDescription(error: string) {
    //in the future, you need to specify the requirement
    switch (error) {
        case "The account with this phone number is not found":
            return "Аккаунта с таким номером не существует";
        case "Password is incorrect":
            return "Неверный пароль";
        case "Bad password":
            return "Пароль не соответствует требованиям";
        case "Bad phone":
            return "Телефон не соответствует требованиям";
        case "Code must contain only numbers":
            return "Код подтверждения должен состоять только из цифр";
        case "Bad username":
            return "Имя пользователя не соответствует требования";
        case "Invalid OTP code":
            return "Неверный одноразовый код";
        case "Too many OTP attempts":
            return "Слишком много попыток. Попробуйте позже";
        case "Registration steps fault, please reload the page":
            return "Регистрация не была завершена, обновите страницу";
        default:
            return "Что-то пошло не так, попробуйте обновить страницу";
    }
}