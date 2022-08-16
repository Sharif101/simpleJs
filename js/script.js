// log in from js work  here /
document.getElementById('btn-submit').addEventListener('click', function(){
    let mail_inpt = document.getElementById('mail-inpt');
    let email = mail_inpt.value;

    let pass_inpt = document.getElementById('pass-inpt');
    let pass = pass_inpt.value;

    if(email==='sharif@gmail.com' && pass==='1234'){
        window.location.href = 'hotel.html';
    }
    else{
        alert('Please enter correct email and password')
    }

    mail_inpt.value = '';
    pass_inpt.value = '';

})
// ---------------------------------------------------------------------------
