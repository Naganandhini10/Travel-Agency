const form=document.querySelector('#form');
const email=document.querySelector('#email');
const place=document.querySelector('#place');
const members=document.querySelector('#members');
const arrivals=document.querySelector('#arrivals');
const leaving=document.querySelector('#leaving');
let success=true;
var today=new Date();

form.addEventListener('submit',(e)=>{
  
   if(!ValidateInputs()){
    e.preventDefault();
   }
})


function ValidateInputs(){
    const emailVal=email.value.trim();
    const placeVal=place.value;
    const membersVal=members.value;
    const arrivalsDate=arrivals.value;
    var arrivalsVal=new Date(arrivalsDate);
    var arrivalsValYr=new getFullYear(arrivalsDate);
    const leavingDate=leaving.value;
    var leavingVal=new Date(leavingDate);
    //mail validation
    if(emailVal===''){
        success=false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success=false;
        setError(email,'invalid email address')
    }
    else{
        setSuccess(email)
    }
    // //place validation
    // if(placeVal===''||'Where to go'){
    //     success=false;
    //     setError(place,'place is required')
    // }
    // else{
    //     setSuccess(place)
    // }
   //member validation
   if(membersVal==='0'){
    success=false;
    setError(members,'minimum 1 member is required')
   }
   else if(membersVal===''){
    success=false;
    setError(members,'cannot be empty');
   }
   else if(membersVal>50){
    success=false;
    setError(members,'more than 50 members are not allowed')
   }
   else{
    setSuccess(members)
   }
   //date vaidation-arrivals
   if(arrivalsVal<today){
    success=false;
    setError(arrivals,'no time travel factility to the past dates available')
   }
   else if(arrivalsDate===''){
    success=false;
    setError(arrivals,'arrivals cannot be empty')
   }
   else{
    setSuccess(arrivals)
   }
   //date validation-leaving
   if(leavingDate===''){
    success=false;
    setError(leaving,'Leaving date cannot be empty')
   }
   else if(leavingVal<arrivalsVal || leavingVal<today){
    success=false;
    setError(leaving,'leaving day must be calculated properly')
   }
   else{
    setSuccess(leaving)
   }

   return success
}

function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

 // Regular expression for email validation

 const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  