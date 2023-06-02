let firtName = document.querySelector(".info-firlName")
let lastName = document.querySelector(".info-LastName")
let infoEmaii = document.querySelector(".info-email")
let infoPhone = document.querySelector(".info-phoneNumber")
let arpatment = document.querySelector(".info-apartmentNumber")
let selectProvince = document.querySelector(".selectTinh")
let selectDistrict = document.querySelector(".selectHuyen")
let selectWard = document.querySelector(".selectXa")
let mesenger = document.querySelector(".info-messenger")

function showError(input, mesenger) {
    let getParrenVariable = input.parentElement;
    let error = getParrenVariable.querySelector('.error')
    error.innerHTML = mesenger;
}
function showSuccess(input) {
    let getParrenVariable = input.parentElement;
    let error = getParrenVariable.querySelector('.error')
    error.innerHTML = '';
}

// check định dạng email
function checkEmailError(input) {
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;

    input.value = input.value.trim();
    if (regexEmail.test(input.value) === false && input.value !== '') {
        showError(input, 'xin hay nhập đúng định dạng email ')
        return false
    } else if (regexEmail.test(input.value)) {
        showSuccess(infoEmaii)
        return true
    }
}

///// check không được để trống
function checkemptyError(listinput) {
    let isEmptyError = false;
    listinput.forEach(input => {
        input.value = input.value.trim()
        if (input.value === '') {
            isEmptyError = true;
            showError(input, 'không được để trống');
        } else {
            showSuccess(input);
        }
    });
    return isEmptyError;
}
function checkLengthError(input, min, max, mesenger) {
    input.value = input.value.trim();
    let isLengError = false;
    if (input.value.length >= 1 && input.value.length < min) {
        showError(input, ` phải có ít nhất ${min} ${mesenger}`);
        return isLengError = true;
    }
    if (input.value.length > max) {
        showError(input, `tối đa không quá ${max} ${mesenger}`);
        return isLengError = true;
    }
    return isLengError;
}

function closeNotification() {
    showSuccess(firtName)
    showSuccess(lastName)
    showSuccess(infoEmaii)
    showSuccess(infoPhone)
    showSuccess(arpatment)
}


function saveLocalStorage(key = '', value = '') {
    localStorage.setItem(key, JSON.stringify(value));
}
function takeLocalStorage(key = '') {
    JSON.parse(localStorage.getItem(keyLocalStorageListSP));
}