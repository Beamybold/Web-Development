const aboutme=prac.getElementById("aboutme")
const mycontact=prac.getElementById("mycontact")
const myskills=prac.getElementById("myskills")
const about=prac.getElementById("about")
const contact=prac.getElementById("contact")
const skills=prac.getElementById("skills")

aboutme.onclick= function(){
    about.style.display = "block"
    contact.style.display = "none"
    skills.style.display = "none"
}
mycontact.onclick= function(){
    about.style.display = "none"
    contact.style.display = "block"
    skills.style.display = "none"
}

