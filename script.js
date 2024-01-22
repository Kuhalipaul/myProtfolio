/*-----------------------------onclick about section--------------------------*/
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
/*---------------------------------sidemenu-------------------*/
var sidemeu=document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right="0";
}
function closemenu(){
    sidemeu.style.right="-200px";
}

/*----------------submit the form------------------*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbycPVsrVi-OEYRunpJ_V8Qf-GoqxnTcyaUFYplvt9Yu5BitAzP20ltlb1KndmH6NGfB/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        /*--show msg send successfully---*/
        msg.innerHTML="Message sent successfully"
        /*--hide this sms after second--*/
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })