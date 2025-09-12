//var-page//signIn
var inputEmail = document.getElementById('emailData');
var inputPassword = document.getElementById('passwordData');
var alertMessage = document.getElementById('alert');
var alertMessageNot = document.getElementById('alertNotSuccess');
//var-page//signUp
var signName = document.getElementById('name');
var signEmail = document.getElementById('email');
var signtPass = document.getElementById('pass');
var alertSingOne = document.getElementById('SignNotSuccess');
var alertSingTwo = document.getElementById('SignSuccess');
var existingEmail = document.getElementById('existing');
//
var arrayList = [];
if(localStorage.getItem('dataList') != null) {
    arrayList = JSON.parse(localStorage.getItem('dataList'));
} 
//functionForIsValid-page-signUp
//functionForAddDataForUser
function addDataUser() {
    for(var i=0; i < arrayList.length ; i++ ) {
        var emailInput = arrayList[i].email
        if(signEmail.value === emailInput) {
            existingEmail.classList.remove('d-none')
            signEmail.classList.remove('is-valid')
            signEmail.classList.add('is-invalid')
            return
        }
}
    if(validsignName() && validsignEmail() && validsignPass()) {
        var data = {
            name: signName.value,
            email: signEmail.value,
            password: signtPass.value
        };
        arrayList.push(data);
        localStorage.setItem('dataList',JSON.stringify(arrayList))
    clearInput();
    removeValid();
    alertSingTwo.classList.remove('d-none')
    existingEmail.classList.add('d-none')
}
}
//functionForValidation
function validsignName() {
    var regex = /^[A-Za-z\s]{1,20}[A-Za-z\s]{1,20}[A-Za-z]{0,20}$/
    if(regex.test(signName.value)) {
        signName.classList.add('is-valid')
        signName.classList.remove('is-invalid')
        return true
    }else {
        signName.classList.remove('is-valid')
        signName.classList.add('is-invalid')
        // alertSingOne.classList.remove('d-none')
        return false
    }
}
//input02
function validsignEmail() {
    var rege = /^[A-Za-z0-9\s]{1,20}[A-Za-z\s]{1,20}[@][A-Za-z]{1,9}[.][A-Za-z]{1,9}$/
    if(rege.test(signEmail.value)) {
        signEmail.classList.add('is-valid')
        signEmail.classList.remove('is-invalid')
        alertSingOne.classList.add('d-none')
        return true
    }else {
        signEmail.classList.remove('is-valid')
        signEmail.classList.add('is-invalid')
        alertSingOne.classList.remove('d-none')
        return false
    }
}
//input03
function validsignPass() {
    var reg = /^[A-Za-z0-9]{1,20}$/
    if(reg.test(signtPass.value)) {
        signtPass.classList.add('is-valid')
        signtPass.classList.remove('is-invalid')
        alertSingOne.classList.add('d-none')
        return true
    }else {
        signtPass.classList.remove('is-valid')
        signtPass.classList.add('is-invalid')
        alertSingOne.classList.remove('d-none')
        return false
    }
}
//functionForClearInput
function clearInput() {
    signName.value = '';
    signEmail.value = '';
    signtPass.value = '';
}
////functionForRemoveIs-ValidFromInput
function removeValid() {
    signName.classList.remove('is-valid')
    signEmail.classList.remove('is-valid')
    signtPass.classList.remove('is-valid')
}
//functionForCheckDataFotUser-page-signIn
function checkData() {    
    for(var i = 0; i < arrayList.length ; i++ ) {
        var x = arrayList[i].email;
        var y = arrayList[i].password;
        if(inputEmail.value === x) {
            if (inputPassword.value === y) {
                alertMessage.classList.remove('d-none')
                alertMessageNot.classList.add('d-none')
                window.location.href = "home.html";
                return;
            }
        }else {
            alertMessage.classList.add('d-none');
            alertMessageNot.classList.remove('d-none')
        }
    };
}
//displayUserName
var messaText = document.getElementById('text')
for(var i = 0;i<arrayList.length;i++) {
    var nameText = arrayList[i].name
    messaText.innerHTML ='Welcome: ' + nameText
}
//buttonLogn
function btnLogin() {
    window.location.href = "index.html";

}
