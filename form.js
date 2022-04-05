function validation(){
    var firstname=document.registration.fname;
    var email=document.registration.email;
    var uname=document.registration.uname;
    var number=document.registration.number;

    if(allLettername(firstname)){
        if(allLetterlast(email)){
            if(genderSelect(uname)){
                if(Mobile(number)){

                }
            }
        }
    }
    return false;
}

function allLettername(firstname){
    var letters= /^[A-Za-z]+$/;
    if(firstname.value.length==0){
        alert('Please enter your name');
        firstname.focus();
        return false;
    }
    else if(firstname.value.match(letters)){
        return true;
    }
    else{
        alert('First name must have alphabet characters only');
        firstname.focus();
        return false;
    }
}

function allLetteremail(email){
    var letters= /^[A-Za-z]+$/;
    if(email.value.length==0){
        alert('Please enter your email');
        email.focus();
        return false;
    }
    else if(email.value.match(letters)){
        return true;
    }
    else{
        alert('Must be a valid email');
        email.focus();
        return false;
    }
}

function Mobile(number){
    var numbers= /^[0-9]+$/;
    if(number.value.length==0){
        alert('Please enter your phone number');
        number.focus();
        return false;
    }
    else if(number.value.match(numbers)){
        return true;
    }
    else{
        alert('Phone number can only have numerical values');
        number.focus();
        return false;
    }
}
