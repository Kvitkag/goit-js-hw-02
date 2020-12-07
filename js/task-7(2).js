const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const loginInputRef = document.querySelector('input[name="log"]');
const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', function () {

    const isLoginValid = login => login.length >= 4 && login.length <= 16;

    const isLoginIn = (allLogins, login) => allLogins.includes(login);

    const addLogin = function (allLogins, login) {
        
        if (!isLoginValid(login)) {
            return 'Ошибка! Логин должен быть от 4 до 16 символов';
        }

        if (isLoginIn(allLogins, login)) {
            return 'Такой логин уже используется!';
        }

        allLogins.push(login)
        return 'Логин успешно добавлен!';
    };

    console.log(addLogin(logins, loginInputRef.value));
});