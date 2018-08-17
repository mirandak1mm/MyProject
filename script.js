let taxi = document.querySelector("#taxi")
let redCar = document.querySelector("#redCar")
let policeCar = document.querySelector("#policeCar")
let lastGrass = document.querySelector("#lastGrass")
let lastgrassz = -29
let redcarz = 0
let taxiz = -8
let policecarz = -18
let floor = document.querySelector("#floor")
let bottom = document.querySelector("#bottom")
let road1 = document.querySelector("#road1")
let road2 = document.querySelector("#road2")
let road3 = document.querySelector("#road3")
let road4 = document.querySelector("#road4")
let grass1 = document.querySelector("#grass1")
let deathText = document.querySelector("#deathText")
let road1z = 6
let road2z = 1
let road3z = -4
let road4z = -9
let grass1z = -14
const player = document.querySelector("#player")
function deathDelete() {
    deathText.innerHTML = ``
}
function death() {
   player.setAttribute('position', '1 4 7') 
   deathText.innerHTML += `<a-text value="You died!" width=500px color="tomato"></a-text>`
    window.setTimeout(deathDelete, 3000);
    console.log(grass1)
}
taxi.addEventListener('collide', function (e) {
    if (e.detail.body.el == player) {
        death()
    }
})

redCar.addEventListener('collide', function (e) {
    if (e.detail.body.el == player) {
        console.log("red car crash")
        death()
    }
})

policeCar.addEventListener('collide', function (e) {
    if (e.detail.body.el == player) {
        console.log("police car crash")
        death()
    }
})

var road1attr = document.createElement("a-plane")
var road2attr = document.createElement("a-plane")
var road3attr = document.createElement("a-plane")
var road4attr = document.createElement("a-plane")
var road5attr = document.createElement("a-plane")
var road6attr = document.createElement("a-plane")
var grass1attr = document.createElement("a-plane")
var lastgrassattr = document.createElement("a-plane")

floor.addEventListener('collide', function (e) {
    if (e.detail.body.el == player) {
        console.log("floor")
        road1attr.setAttribute('position', `0 0.01 ${road1z}`)
        road1attr.setAttribute('height', "1000")
        road1attr.setAttribute('width', "5")
        road1attr.setAttribute('src', "roadtexture.jpg")
        road1attr.setAttribute('rotation', "-90 90 0")
        road1.appendChild(road1attr)

        road2attr.setAttribute('position', `0 0.01 ${road2z}`)
        road2attr.setAttribute('height', "1000")
        road2attr.setAttribute('width', "5")
        road2attr.setAttribute('src', "roadtexture.jpg")
        road2attr.setAttribute('rotation', "-90 90 0")
        road2.appendChild(road2attr)
        
        road3attr.setAttribute('position', `0 0.01 ${road3z}`)
        road3attr.setAttribute('height', "1000")
        road3attr.setAttribute('width', "5")
        road3attr.setAttribute('src', "roadtexture.jpg")
        road3attr.setAttribute('rotation', "-90 90 0")
        road3.appendChild(road3attr)

        road4attr.setAttribute('position', `0 0.01 ${road4z}`)
        road4attr.setAttribute('height', "1000")
        road4attr.setAttribute('width', "5")
        road4attr.setAttribute('src', "roadtexture.jpg")
        road4attr.setAttribute('rotation', "-90 90 0")
        road4.appendChild(road4attr)
        
        grass1attr.setAttribute('position', `0 0.01 ${grass1z}`)
        grass1attr.setAttribute('height', "1000")
        grass1attr.setAttribute('width', "5")
        grass1attr.setAttribute('color', "green")
        grass1attr.setAttribute('rotation', "-90 90 0")
        grass1attr.setAttribute('static-body', "")
        grass1.appendChild(grass1attr)
        console.log(grass1)
        
        lastgrassattr.setAttribute('position', `0 0.01 ${lastgrassz}`)
        lastgrassattr.setAttribute('height', "1000")
        lastgrassattr.setAttribute('width', "5")
        lastgrassattr.setAttribute('color', "green")
        lastgrassattr.setAttribute('rotation', "-90 90 0")
        lastgrassattr.setAttribute('static-body', "")
        
    lastgrassattr.addEventListener('collide', function (e) {
    if (e.detail.body.el == player) {
        console.log("lastgrass")
        redcarz = lastgrassz - 10
        redCar.setAttribute('position', `300 -1.75 ${redcarz}`)
        redCar.innerHTML = ""
        redCar.innerHTML += ` <a-animation attribute="position" begin="2000" from="50 -1.75 ${redcarz}" to="-50 -1.75 ${redcarz}" dur="10000" repeat="indefinite"></a-animation>`
       
       taxiz = lastgrassz - 15
        taxi.setAttribute('position', `300 -1.75 ${taxiz}`)
        taxi.innerHTML = ""
        taxi.innerHTML += ` <a-animation attribute="position" begin="2000" from="50 -1.75 ${taxiz}" to="-50 -1.75 ${taxiz}" dur="10000" repeat="indefinite"></a-animation>`
       
        policecarz = lastgrassz - 20
        policeCar.setAttribute('position', `300 -1.75 ${policecarz}`)
        policeCar.innerHTML = ""
        policeCar.innerHTML += ` <a-animation attribute="position" begin="2000" from="50 -1.75 ${policecarz}" to="-50 -1.75 ${policecarz}" dur="10000" repeat="indefinite"></a-animation>`
       
        road1z = lastgrassz - 5
        road1attr.setAttribute('position', `0 0.01 ${road1z}`)
        
        road2z = lastgrassz - 10
        road2attr.setAttribute('position', `0 0.01 ${road2z}`)
        
        road3z = lastgrassz -15
        road3attr.setAttribute('position' , `0 0.01 ${road3z}`)
        
        road4z = lastgrassz -20
        road4attr.setAttribute('position' , `0 0.01 ${road4z}`)
        
        grass1z = lastgrassz - 25
        grass1attr.setAttribute('position', `0 0.01 ${grass1z}`)
    }
        
    
})
            lastGrass.appendChild(lastgrassattr)

    }
    
})
