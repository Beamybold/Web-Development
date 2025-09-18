const aboutme=document.getElementById("aboutme")
const mycontact=document.getElementById("mycontact")
const myskills=document.getElementById("myskills")
const about=document.getElementById("about")
const contact=document.getElementById("contact")
const skills=document.getElementById("skills")




aboutme.onclick= function(){
    about.style.display="block";
    contact.style.display="none";
    skills.style.display="none";
};

mycontact.onclick= function(){
    about.style.display="none";
    contact.style.display="block";
    skills.style.display="none";
};

myskills.onclick= function(){
    about.style.display="none";
    contact.style.display="none";
    skills.style.display="block";
};
