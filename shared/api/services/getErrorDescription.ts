export default function GetErrorDescription(error: string) {
    switch (error) {
        case 'Bad password':
            return 'Пароль не соответствует требованиям';
        case 'Bad phone':
            return 'Телефон не соответствует требованиям';
        default:
            return 'Похоже что-то пошло не так, попробуйте обновить страницу';
    }
}