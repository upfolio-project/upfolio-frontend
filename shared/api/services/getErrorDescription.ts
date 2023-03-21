export default function GetErrorDescription(error: string) {
    //in the future, you need to specify the requirement
    switch (error) {
        case 'The account with this phone number is not found':
            return 'Аккаунта с таким номером не существует';
        case 'Password is incorrect':
            return 'Неверный пароль';
        case 'Bad password':
            return 'Пароль не соответствует требованиям';
        case 'Bad phone':
            return 'Телефон не соответствует требованиям';
        case 'Code must contain only numbers':
            return 'Код подтверждения должен состоять только из цифр';
        case 'Bad username':
            return 'Имя пользователя не соответствует требования';
        default:
            return 'Похоже что-то пошло не так, попробуйте обновить страницу';
    }
}