api="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

let inputText=document.querySelector('.inputText')
let imageBox=document.querySelector('.imageBox')
let qrBtn=document.querySelector('.qrBtn')
let qrImg=document.querySelector('.qrImg')
const generateQR=()=>{
    if(inputText.value===""){
        console.log("No text")
    }
    else{
        qrImg.src= api+inputText.value
        inputText.value=""
    }
}