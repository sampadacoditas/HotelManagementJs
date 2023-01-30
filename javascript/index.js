import reference from "./reference.js";
import {http} from "./http.js"
//review form
reference.loginbutton.addEventListener("click",()=>
{  reference.container2.style.display="block";})

reference.rating.addEventListener("click",()=>
{
    reference.giverating.style.display="block";
    reference.loginbutton.style.display="none";
})
reference.submit.addEventListener('click',(event)=>
{
    let x=document.forms["myForm"]["reviewerName"].value;
    if(x =="")
    {
        alert("reviwername must be filled");
        return false;
    }
    else
    {
        const data={
            restrantName:reference.restrantName.value,
            rating:[
                {  
                    reviewerName:reference.reviewerName.value,
                    Food:reference.Food.value,
                    Ambiance:reference.Ambiance.value,
                    cleanliness:reference.cleanliness.value,
                    service:reference.service.value,
                    overall:reference.overall.value
                }
            ]
        }
        // console.log(reference.overall.value)
        console.log(data);
        const a= http.post("users",data);
        console.log(a);
    }
    event.preventDefault();
})
//login page
reference.send.addEventListener("click",(event)=>
{
  
  let x=document.forms["login_details"]["name"].value;
  let y=document.forms["login_details"]["password"].value
  if(x==""||y=="")
  {
    if(x=="")
    {
        alert("please enter the login_name");
        return false;
    }
    else{
        alert("please enter the password")
        return false;
    }
  }
  else{
    const data={
        name:reference.login_name.value,
        password:reference.password.value
    }
    console.log(data);
    const postoutput=http.post("users",data)
    console.log(postoutput);
  }
  event.preventDefault();
  window.location.replace("../manager.html")
})

//manager login get method




