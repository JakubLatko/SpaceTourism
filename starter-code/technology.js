var vehicle = document.querySelector(".vehicleSwitcher")
var spaceport = document.querySelector(".spaceportSwitcher")
var capsule  = document.querySelector(".capsuleSwitcher")

var techName = document.querySelector(".technologyName")
var techText = document.querySelector(".technologyParagraph")
var techImage = document.querySelector(".technologyImage")
var mobileImage = document.querySelector(".mobileImage")

spaceport.addEventListener("click", ()=>{
    vehicle.classList.remove("activated")
    spaceport.classList.add("activated")
    capsule.classList.remove("activated")
    techName.innerHTML="Spaceport"
    techText.innerHTML="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft," +
    "by analogy to the seaport for ships or airport for aircraft. Based in the " +
    " famous Cape Canaveral, our spaceport is ideally situated to take advantage " +
    " of the Earth’s rotation for launch."
    techImage.src="../starter-code/assets/technology/image-spaceport-portrait.jpg"
    mobileImage.src="../starter-code/assets/technology/image-spaceport-landscape.jpg"
})

capsule.addEventListener("click", ()=>{
    vehicle.classList.remove("activated")
    spaceport.classList.remove("activated")
    capsule.classList.add("activated")
    techName.innerHTML="Space capsule"
    techText.innerHTML=" A space capsule is an often-crewed spacecraft that uses a blunt-body reentry "+
    "capsule to reenter the Earth's atmosphere without wings. Our capsule is where" +
    " you'll spend your time during the flight. It includes a space gym, cinema,"+ 
    " and plenty of other activities to keep you entertained."
    techImage.src="../starter-code/assets/technology/image-space-capsule-portrait.jpg"
    mobileImage.src="../starter-code/assets/technology/image-space-capsule-landscape.jpg"
})

vehicle.addEventListener("click", ()=>{
    vehicle.classList.add("activated")
    spaceport.classList.remove("activated")
    capsule.classList.remove("activated")
    techName.innerHTML="Launch vehicle"
    techText.innerHTML="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a"+ 
    "payload from Earth's surface to space, usually to Earth orbit or beyond. Our "+
    " WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,"+ 
    " it's quite an awe-inspiring sight on the launch pad!"
    techImage.src="../starter-code/assets/technology/image-launch-vehicle-portrait.jpg"
    mobileImage.src="../starter-code/assets/technology/image-launch-vehicle-landscape.jpg"
})