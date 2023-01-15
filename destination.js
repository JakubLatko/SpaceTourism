var celestialBody = document.querySelector(".bodyImage")
var bodyName = document.querySelector(".bodyName")
var bodyText = document.querySelector(".bodyText")
var bodyDistance =document.querySelector(".bodyDistance")
var bodyTime = document.querySelector(".bodyTime")

var mars = document.querySelector(".mars")
var moon = document.querySelector(".moon")
var titan = document.querySelector(".titan")
var europa = document.querySelector(".europa")


mars.addEventListener("click", ()=>{
    celestialBody.src="../starter-code/assets/destination/image-mars.png"
    moon.classList.remove("border")
    europa.classList.remove("border")
    titan.classList.remove("border")
    mars.classList.add("border")
    bodyName.innerHTML = "Mars"
    bodyText.innerHTML = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
    bodyDistance.innerHTML = "225 mil. km"
    bodyTime.innerHTML = "9 months"
})

moon.addEventListener("click", ()=>{
    celestialBody.src="../starter-code/assets/destination/image-moon.png"
    mars.classList.remove("border")
    europa.classList.remove("border")
    titan.classList.remove("border")
    moon.classList.add("border")
    bodyName.innerHTML = "Moon"
    bodyText.innerHTML =
    'See our planet as you’ve never seen it before. A perfect relaxing trip away to help' +
    'regain perspective and come back refreshed. While you’re there, take in some history' +
    'by visiting the Luna 2 and Apollo 11 landing sites.'
    bodyDistance.innerHTML = "384,400 km"
    bodyTime.innerHTML = "3 days"
})

titan.addEventListener("click", ()=>{
    celestialBody.src="../starter-code/assets/destination/image-titan.png"
    moon.classList.remove("border")
    europa.classList.remove("border")
    mars.classList.remove("border")
    titan.classList.add("border")
    bodyName.innerHTML = "Titan"
    bodyText.innerHTML = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
    bodyDistance.innerHTML = " 1.6 bil. km"
    bodyTime.innerHTML = "7 years"
})

europa.addEventListener("click", ()=>{
    celestialBody.src="../starter-code/assets/destination/image-europa.png"
    moon.classList.remove("border")
    mars.classList.remove("border")
    titan.classList.remove("border")
    europa.classList.add("border")
    bodyName.innerHTML = "Europa"
    bodyText.innerHTML = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'
    bodyDistance.innerHTML = " 628 mil. km"
    bodyTime.innerHTML = "3 years"
})
