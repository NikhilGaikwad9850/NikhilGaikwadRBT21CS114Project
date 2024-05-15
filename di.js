let locationbx=document.getElementById('locationbx');
let search_arrow=document.getElementById('search_arrow');
let search=document.getElementById('search');

search.addEventListener('focusin',()=>{
    locationbx.style.visibility="visible";
    search_arrow.style.transform="rotate(180deg)";
    locationbx.style.opacity=1;
})
search.addEventListener('focusout',()=>{
    locationbx.style.visibility="hidden";
    search_arrow.style.transform="rotate(0deg)";
    locationbx.style.opacity=0;
})

let email=document.getElementById('email');
let phone=document.getElementById('phone');
let emails=document.getElementById('emails');
let phones=document.getElementById('phones');
let emails_phones=document.getElementById('emails_phones');

phone.addEventListener('click',()=>{
    emails_phones.classList.add('show_more');
    email.checked=false;

})
email.addEventListener('click',()=>{
    emails_phones.classList.add('show_more');
    phone.checked=false;

})