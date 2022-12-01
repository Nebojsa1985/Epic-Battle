
class Hero {    
    constructor (name, health, orange, blue, weapon) {
    this.name = name
    this.health = health
    this.orange = orange
    this.blue = blue
    this.weapon = []
}
}



const gamefield =  document.querySelector('.gamefield')
let wizzardHero = new Hero('wizzard', 120, 150, 250, '')
let swordmanHero = new Hero('swordman', 150, 400, 550, '')

let spiderHero = new Hero('spider', 100)
let dragonHero = new Hero('dragon', 200)

let enemiesdown = 0
let score = document.querySelector('.menu-score')

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

const dragon = document.querySelector('.dragon')
let dragonHealth = document.querySelector('.dragon > .redshield')
dragonHealth.innerHTML = dragonHero.health

const spider = document.querySelector('.spider')
let spiderHealth = document.querySelector('.spider > .redshield')
spiderHealth.innerHTML = spiderHero.health

const sword = document.querySelector('.sword')
const spear = document.querySelector('.spear')
const axe = document.querySelector('.axe')
const fire = document.querySelector('.fire')
const ice = document.querySelector('.ice')
const water = document.querySelector('.water')

const charge = document.querySelector('.charge')
const heartred = document.querySelector('.heartred')
const heartorange = document.querySelector('.heartorange')
const heartblue = document.querySelector('.heartblue')

const atackBtn = document.querySelector('.atack-button')


let selectedHero
let selectedHeroDiv
let selectedWeapon

let selectedEnemy
let selectedEnemyDiv


//    
function actionHero(heroDiv, hero) {  

    return (e) => { 

              
        for (let i = 0; i < team.length; i++) {
            team[i].style.opacity = 0.1        
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

wizzard.addEventListener('click', actionHero(wizzard, wizzardHero))
swordman.addEventListener('click', actionHero(swordman, swordmanHero))
dragon.addEventListener('click', actionEnemy(dragon, dragonHero))
spider.addEventListener('click', actionEnemy(spider, spiderHero))

//weapon action
sword.addEventListener('click', weaponAction("sword"))
spear.addEventListener('click', weaponAction("spear"))
axe.addEventListener('click', weaponAction("axe"))
fire.addEventListener('click', weaponAction("fire"))
ice.addEventListener('click', weaponAction("ice"))
water.addEventListener('click', weaponAction("water"))

function weaponAction(weapon) {     
    return (e) => { 
    if (selectedHero) {
     if (selectedHero.weapon.length < 2) {
        selectedHero.weapon.push(weapon)    
        e.target.style.display = 'none'
        let weaponSpan = document.createElement('span')
        weaponSpan.classList.add(weapon, 'heroWeapons')
        //weaponSpan.innerText = 'w'
        weaponSpan.addEventListener('click', selectedWeaponAction)
     
        function selectedWeaponAction() {
            console.log(selectedHero.weapon);                
            selectedWeapon = weapon
            menuSelWeapon.innerText = weapon  
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

    setAnimation(heroAnimation, heroSound, heroColor)
    atackBtn.style.display = 'none'
    setTimeout(() => {
        setAnimation(enemyAnimation, enemySound, enemyColor)
        enemyAtackAction()   
        //atackBtn.style.display = 'block'   
        }, "3500")
}

//funkcija kada kliknes na srce
function addheart(e,selhero,selheroprop,power,shield) {
    if(selectedHero) {
    selhero[selheroprop] += power
    const newvalue = selhero[selheroprop]
    
    selectedHeroDiv.querySelector(shield).innerHTML = newvalue
    new Audio("../sound/health.wav").play();
    e.target.style.display = 'none' 
} else {
    alert('You must select hero to charge')
}
}

//get random number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//atack btn
atackBtn.addEventListener('click', atackBtnAction)

function atackBtnAction() {

    if(!selectedHero.weapon.includes(selectedWeapon)){
        alert('You must select weapon from selected hero stash')
    } else {
        if(selectedWeapon && selectedEnemy && selectedHero) {  

            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'spider') {
                heroAtack(20,createMagic, "../sound/magic.mp3", "#191970",createWeb, "../sound/spider.mp3", "gray")
            }
            if (selectedHero.name == 'wizzard' && selectedEnemy.name == 'dragon') {
                heroAtack(20,createMagic, "../sound/magic.mp3", "#191970",createFire, "../sound/fire.wav", "red")
            }

            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'spider') {
                heroAtack(350,createClash, "../sound/sword.wav", "purple",createWeb, "../sound/spider.mp3", "gray")
            }
            if (selectedHero.name == 'swordman' && selectedEnemy.name == 'dragon') {
                heroAtack(350,createClash, "../sound/sword.wav", "purple",createFire, "../sound/fire.wav", "red")
            }
            if (selectedEnemy.health <= 0) {
                setTimeout(() => {

                    selectedEnemyDiv.style.display = 'none'



                    heartred.style.display = 'flex'
                    let heartredValue = getRndInteger(10,60) 
                    heartred.innerText = heartredValue
                    heartred.addEventListener('click', (e) => {addheart(e,selectedHero,'health',heartredValue,".redshield")})                             
                    
                    heartorange.style.display = 'flex'
                    let heartorangeValue = getRndInteger(10,60) 
                    heartorange.innerText = heartorangeValue
                    heartorange.addEventListener('click', (e) => {addheart(e,selectedHero,'orange',heartorangeValue,".orangeshield")})  

                    heartblue.style.display = 'flex'
                    let heartblueValue = getRndInteger(10,60) 
                    heartblue.innerText = heartblueValue
                    heartblue.addEventListener('click', (e) => {addheart(e,selectedHero,'blue',heartblueValue,".blueshield")})  
              
                    enemiesdown++
                    score.innerText = enemiesdown

                }, 3000);
            }
            
    
        } else {
            alert('You must choose hero, enemy and weapon to atack')
        }
    }

}

 
//enemy atack



function enemyAtack(health, orange, blue) {

    console.log(selectedEnemyDiv)

    selectedHero.health -= health 
    selectedHeroDiv.querySelector('.redshield').innerHTML = selectedHero.health
    selectedHero.orange -= orange
    selectedHeroDiv.querySelector('.orangeshield').innerHTML = selectedHero.orange
    selectedHero.blue -= blue
    selectedHeroDiv.querySelector('.blueshield').innerHTML = selectedHero.blue
}

function enemyAtackAction() {
    if(selectedWeapon && selectedEnemy && selectedHero) {
        //const allEnemies = []
        //const allHeroes = []
        //for (let i = 0; i < enemies.length; i++) {
       //     allEnemies.push(enemies[i].id)         
       // }
        //for (let i = 0; i < team.length; i++) {
       //     allHeroes.push(team[i].id)         
       // }
       // console.log(allEnemies);
       // console.log(Math.floor((Math.random()*allEnemies.length)));
       // console.log(allHeroes);
       // console.log(Math.floor((Math.random()*allHeroes.length)));


        if(selectedEnemy.name == 'spider') {
            enemyAtack(30,30,30)
        } 
        
        if(selectedEnemy.name == 'dragon') {
            enemyAtack(30,10,60)
        }


        menuSelHero.innerText = "none"
        menuSelWeapon.innerText = "none"
        menuSelEnemy.innerText = "none"
        selectedHero = null
        selectedHeroDiv = null
        selectedWeapon = null
        selectedEnemy = null
        selectedEnemyDiv = null

        resetOpacity("5500")
      
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
        atackBtn.style.display = 'block' 
        }, time)
}
//set animation
function setAnimation(animation, audio, color) {
    var nex= setInterval(animation, 200);
    gamefield.style.backgroundColor = color;
    new Audio(audio).play();
    setTimeout(() => {
        gamefield.style.backgroundColor = 'rgb(229, 209, 183)'; 
        clearInterval(nex)       
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

    anim.innerText = '🎃🎃';
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

