var commander = document.querySelector(".commander")
var missionSpecialist = document.querySelector(".mission-specialist")
var pilot = document.querySelector(".pilot")
var engineer = document.querySelector(".engineer")


var commanderMobile = document.querySelector(".commanderMobile")
var missionSpecialistMobile = document.querySelector(".mission-specialistMobile")
var pilotMobile = document.querySelector(".pilotMobile")
var engineerMobile = document.querySelector(".engineerMobile")



var crewImage = document.querySelector(".crewPhoto")
var crewName = document.querySelector(".crewName")
var crewJob = document.querySelector(".crewJob")
var crewText = document.querySelector(".crewParagraph")
var mobileOnly = document.querySelector(".mobileOnlyImage")



missionSpecialist.addEventListener("click", ()=>{
    
    commander.classList.remove("active")
    pilot.classList.remove("active")
    engineer.classList.remove("active")
    missionSpecialist.classList.add("active")
    crewImage.src="../starter-code/assets/crew/image-mark-shuttleworth.png"
    mobileOnly.src="../starter-code/assets/crew/image-mark-shuttleworth.png"
    crewName.innerHTML="Mark Shuttleworth"
    crewJob.innerHTML = "Mission Specialist"
    crewText.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind" +
    "the Linux-based Ubuntu operating system. Shuttleworth became the first South" +
    "African to travel to space as a space tourist."
})

commander.addEventListener("click", ()=>{
    
    commander.classList.add("active")
    pilot.classList.remove("active")
    engineer.classList.remove("active")
    missionSpecialist.classList.remove("active")
    crewImage.src="../starter-code/assets/crew/image-douglas-hurley.png"
    mobileOnly.src="../starter-code/assets/crew/image-douglas-hurley.png"
    crewName.innerHTML="Douglas Hurley"
    crewJob.innerHTML = "Commander"
    crewText.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot "+
    "and former NASA astronaut. He launched into space for the third time as "+
    "commander of Crew Dragon Demo-2."
})

pilot.addEventListener("click", ()=>{
    
    commander.classList.remove("active")
    pilot.classList.add("active")
    engineer.classList.remove("active")
    missionSpecialist.classList.remove("active")
    crewImage.src="../starter-code/assets/crew/image-victor-glover.png"
    mobileOnly.src="../starter-code/assets/crew/image-victor-glover.png"
    crewName.innerHTML="Victor Glover"
    crewJob.innerHTML = "Pilot"
    crewText.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the " +
    "International Space Station. Glover is a commander in the U.S. Navy where " +
    "he pilots an F/A-18.He was a crew member of Expedition 64, and served as a " +
    "station systems flight engineer. "
})

engineer.addEventListener("click", ()=>{
    
    commander.classList.remove("active")
    pilot.classList.remove("active")
    engineer.classList.add("active")
    missionSpecialist.classList.remove("active")
    crewImage.src="../starter-code/assets/crew/image-anousheh-ansari.png"
    mobileOnly.src="../starter-code/assets/crew/image-anousheh-ansari.png"
    crewName.innerHTML="Anousheh Ansari"
    crewJob.innerHTML = "Flight Engineer"
    crewText.innerHTML = " Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems." +
    "Ansari was the fourth self-funded space tourist, the first self-funded woman to "+
    "fly to the ISS, and the first Iranian in space. "
})



/////////////////////////////////////MOBILE////////////////////////////////////////


missionSpecialistMobile.addEventListener("click", ()=>{
    
    commanderMobile.classList.remove("active")
    pilotMobile.classList.remove("active")
    engineerMobile.classList.remove("active")
    missionSpecialistMobile.classList.add("active")
    crewImage.src="../starter-code/assets/crew/image-mark-shuttleworth.png"
    mobileOnly.src="../starter-code/assets/crew/image-mark-shuttleworth.png"
    crewName.innerHTML="Mark Shuttleworth"
    crewJob.innerHTML = "Mission Specialist"
    crewText.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind" +
    "the Linux-based Ubuntu operating system. Shuttleworth became the first South" +
    "African to travel to space as a space tourist."
})

commanderMobile.addEventListener("click", ()=>{
    
    commanderMobile.classList.add("active")
    pilotMobile.classList.remove("active")
    engineerMobile.classList.remove("active")
    missionSpecialistMobile.classList.remove("active")
    crewImage.src="../starter-code/assets/crew/image-douglas-hurley.png"
    mobileOnly.src="../starter-code/assets/crew/image-douglas-hurley.png"
    crewName.innerHTML="Douglas Hurley"
    crewJob.innerHTML = "Commander"
    crewText.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot "+
    "and former NASA astronaut. He launched into space for the third time as "+
    "commander of Crew Dragon Demo-2."
})

pilotMobile.addEventListener("click", ()=>{
    
    commanderMobile.classList.remove("active")
    pilotMobile.classList.add("active")
    engineerMobile.classList.remove("active")
    missionSpecialistMobile.classList.remove("active")
    crewImage.src="../starter-code/assets/crew/image-victor-glover.png"
    mobileOnly.src="../starter-code/assets/crew/image-victor-glover.png"
    crewName.innerHTML="Victor Glover"
    crewJob.innerHTML = "Pilot"
    crewText.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the " +
    "International Space Station. Glover is a commander in the U.S. Navy where " +
    "he pilots an F/A-18.He was a crew member of Expedition 64, and served as a " +
    "station systems flight engineer. "
})

engineerMobile.addEventListener("click", ()=>{
    
    commanderMobile.classList.remove("active")
    pilotMobile.classList.remove("active")
    engineerMobile.classList.add("active")
    missionSpecialistMobile.classList.remove("active")
    crewImage.src="../starter-code/assets/crew/image-anousheh-ansari.png"
    mobileOnly.src="../starter-code/assets/crew/image-anousheh-ansari.png"
    crewName.innerHTML="Anousheh Ansari"
    crewJob.innerHTML = "Flight Engineer"
    crewText.innerHTML = " Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems." +
    "Ansari was the fourth self-funded space tourist, the first self-funded woman to "+
    "fly to the ISS, and the first Iranian in space. "
})