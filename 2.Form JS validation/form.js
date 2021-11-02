let validateUserName = (userName) => {
    if (userName != "") {
        return true;
    } else {
        document.getElementById('nameError').innerText = "Ваше имя введено некорректно";
        document.getElementById('userName').value = "";
        return false;
    }
}

let validateUserSurName = (surname) => {
    if (surname != "") {
        return true;
    } else {
        document.getElementById('surNameError').innerText = "Ваша фамилия введена некорректно";
        document.getElementById('userSurname').value = "";
        return false;
    }
}

let validateLogin = (login) => {
    if (login != "") {
        return true;
    } else {
        document.getElementById('loginError').innerText = "Ваш логин введен некорректно";
        document.getElementById('userLogin').value = "";
        return false;
    }
}

let validatePassword = (password) => {
    let passwordPattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (password.match(passwordPattern)) {
        return true;
    } else {
        document.getElementById('passwordError').innerText = "Пароль должен содержать строчные и прописные латинские буквы, цифры, спецсимволы. Минимум 8 символов";
        document.getElementById('password').value = "";
        return false;
    }
}

let validatePasswordMatch = (passwordCopy) => {
    if (passwordCopy.match(password)) {
        return true;
    } else {
        document.getElementById('passwordCopyError').innerText = "Пароли не совпадают";
        document.getElementById('passwordCopy').value = "";
        return false;
    }
}

let validatePhone = (phone) => {
    let phonePattern = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;
    if (phone.match(phonePattern)) {
        return true;
    } else {
        document.getElementById('phoneError').innerText = "Ваш номер телефона введен неверно Примеры: +7 xxx xxx xx xx";
        document.getElementById('phoneNumber').value = "";
        return false;
    }
}

function checkAll(event) {
    event.preventDefault();
    const userName = document.getElementById("userName").value;
    const surname = document.getElementById("userSurname").value;
    const login = document.getElementById("userLogin").value;
    const password = document.getElementById("password").value;
    const passwordCopy = document.getElementById("passwordCopy").value;
    const phone = document.getElementById("phoneNumber").value;

    let result = validateUserName(userName) 
    && validateUserSurName(surname) 
    && validateLogin(login) 
    && validatePassword(password)
    && validatePasswordMatch(passwordCopy)
    && validatePhone(phone)

if (result) {
    alert(`Добро пожаловать, ${userName}!`)
}
}

document.getElementById("submit").onclick = checkAll;