AOS.init();

let login       = document.querySelector('.login')
let Email       = document.querySelector('.email')
let Password    = document.querySelector('.password')
let logbutton   = document.querySelector('.log-button')
let sign        = document.querySelector('.sign')
let Alert       = document.querySelector('.Alert')
let register    = document.querySelector('.register')
let fullname    = document.querySelector('.full-name')
let Email2      = document.querySelector('.email2')
let Password2   = document.querySelector('.password2')
let logbutton2  = document.querySelector('.log-button2')

sign.addEventListener('click' , ()=>{
    login.style    = 'display:none;'
    register.style = 'display: block;'
})

logbutton.addEventListener('click' , ()=>{
    
    if(Email.value == ''){
        Alert.innerHTML = 'insert your email'
    }
    else if(Email.value !== 'merry@gmail.com'){
        Alert.innerHTML = 'put your valid email'
    }
    else if(Password.value == ''){
        Alert.innerHTML = 'insert your password'
    }else if(Password.value !== '1234'){
        Alert.innerHTML = 'put your valid password'
    }
    else{
       window.location.href = "account.html"
        Email.value    = ''
        Password.value = ''
    }
})
// =====login done

logbutton2.addEventListener('click' , ()=>{
    if(fullname.value == ''){
        alert('Enter Your Name')
    }
    else if(Email2.value == ''){
        alert('Enter Your Email')
    }
    else if(Password2.value == ''){
        alert('Enter Your Password')
    }
    else{
        window.location.href ="account.html"
        Email2.value    =''
        Password2.value = ''
        fullname.value  = ''
    }
})
// =====sign up done









// let loginButton = document.querySelector(".log-button")
// console.log(loginButton)
// loginButton.addEventListener("click",function(){
//     let loginInputValue = document.querySelector(".email").value
//     let passwordInputVlaue = document.querySelector(".password").value
    
    
//     if(loginButton ===""){
//         alert("emial is requred")
//     }
    
//     if(passwordInputVlaue ===""){
//         alert("password is requred")
//     }

//     else{
//         window.location.href="getStarted.html"
//     }


// })



// document.getElementById("ami").addEventListener("click",function(){
//     document.getElementById("custom_modal").classList.toggle("lksdhflksdh")
// })


