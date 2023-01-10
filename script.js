
class Hero {    
    constructor (name, health, orange, blue, weapon) {
    this.name = name
    this.health = health
    this.orange = orange
    this.blue = blue
    this.weapon = []
}
}

const startgame = document.querySelector('.startgame')
const endgame = document.querySelector('.endgame')

playagainbtn = document.querySelector('.playagainbtn')
startbtn = document.querySelector('.startbtn')

playagainbtn.addEventListener('click', () => {
    location.href = "index.html";
})
startbtn.addEventListener('click', () => {
    gamefield.style.display = 'flex'
    startgame.style.display = 'none'
    document.querySelector('.menu').style.display = 'flex'
    playAudio()
})

const gamefield = document.querySelector('.gamefield')
let wizzardHero = new Hero('wizzard', 500, 500, 500, '')
let swordmanHero = new Hero('swordman', 500, 500, 500, '')

let spiderHero = new Hero('spider', 50)
let dragonHero = new Hero('dragon', 75)
let charmerHero = new Hero('charmer', 60)
let pirateHero = new Hero('pirate', 50)
let alienHero = new Hero('alien', 48)
let janissaryHero = new Hero('janissary', 28)
let devilHero = new Hero('devil', 66)
let builderHero = new Hero('builder', 60)
let cowboyHero = new Hero('cowboy', 65)
let jokerHero = new Hero('joker', 57)
let ladyHero = new Hero('lady', 44)
let gangsterHero = new Hero('gangster', 60)
let nukemanHero = new Hero('nukeman', 90)
let snowmanHero = new Hero('snowman', 80)
let cookHero = new Hero('cook', 45)
let kungHero = new Hero('kung', 70)
let thiefHero = new Hero('thief', 60)
let clownHero = new Hero('clown', 50)
let deathHero = new Hero('death', 66)
let rocketmanHero = new Hero('rocketman', 90)


let enemiesdown = 0
let score = document.querySelector('.menu-score')
let endscore = document.querySelector('.endscore')

const team = document.querySelectorAll('.team > div')
let menuSelHero = document.querySelector('.menu-sel-hero')

const enemies = document.querySelectorAll('.enemies > div')
let menuSelEnemy = document.querySelector('.menu-sel-enemy')


let menuSelWeapon = document.querySelector('.menu-sel-weapon')

const wizzard = document.querySelector('.wizzard')
let wizzardHealth = document.querySelector('.wizzard > .redshield')
wizzardHealth.innerHTML = wizzardHero.health
let wizzardOrange = document.querySelector('.wizzard > .orangeshield')
wizzardOrange.innerHTML = wizzardHero.orange
let wizzardBlue = document.querySelector('.wizzard > .blueshield')
wizzardBlue.innerHTML = wizzardHero.blue

const swordman = document.querySelector('.swordman')
let swordmanHealth = document.querySelector('.swordman > .redshield')
swordmanHealth.innerHTML = swordmanHero.health
let swordmanOrange = document.querySelector('.swordman > .orangeshield')
swordmanOrange.innerHTML = swordmanHero.orange
let swordmanBlue = document.querySelector('.swordman > .blueshield')
swordmanBlue.innerHTML = swordmanHero.blue

const spider = document.querySelector('.spider')
let spiderHealth = document.querySelector('.spider > .redshield')
spiderHealth.innerHTML = spiderHero.health

const dragon = document.querySelector('.dragon')
let dragonHealth = document.querySelector('.dragon > .redshield')
dragonHealth.innerHTML = dragonHero.health

const charmer = document.querySelector('.charmer')
let charmerHealth = document.querySelector('.charmer > .redshield')
charmerHealth.innerHTML = charmerHero.health

const pirate = document.querySelector('.pirate')
let pirateHealth = document.querySelector('.pirate > .redshield')
pirateHealth.innerHTML = pirateHero.health

const alien = document.querySelector('.alien')
let alienHealth = document.querySelector('.alien > .redshield')
alienHealth.innerHTML = alienHero.health

const janissary = document.querySelector('.janissary')
let janissaryHealth = document.querySelector('.janissary > .redshield')
janissaryHealth.innerHTML = janissaryHero.health

const devil = document.querySelector('.devil')
let devilHealth = document.querySelector('.devil > .redshield')
devilHealth.innerHTML = devilHero.health

const builder = document.querySelector('.builder')
let builderHealth = document.querySelector('.builder > .redshield')
builderHealth.innerHTML = builderHero.health

const cowboy = document.querySelector('.cowboy')
let cowboyHealth = document.querySelector('.cowboy > .redshield')
cowboyHealth.innerHTML = cowboyHero.health

const joker = document.querySelector('.joker')
let jokerHealth = document.querySelector('.joker > .redshield')
jokerHealth.innerHTML = jokerHero.health

const lady = document.querySelector('.lady')
let ladyHealth = document.querySelector('.lady > .redshield')
ladyHealth.innerHTML = ladyHero.health

const gangster = document.querySelector('.gangster')
let gangsterHealth = document.querySelector('.gangster > .redshield')
gangsterHealth.innerHTML = gangsterHero.health

const nukeman = document.querySelector('.nukeman')
let nukemanHealth = document.querySelector('.nukeman > .redshield')
nukemanHealth.innerHTML = nukemanHero.health

const snowman = document.querySelector('.snowman')
let snowmanHealth = document.querySelector('.snowman > .redshield')
snowmanHealth.innerHTML = snowmanHero.health

const cook = document.querySelector('.cook')
let cookHealth = document.querySelector('.cook > .redshield')
cookHealth.innerHTML = cookHero.health

const kung = document.querySelector('.kung')
let kungHealth = document.querySelector('.kung > .redshield')
kungHealth.innerHTML = kungHero.health

const thief = document.querySelector('.thief')
let thiefHealth = document.querySelector('.thief > .redshield')
thiefHealth.innerHTML = thiefHero.health

const clown = document.querySelector('.clown')
let clownHealth = document.querySelector('.clown > .redshield')
clownHealth.innerHTML = clownHero.health

const death = document.querySelector('.death')
let deathHealth = document.querySelector('.death > .redshield')
deathHealth.innerHTML = deathHero.health

const rocketman = document.querySelector('.rocketman')
let rocketmanHealth = document.querySelector('.rocketman > .redshield')
rocketmanHealth.innerHTML = rocketmanHero.health

const sword = document.querySelector('.sword')
const spear = document.querySelector('.spear')
const axe = document.querySelector('.axe')
const fire = document.querySelector('.fire')
const ice = document.querySelector('.ice')
const water = document.querySelector('.water')

const charge = document.querySelector('.charge')

const atackBtn = document.querySelector('.atack-button')
const atackBtnDiv = document.querySelector('.btnmenu')


let selectedHero
let selectedHeroDiv
let selectedWeapon

let selectedEnemy
let selectedEnemyDiv

//funkcija za background muziku
var backmusic = document.getElementById("myAudio");
backmusic.volume = 0.04;
function playAudio() {
  backmusic.play(); 
} 
function pauseAudio() { 
  backmusic.pause(); 
} 

//funkcija za random prikazivanje protivnika
const monsters = [spider, dragon, charmer, pirate, alien, janissary, devil, builder, cowboy, joker, lady, gangster, nukeman, snowman, cook, kung, thief, clown, death, rocketman]
for (let i = 0; i < monsters.length; i++) {
    document.getElementById(monsters[i].id).style.display = 'none'    
}

document.getElementById(monsters[getRndInteger(0,monsters.length-1)].id).style.display = 'block'
document.getElementById(monsters[getRndInteger(0,monsters.length-1)].id).style.display = 'block'
document.getElementById(monsters[getRndInteger(0,monsters.length-1)].id).style.display = 'block'
document.getElementById(monsters[getRndInteger(0,monsters.length-1)].id).style.display = 'block'
document.getElementById(monsters[getRndInteger(0,monsters.length-1)].id).style.display = 'block'

//    
function actionHero(heroDiv, hero) {  

    return (e) => { 
    
        for (let i = 0; i < team.length; i++) {
            team[i].style.opacity = 0.001
        }
     
        heroDiv.style.opacity = 1 
        selectedHero = hero
        selectedHeroDiv = heroDiv
        menuSelHero.innerText = hero.name    

        }

}

function actionEnemy(enemyDiv, enemy) {  
    return (e) => { 
        for (let i = 0; i < enemies.length; i++) {
            enemies[i].style.opacity = 0.1        
        }
    enemyDiv.style.opacity = 1 
    selectedEnemy = enemy  
    selectedEnemyDiv = enemyDiv
    menuSelEnemy.innerText = enemy.name

    }
}
//if(selectedWeapon){document.querySelector(`.${selectedWeapon}`).classList.remove('weaponrotate')}  
wizzard.addEventListener('click', actionHero(wizzard, wizzardHero))
swordman.addEventListener('click', actionHero(swordman, swordmanHero))

spider.addEventListener('click', actionEnemy(spider, spiderHero))
dragon.addEventListener('click', actionEnemy(dragon, dragonHero))
charmer.addEventListener('click', actionEnemy(charmer, charmerHero))
pirate.addEventListener('click', actionEnemy(pirate, pirateHero))
alien.addEventListener('click', actionEnemy(alien, alienHero))
janissary.addEventListener('click', actionEnemy(janissary, janissaryHero))
devil.addEventListener('click', actionEnemy(devil, devilHero))
builder.addEventListener('click', actionEnemy(builder, builderHero))
cowboy.addEventListener('click', actionEnemy(cowboy, cowboyHero))
joker.addEventListener('click', actionEnemy(joker, jokerHero))
lady.addEventListener('click', actionEnemy(lady, ladyHero))
gangster.addEventListener('click', actionEnemy(gangster, gangsterHero))
nukeman.addEventListener('click', actionEnemy(nukeman, nukemanHero))
snowman.addEventListener('click', actionEnemy(snowman, snowmanHero))
cook.addEventListener('click', actionEnemy(cook, cookHero))
kung.addEventListener('click', actionEnemy(kung, kungHero))
thief.addEventListener('click', actionEnemy(thief, thiefHero))
clown.addEventListener('click', actionEnemy(clown, clownHero))
death.addEventListener('click', actionEnemy(death, deathHero))
rocketman.addEventListener('click', actionEnemy(rocketman, rocketmanHero))


//weapon action
sword.addEventListener('click', weaponAction("sword"))
spear.addEventListener('click', weaponAction("spear"))
axe.addEventListener('click', weaponAction("axe"))
fire.addEventListener('click', weaponAction("fire"))
ice.addEventListener('click', weaponAction("ice"))
water.addEventListener('click', weaponAction("water"))

function weaponAction(weapon) {   
 
    return (e) => { 
    if (!selectedHero){
        alert('You must select hero first')
    }else {
     if (selectedHero.weapon.length < 2) {
        selectedHero.weapon.push(weapon)    
        //e.target.style.display = 'none'
        e.target.remove()
        let weaponSpan = document.createElement('span')
        weaponSpan.classList.add(weapon, 'heroWeapons')
        //weaponSpan.innerText = 'w'
        weaponSpan.addEventListener('click', selectedWeaponAction)
     
        function selectedWeaponAction() {
            if(selectedWeapon){document.querySelector(`.${selectedWeapon}`).classList.remove('weaponrotate')}      
            selectedWeapon = weapon
            menuSelWeapon.innerText = weapon 
                 
                   document.querySelector(`.${selectedWeapon}`).classList.add('weaponrotate')                   
                
        }
        selectedHeroDiv.appendChild(weaponSpan)

     }
    }
   }
}

//hero atack
function heroAtack(enemydamage, heroAnimation, heroSound, heroColor, enemyAnimation, enemySound, enemyColor) {
    selectedEnemy.health -= enemydamage
    selectedEnemyDiv.firstChild.innerHTML = selectedEnemy.health
  
    selectedHeroDiv.querySelector('.img').classList.add('movex')
    setTimeout(() => {
        selectedHeroDiv.querySelector('.img').classList.remove('movex')
    }, 800);

    setAnimation(heroAnimation, heroSound, heroColor)
    atackBtnDiv.style.display = 'none'
    atackBtn.style.display = 'none'   
    setTimeout(() => {
        setAnimation(enemyAnimation, enemySound, enemyColor)
        enemyAtackAction()   
        //atackBtn.style.display = 'block'   
        }, "3500")
}



//get random number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//atack btn
atackBtn.addEventListener('click', atackBtnAction)

function atackBtnAction() {
    if(!selectedHero) {
        alert('You must select hero')
    } else if(!selectedWeapon){
        alert('You must select weapon from hero stash')
    } else if(!selectedEnemy){
        alert('You must select enemy')
    } else if(!selectedHero.weapon.includes(selectedWeapon)){
        alert('You must select weapon from hero stash')
    } else {
        if(selectedWeapon && selectedEnemy && selectedHero) {  

            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'spider') {
                heroAtack(40,createMagic, "../sound/magic.mp3", "#191970",createWeb, "../sound/spider.mp3", "gray")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'dragon') {
                heroAtack(40,createMagic, "../sound/magic.mp3", "#191970",createFire, "../sound/fire.wav", "red")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'charmer') {
                heroAtack(60,createMagic, "../sound/magic.mp3", "#191970",createSnakes, "../sound/snakes.mp3", "yellowgreen")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'pirate') {
                heroAtack(60,createMagic, "../sound/magic.mp3", "#191970",createPirate, "../sound/pirate.mp3", "lightblue")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'alien') {
                heroAtack(40,createMagic, "../sound/magic.mp3", "#191970",createAlien, "../sound/alien.mp3", "green")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'janissary') {
                heroAtack(60,createMagic, "../sound/magic.mp3", "#191970",createJanissary, "../sound/janissary.mp3", "yellow")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'devil') {
                heroAtack(40,createMagic, "../sound/magic.mp3", "#191970",createDevil, "../sound/devil.mp3", "red")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'builder') {
                heroAtack(60,createMagic, "../sound/magic.mp3", "#191970",createBuilder, "../sound/builder.mp3", "blue")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'cowboy') {
                heroAtack(60,createMagic, "../sound/magic.mp3", "#191970",createCowboy, "../sound/cowboy.mp3", "gold")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'joker') {
                heroAtack(40,createMagic, "../sound/magic.mp3", "#191970",createJoker, "../sound/joker.mp3", "orange")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'lady') {
                heroAtack(60,createMagic, "../sound/magic.mp3", "#191970",createLady, "../sound/lady.mp3", "red")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'gangster') {
                heroAtack(60,createMagic, "../sound/magic.mp3", "#191970",createGangster, "../sound/gangster.mp3", "black")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'nukeman') {
                heroAtack(60,createMagic, "../sound/magic.mp3", "#191970",createNukeman, "../sound/nukeman.mp3", "purple")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'snowman') {
                heroAtack(40,createMagic, "../sound/magic.mp3", "#191970",createSnowman, "../sound/snowman.mp3", "white")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'cook') {
                heroAtack(60,createMagic, "../sound/magic.mp3", "#191970",createCook, "../sound/cook.mp3", "yellow")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'kung') {
                heroAtack(40,createMagic, "../sound/magic.mp3", "#191970",createKung, "../sound/kung.mp3", "olive")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'thief') {
                heroAtack(60,createMagic, "../sound/magic.mp3", "#191970",createThief, "../sound/thief.mp3", "gray")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'clown') {
                heroAtack(40,createMagic, "../sound/magic.mp3", "#191970",createClown, "../sound/clown.mp3", "aquamarine")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'death') {
                heroAtack(40,createMagic, "../sound/magic.mp3", "#191970",createDeath, "../sound/death.mp3", "gray")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'rocketman') {
                heroAtack(60,createMagic, "../sound/magic.mp3", "#191970",createRocketman, "../sound/rocketman.mp3", "darkcyan")
            }


            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'spider') {
                heroAtack(60, createClash, "../sound/sword.wav", "purple", createWeb, "../sound/spider.mp3", "gray")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'dragon') {
                heroAtack(60, createClash, "../sound/sword.wav", "purple", createFire, "../sound/fire.wav", "red")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'charmer') {
                heroAtack(40, createClash, "../sound/sword.wav", "purple", createSnakes, "../sound/snakes.mp3", "yellowgreen")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'pirate') {
                heroAtack(40, createClash, "../sound/sword.wav", "purple", createPirate, "../sound/pirate.mp3", "lightblue")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'alien') {
                heroAtack(60, createClash, "../sound/sword.wav", "purple", createAlien, "../sound/alien.mp3", "green")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'janissary') {
                heroAtack(40, createClash, "../sound/sword.wav", "purple", createJanissary, "../sound/janissary.mp3", "yellow")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'devil') {
                heroAtack(60, createClash, "../sound/sword.wav", "purple", createDevil, "../sound/devil.mp3", "red")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'builder') {
                heroAtack(40, createClash, "../sound/sword.wav", "purple", createBuilder, "../sound/builder.mp3", "blue")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'cowboy') {
                heroAtack(40, createClash, "../sound/sword.wav", "purple", createCowboy, "../sound/cowboy.mp3", "gold")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'joker') {
                heroAtack(60, createClash, "../sound/sword.wav", "purple", createJoker, "../sound/joker.mp3", "orange")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'lady') {
                heroAtack(40, createClash, "../sound/sword.wav", "purple", createLady, "../sound/lady.mp3", "red")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'gangster') {
                heroAtack(40, createClash, "../sound/sword.wav", "purple", createGangster, "../sound/gangster.mp3", "black")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'nukeman') {
                heroAtack(40, createClash, "../sound/sword.wav", "purple", createNukeman, "../sound/nukeman.mp3", "purple")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'snowman') {
                heroAtack(60, createClash, "../sound/sword.wav", "purple", createSnowman, "../sound/snowman.mp3", "white")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'cook') {
                heroAtack(40, createClash, "../sound/sword.wav", "purple", createCook, "../sound/cook.mp3", "yellow")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'kung') {
                heroAtack(60, createClash, "../sound/sword.wav", "purple", createKung, "../sound/kung.mp3", "olive")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'thief') {
                heroAtack(40, createClash, "../sound/sword.wav", "purple", createThief, "../sound/thief.mp3", "gray")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'clown') {
                heroAtack(60, createClash, "../sound/sword.wav", "purple", createClown, "../sound/clown.mp3", "aquamarine")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'death') {
                heroAtack(60, createClash, "../sound/sword.wav", "purple", createDeath, "../sound/death.mp3", "gray")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'rocketman') {
                heroAtack(40, createClash, "../sound/sword.wav", "purple", createRocketman, "../sound/rocketman.mp3", "darkcya")
            }

            if (selectedEnemy.health <= 0) {
                setTimeout(() => {

                    selectedEnemyDiv.style.display = 'none'
               

                    const red = document.createElement('div')
                    red.classList.add('heartred')
                    red.style.display = 'flex'
                    red.innerText = getRndInteger(10,60) 

                    const orange = document.createElement('div')
                    orange.classList.add('heartorange')
                    orange.style.display = 'flex'
                    orange.innerText = getRndInteger(10,60) 

                    const blue = document.createElement('div')
                    blue.classList.add('heartblue')
                    blue.style.display = 'flex'
                    blue.innerText = getRndInteger(10,60) 

                    document.querySelector('.charge').append(red,orange,blue)

                    red.addEventListener('click', () => {
                        if(selectedHero) {
                            selectedHero.health += parseInt(red.innerText)
                            selectedHeroDiv.querySelector('.redshield').innerText = selectedHero.health
                            red.remove()
                            new Audio("../sound/health.wav").play();
                        } else {alert('You must select hero')}

                    })
                    orange.addEventListener('click', () => {
                        if(selectedHero) {
                            selectedHero.orange += parseInt(orange.innerText)
                            selectedHeroDiv.querySelector('.orangeshield').innerText = selectedHero.orange
                            orange.remove()
                            new Audio("../sound/health.wav").play();
                        } else {alert('You must select hero')}
                    })
                    blue.addEventListener('click', () => {
                        if(selectedHero) {
                            selectedHero.blue += parseInt(blue.innerText)
                            selectedHeroDiv.querySelector('.blueshield').innerText = selectedHero.blue
                            blue.remove()
                            new Audio("../sound/health.wav").play();
                        } else {alert('You must select hero')}
                    })

                    enemiesdown++
                    score.innerText = enemiesdown
                    endscore.innerText = enemiesdown

                }, 3000);
            }


        } else {
            alert('You must choose hero, enemy and weapon to atack')
        }
    }

}

 
//enemy atack



function enemyAtack(health, orange, blue) {

   

    selectedHero.health -= health 
    selectedHeroDiv.querySelector('.redshield').innerHTML = selectedHero.health
    selectedHero.orange -= orange
    selectedHeroDiv.querySelector('.orangeshield').innerHTML = selectedHero.orange
    selectedHero.blue -= blue
    selectedHeroDiv.querySelector('.blueshield').innerHTML = selectedHero.blue
}

function enemyAtackAction() {
   
    if(selectedWeapon && selectedEnemy && selectedHero) {

        if(selectedEnemy.name == 'spider') {
            enemyAtack(30,30,30)
        } 
        
        if(selectedEnemy.name == 'dragon') {
            enemyAtack(30,10,60)
        }

        if(selectedEnemy.name == 'charmer') {
            enemyAtack(30,80,20)
        }

        if(selectedEnemy.name == 'pirate') {
            enemyAtack(30,90,10)
        }
        if(selectedEnemy.name == 'alien') {
            enemyAtack(30,90,20)
        }
        if(selectedEnemy.name == 'janissary') {
            enemyAtack(80,10,10)
        }
        if(selectedEnemy.name == 'devil') {
            enemyAtack(80,30,30)
        }
        if(selectedEnemy.name == 'builder') {
            enemyAtack(30,40,50)
        }
        if(selectedEnemy.name == 'cowboy') {
            enemyAtack(80,10,50)
        }
        if(selectedEnemy.name == 'joker') {
            enemyAtack(40,50,40)
        }
        if(selectedEnemy.name == 'lady') {
            enemyAtack(30,60,60)
        }
        if(selectedEnemy.name == 'gangster') {
            enemyAtack(60,10,10)
        }
        if(selectedEnemy.name == 'nukeman') {
            enemyAtack(80,60,60)
        }
        if(selectedEnemy.name == 'snowman') {
            enemyAtack(30,100,30)
        }
        if(selectedEnemy.name == 'cook') {
            enemyAtack(30,30,50)
        }
        if(selectedEnemy.name == 'kung') {
            enemyAtack(30,40,60)
        }
        if(selectedEnemy.name == 'thief') {
            enemyAtack(30,30,60)
        }
        if(selectedEnemy.name == 'clown') {
            enemyAtack(30,10,60)
        }
        if(selectedEnemy.name == 'death') {
            enemyAtack(80,10,10)
        }
        if(selectedEnemy.name == 'rocketman') {
            enemyAtack(30,60,60)
        }
        //ako herojevi stitovi budu nula i manje remove hero div
        if (selectedHero.health  <= 0 || selectedHero.orange <= 0 || selectedHero.blue  <= 0) {
            selectedHeroDiv.remove()
            selectedWeapon = null
        }

        menuSelHero.innerText = "none"
        menuSelWeapon.innerText = "none"
        menuSelEnemy.innerText = "none"
        if(selectedWeapon){document.querySelector(`.${selectedWeapon}`).classList.remove('weaponrotate')}
        selectedHero = null
        selectedHeroDiv = null
        selectedWeapon = null
        selectedEnemy = null
        selectedEnemyDiv = null

        resetOpacity("5500")
      
        //algorithm when all enemies disapear
        setTimeout(() => {
            const enemyAll = document.querySelector('.enemies').querySelectorAll('.enemy')
            const enemyDispNone = []
            const enemyDivs = [spider, dragon, charmer, pirate, alien, janissary, devil, builder, cowboy, joker, lady, gangster, nukeman, snowman, cook, kung, thief, clown, death, rocketman]
            const enemyHeroes = [spiderHero, dragonHero, charmerHero, pirateHero, alienHero, janissaryHero, devilHero, builderHero, cowboyHero, jokerHero, ladyHero, gangsterHero, nukemanHero, snowmanHero, cookHero, kungHero, thiefHero, clownHero, deathHero, rocketmanHero]
            const enemyHealthDivs = [spiderHealth, dragonHealth, charmerHealth, pirateHealth, alienHealth, janissaryHealth, devilHealth, builderHealth, cowboyHealth, jokerHealth, ladyHealth, gangsterHealth, nukemanHealth, snowmanHealth, cookHealth, kungHealth, thiefHealth, clownHealth, deathHealth, rocketmanHealth]
        
        for (let i = 0; i < enemyAll.length; i++) {
            enemyDispNone.push(enemyAll[i].style.display)
        }
        if(enemyDispNone.every((currentValue) => currentValue === 'none')){
            let random1 = Math.floor(Math.random() * enemyDivs.length)
            let random2 = Math.floor(Math.random() * enemyDivs.length)  
            let random3 = Math.floor(Math.random() * enemyDivs.length)
            let random4 = Math.floor(Math.random() * enemyDivs.length) 
            let random5 = Math.floor(Math.random() * enemyDivs.length)           

            enemyHeroes[random1].health = getRndInteger(50,300)
            enemyHeroes[random2].health = getRndInteger(50,300)
            enemyHeroes[random3].health = getRndInteger(50,300)
            enemyHeroes[random4].health = getRndInteger(50,300)
            enemyHeroes[random5].health = getRndInteger(50,300)            

            enemyHealthDivs[random1].innerHTML = enemyHeroes[random1].health
            enemyHealthDivs[random2].innerHTML = enemyHeroes[random2].health
            enemyHealthDivs[random3].innerHTML = enemyHeroes[random3].health
            enemyHealthDivs[random4].innerHTML = enemyHeroes[random4].health
            enemyHealthDivs[random5].innerHTML = enemyHeroes[random5].health 

            enemyDivs[random1].style.display = 'block'
            enemyDivs[random2].style.display = 'block'
            enemyDivs[random3].style.display = 'block'
            enemyDivs[random4].style.display = 'block'
            enemyDivs[random5].style.display = 'block' 
        }      
        }, 2000);
        

        //game over
        if(document.querySelector('.team').querySelectorAll('.hero').length == 0) {
            setTimeout(() => {
                endgame.style.display = 'flex'
                gamefield.style.display = 'none'
                startgame.style.display = 'none'
                document.querySelector('.menu').style.display = 'none'
            }, 6700);            
        }
        //game over


    } else {
        alert('You must choose hero, enemy and weapon to atack')
    }
}


//reset opacity
function resetOpacity(time) {
    setTimeout(() => {
        for (let i = 0; i < team.length; i++) {
            team[i].style.opacity = 1        
        }
        for (let i = 0; i < enemies.length; i++) {
            enemies[i].style.opacity = 1        
        }       
        atackBtnDiv.style.display = 'flex'
        atackBtn.style.display = 'block' 
        }, time)
}
//set animation
function setAnimation(animation, audio, color) {
    var animint= setInterval(animation, 200);
    gamefield.style.backgroundColor = color;
    new Audio(audio).play();
    setTimeout(() => {
        gamefield.style.backgroundColor = 'rgb(44, 44, 44)'; 
        clearInterval(animint)       
        },"2500")
}


//animations

function createMagic() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

    anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '★';
    anim.style.color = '#ADD8E6'


    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);

}

function createClash() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '⚔️';
    anim.style.color = 'black'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
    
}

function createWeb() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '🎃🎃🕸️🕷️';
    anim.style.color = 'black'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);

}

function createFire() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '🔥';
    anim.style.color = 'orange'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}

function createSnow() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '❄️ ❄️ ❄️';

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}

function createSnakes() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '🐍 🐍 🐍🐍 🐍 🐍';
    anim.style.color = 'green'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}

function createPirate() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '⚓';
    anim.style.color = '#191970'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}

function createAlien() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '👽 💫';
    anim.style.color = 'black'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}

function createJanissary() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '🔱';
    anim.style.color = 'orange'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}

function createDevil() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '👹';
    anim.style.color = 'black'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}
function createBuilder() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '🔧 🔩 🔨';
    anim.style.color = 'blue'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}

function createCowboy() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '🔫';
    anim.style.color = 'black'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}
function createJoker() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '🎲 🎲';
    anim.style.color = 'black'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}
function createLady() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '👠 💄💄💄';
    anim.style.color = 'pink'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}
function createGangster() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '💵 🎻 👞';
    anim.style.color = 'black'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}
function createNukeman() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '☢️ ☣️ ☢️';
    anim.style.color = 'black'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}
function createSnowman() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '❄️ ☃️ ❄️ ⛄ ❄️';
    anim.style.color = 'lightblue'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}
function createCook() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '🍩 🍕 🍟 🍰 🍗';
    anim.style.color = 'black'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}
function createKung() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '☯️';
    anim.style.color = 'black'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}

function createThief() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '💰';
    anim.style.color = 'black'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}

function createClown() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '🎈 🃏 🎉';
    anim.style.color = 'black'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}

function createDeath() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '☠️';
    anim.style.color = 'black'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}
function createRocketman() {
    const anim = document.createElement('div');
    anim.classList.add('animstyle');

   anim.style.left = Math.random() * 100 + 'vw';

    anim.style.animationDuration = Math.random() * 2 + 3 + 's';

    anim.innerText = '🚀';
    anim.style.color = 'black'

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);
}
//full screen on and off 
var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
//confirm messages
function goOnHomePage() {
    let confirmMessage = confirm("Do you realy want to leave game and go to home page?");
    if (confirmMessage) {
        location.href='index.html'
    } 
}