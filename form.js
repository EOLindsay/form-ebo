document.addEventListener('DOMContentLoaded', ()=>{
    const flname = document.getElementById('flname')
    const email = document.getElementById('email')
    const phn = document.getElementById('phn')
    const com = document.getElementById('com')
    const msg = document.getElementById('msg')
    const cap = document.getElementById('cap')
    const submitBtn = document.getElementById('submit')

    const clearForm = ()=>{
        flname.value = ''
        email.value = ''
        phn.value = ''
        com.value = ''
        msg.value = ''
        cap.value =''
    }
    
    let user = []
    submitBtn.addEventListener('click', ()=>{
        let userObj = {}

        userObj.name = flname.value
        userObj.email = email.value
        userObj.phoneNumber = phn.value
        userObj.companyName = com.value
        userObj.message = msg.value
        userObj.captchaText = cap.value

        user.push(userObj)
        clearForm()

        console.log({user})
    })
})