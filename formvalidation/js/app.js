const form=document.querySelector('.form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const cfmpassword=document.getElementById('cfmpassword');


//success
function showsuccess(input){
    const formcontrol=input.parentElement;
    formcontrol.className="form-control success";
}
//error
function showerror(input,message){
    const formcontrol=input.parentElement;
    formcontrol.className="form-control error";

    const small=formcontrol.querySelector('small');
    small.innerText=message;
}
// check valid email(using regular expression)
function isvalidmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//Event Listener
form.addEventListener('submit',function(e){
    //username
    if(username.value===''){
        //error
        showerror(username,"Username is required");
    }else{
        //success
        showsuccess(username);
    }
    //email
    if(email.value===''){
        showerror(email,"Your email address is invalid");
    }else if(!isvalidmail(email.value)){
        showerror(email,"Your email address is invalid");
    }else{
        showsuccess(email);
    }
    //password
    if(password.value===''){
        showerror(password,"Password is required");
    }else{
        showsuccess(password);
    }
    //cfmpassword
    if(cfmpassword.value===''){
        showerror(cfmpassword,"Confrim Password is required");
    }else{
        
        if(password.value !== cfmpassword.value){
            showerror(cfmpassword,"Passwords do not match");
        }else{
            showsuccess(cfmpassword);
        }
    }
    e.preventDefault();
});


