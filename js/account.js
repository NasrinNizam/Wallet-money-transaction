
let mainaccount = document.querySelector('.main-account')
let greetings   = document.querySelector('.greetings')
let Name        = document.querySelector('.Name')
let total       = document.querySelector('.total')
let information = document.querySelector('.information')
let history     = document.querySelector('.history')
let recharge    = document.querySelector('.recharge')
let send        = document.querySelector('.send')
let deposit     = document.querySelector('.deposit')
let withdraw    = document.querySelector('.withdraw')
let pay         = document.querySelector('.pay')
let step1       = document.querySelector('.step1')
let phone       = document.querySelector('.phone')
let done        = document.querySelector('.done')
let last        = document.querySelector('.last')
let cardw       = document.querySelector('.cardw')
let online      = document.querySelector('.online')
let first       = document.querySelector('.first')
let s1          = document.querySelector('.s1')
let s2          = document.querySelector('.s2')
let step2       = document.querySelector('.step2')
let last1       = document.querySelector('.last1')
let bankno      = document.querySelector('.bankno')
let bamount     = document.querySelector('.bamount')
let bankbtn     = document.querySelector('.bankbtn')
let last2       = document.querySelector('.last2')
let next        = document.querySelector('.next')
let next2       = document.querySelector('.next2')
let taka        = document.querySelector('.taka')
let donebtn     = document.querySelector('.donebtn')
let frm1        = document.querySelector('.frm1')
let frm2        = document.querySelector('.frm2')
let step3       = document.querySelector('.step3')
let frm3        = document.querySelector('.frm3')
let phone2      = document.querySelector('.phone2')
let next3       = document.querySelector('.next3')
let s3          = document.querySelector('.s3')
let step4       = document.querySelector('.step4')
let frm4        = document.querySelector('.frm4')
let taka2       = document.querySelector('.taka2')
let next4       = document.querySelector('.next4')
let s4          = document.querySelector('.s4')
let step5       = document.querySelector('.step5')
let frm5        = document.querySelector('.frm5')
let phone3      = document.querySelector('.phone3')
let serial      = document.querySelector('.serial')
let next5       = document.querySelector('.next5')
let s5          = document.querySelector('.s5')
let step6       = document.querySelector('.step6')
let frm6        = document.querySelector('.frm6')
let taka3       = document.querySelector('.taka3')
let next6       = document.querySelector('.next6')
let s6          = document.querySelector('.s6')
let step7       = document.querySelector('.step7')
let frm7        = document.querySelector('.frm7')
let phone4      = document.querySelector('.phone4')
let next7       = document.querySelector('.next7')
let s7          = document.querySelector('.s7')
let step8       = document.querySelector('.step8')
let frm8        = document.querySelector('.frm8')
let taka4       = document.querySelector('.taka4')
let next8       = document.querySelector('.next8')
let s8          = document.querySelector('.s8')
let cardno      = document.querySelector('.cardno')
let cardamount  = document.querySelector('.cardamount')
let cardbtn     = document.querySelector('.cardbtn')

let balance     = 50
total.innerHTML = balance



information.addEventListener('click' , ()=>{
    serial.classList.toggle("serial")
    serial.style = 'transition:.3s;'
})


recharge.addEventListener('click' , ()=>{
    
    first.style = 'display:none;'
    step1.style = 'display:block;'
   
}) 
next.addEventListener('click' , ()=>{
    if(phone.value == ''){
        s1.innerHTML = 'insert your phone number'
    }
    else if(phone.value<10000000000 || phone.value>99999999999){
        s1.innerHTML = 'number should be 11 digit'
    }
    else{
        step1.style  = 'display:none;'
        step2.style  = 'display:block;'
        s1.innerHTML = ''
        phone.value  = ''
    }
})
next2.addEventListener('click' , ()=>{
    if(taka.value == ''){
        s2.innerHTML = 'inser your amount'
    }
    else if(taka.value>balance){
        alert('insufficient balance') 
        step2.style = 'display:none;'
        first.style = 'display:block;'
        taka.value  = ''
    }
    else{
        let check = document.createElement('li')
        serial.appendChild(check)
        check.classList.add('check')


        total.innerHTML = Number(balance) - Number(taka.value)
        step2.style = 'display:none;'
        done.style = 'display:block;'
        s2.innerHTML = ''
        check.innerHTML = 'Recharge '+ taka.value + 'tk'
                        
        donebtn.addEventListener('click' , ()=>{
            done.style = 'display:none;'
            first.style = 'display:block;'
            taka.value = ''
            let newbalance = total.innerHTML
            balance = newbalance
        })

    }
})

// =======recharge done

send.addEventListener('click' , ()=>{
    
    first.style = 'display:none;'
    step3.style = 'display:block;'
   
}) 
next3.addEventListener('click' , ()=>{
    if(phone2.value == ''){
        s3.innerHTML = 'insert your phone number'
    }
    else if(phone2.value<10000000000 || phone2.value>99999999999){
        s3.innerHTML = 'number should be 11 digit'
    }
    else{
        step3.style = 'display:none;'
        step4.style = 'display:block;'
        s3.innerHTML = ''
        phone2.value = ''
    }
})
next4.addEventListener('click' , ()=>{
    if(taka2.value == ''){
        s4.innerHTML = 'inser your amount'
    }
    else if(taka2.value>balance){
        alert('insufficient balance')
        step4.style = 'display:none;'
        first.style = 'display:block;'
        taka2.value = ''
    }
    else{
        let check = document.createElement('li')
        serial.appendChild(check)
        check.classList.add('check')


        total.innerHTML = Number(balance) - Number(taka2.value)
        step4.style = 'display:none;'
        done.style = 'display:block;'
        s4.innerHTML = ''
        check.innerHTML = 'Send Money '+ taka2.value + 'tk'
        
        donebtn.addEventListener('click' , ()=>{
            done.style = 'display:none;'
            first.style = 'display:block;'
            taka2.value = ''
            let newbalance = total.innerHTML
            balance = newbalance
        })

    }
})
// ====send money done


deposit.addEventListener('click' , ()=>{
    first.style = 'display:none;'
    last.style = 'display:block;'
})


cardw.addEventListener('click' , ()=>{
    last.style ='display:none;'
    last1.style = 'display:block;'
    cardbtn.addEventListener('click' , ()=>{
        if(cardno.value == ''){
            alert('Enter your card number')
        }
        else if(cardamount.value == ''){
            alert('Enter Your Amount')
        }
        else{
            let check = document.createElement('li')
            serial.appendChild(check)
            check.classList.add('check')

            last1.style = 'display:none;'
            done.style = 'display:block;'
            total.innerHTML = Number(balance) + Number(cardamount.value)
            check.innerText = 'Deposit '+ cardamount.value +'tk'
            
            donebtn.addEventListener('click', ()=>{
                done.style = 'display:none;'
                first.style = 'display:block;'
                cardno.value = ''
                cardamount.value = ''
                let newbalance = total.innerHTML
                balance = newbalance
            })

        }
    })
})



online.addEventListener('click' , ()=>{
    last.style = 'display:none;'
    last2.style = 'display:block;'
    bankbtn.addEventListener('click' ,()=>{
        if(bankno.value == ''){
            alert('Enter the bank account number')
        }
        else if(bamount.value == ''){
            alert('enter the amount')
        }
        else{
            let check = document.createElement('li')
            serial.appendChild(check)
            check.classList.add('check')



            last2.style = 'display:none;'
            done.style = 'display:block;'
            total.innerHTML = Number(balance) + Number(bamount.value)
            check.innerText = 'Deposit '+ bamount.value +'tk'
            bamount.value = ''
            bankno.value = ''
            donebtn.addEventListener('click' , ()=>{
                done.style = 'display:none;'
                first.style = 'display:block;'
                bamount.value = ''
                bankno.value = ''
                let newbalance = total.innerHTML
                balance = newbalance
            })
        }
    })

})




// ====deposit done


withdraw.addEventListener('click' , ()=>{
    
    first.style = 'display:none;'
    step5.style = 'display:block;'
   
}) 
next5.addEventListener('click' , ()=>{
    if(phone3.value == ''){
        s5.innerHTML = 'insert your phone number'
    }
    else if(phone3.value<10000000000 || phone3.value>99999999999){
        s5.innerHTML = 'number should be 11 digit'
    }
    else{
        step5.style = 'display:none;'
        step6.style = 'display:block;'
        s5.innerHTML = ''
        phone3.value = ''
    }
})
next6.addEventListener('click' , ()=>{
    if(taka3.value == ''){
        s6.innerHTML = 'inser your amount'
    }
    else if(taka3.value>balance){
        alert('insufficient balance')
        step6.style = 'display:none;'
        first.style = 'display:block;'
        taka3.value = ''
    }
    else{
        let check = document.createElement('li')
        serial.appendChild(check)
        check.classList.add('check')


        total.innerHTML = Number(balance) - Number(taka3.value)
        step6.style = 'display:none;'
        done.style = 'display:block;'
        s6.innerHTML = ''
        check.innerHTML = 'Withdraw '+ taka3.value + 'tk'
        donebtn.addEventListener('click' , ()=>{
            done.style = 'display:none;'
            first.style = 'display:block;'
            taka3.value = ''
            let newbalance = total.innerHTML
            balance = newbalance
        })

    }
})

// ==== withdraw done

pay.addEventListener('click' , ()=>{
    
    first.style = 'display:none;'
    step7.style = 'display:block;'
   
}) 
next7.addEventListener('click' , ()=>{
    if(phone4.value == ''){
        s7.innerHTML = 'insert your phone number'
    }
    else if(phone4.value<10000000000 || phone4.value>99999999999){
        s7.innerHTML = 'number should be 11 digit'
    }
    else{
        step7.style = 'display:none;'
        step8.style = 'display:block;'
        s7.innerHTML = ''
        phone4.value = ''
    }
})
next8.addEventListener('click' , ()=>{
    if(taka4.value == ''){
        s8.innerHTML = 'inser your amount'
    }
    else if(taka4.value>balance){
        alert('insufficient balance')
        step8.style = 'display:none;'
        first.style = 'display:block;'
        taka4.value = ''
    }
    else{
        let check = document.createElement('li')
        serial.appendChild(check)
        check.classList.add('check')


        total.innerHTML = Number(balance) - Number(taka4.value)
        step8.style = 'display:none;'
        done.style = 'display:block;'
        s8.innerHTML = ''
        check.innerHTML = 'Pay '+ taka4.value + 'tk'
        donebtn.addEventListener('click' , ()=>{
            done.style = 'display:none;'
            first.style = 'display:block;'
            taka4.value = ''
            let newbalance = total.innerHTML
            balance = newbalance
        })

    }
})

