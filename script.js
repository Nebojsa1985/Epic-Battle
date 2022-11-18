class Hero {    
    constructor (name, health, weapon) {
    this.name = name
    this.health = health
    this.weapon = []
}
}

const gamefield =  document.querySelector('.gamefield')
let wizzardHero = new Hero('wizzard', 120, '')
let swordmanHero = new Hero('swordman', 150, '')

let spiderHero = new Hero('spider', 100, '')
let dragonHero = new Hero('dragon', 200, '')

const team = document.querySelectorAll('.team > div')
let menuSelHero = document.querySelector('.menu-sel-hero')

const enemies = document.querySelectorAll('.enemies > div')
let menuSelEnemy = document.querySelector('.menu-sel-enemy')


let menuSelWeapon = document.querySelector('.menu-sel-weapon')

const wizzard = document.querySelector('.wizzard')
let wizzardHealth = document.querySelector('.wizzard > .hearts')
wizzardHealth.innerHTML = wizzardHero.health

const swordman = document.querySelector('.swordman')
let swordmanHealth = document.querySelector('.swordman > .hearts')
swordmanHealth.innerHTML = swordmanHero.health

const dragon = document.querySelector('.dragon')
let dragonHealth = document.querySelector('.dragon > .hearts')
dragonHealth.innerHTML = dragonHero.health

const spider = document.querySelector('.spider')
let spiderHealth = document.querySelector('.spider > .hearts')
spiderHealth.innerHTML = spiderHero.health

const sword = document.querySelector('.sword')
const spear = document.querySelector('.spear')
const axe = document.querySelector('.axe')
const fire = document.querySelector('.fire')
const ice = document.querySelector('.ice')
const water = document.querySelector('.water')

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
            selectedWeapon = weapon
            menuSelWeapon.innerText = weapon
        }
        selectedHeroDiv.appendChild(weaponSpan)
     }
    }
   }
}



//hero atack
atackBtn.addEventListener('click', atackBtnAction)

function atackBtnAction() {
    if(selectedWeapon && selectedEnemy && selectedHero) {
        
        selectedEnemy.health -= 20
        selectedEnemyDiv.firstChild.innerHTML = selectedEnemy.health
   
        setAnimation(createMagic, "../sound/magic.mp3", "#80BDE3")
        atackBtn.style.display = 'none'
        setTimeout(() => {
            setAnimation(createWeb, "../sound/spider.mp3", "gray")
            enemyAtackAction()   
            //atackBtn.style.display = 'block'   
            }, "3500")

    } else {
        alert('You must choose hero, enemy and weapon to atack')
    }
}

//enemy atack

function enemyAtackAction() {
    if(selectedWeapon && selectedEnemy && selectedHero) {
        const allEnemies = []
        const allHeroes = []
        for (let i = 0; i < enemies.length; i++) {
            allEnemies.push(enemies[i].id)         
        }
        for (let i = 0; i < team.length; i++) {
            allHeroes.push(team[i].id)         
        }
        console.log(allEnemies);
        console.log(Math.floor((Math.random()*allEnemies.length)));
        console.log(allHeroes);
        console.log(Math.floor((Math.random()*allHeroes.length)));


      
        selectedHero.health -= 20
        selectedHeroDiv.firstChild.innerHTML = selectedHero.health

        menuSelHero.innerText = "none"
        menuSelWeapon.innerText = "none"
        menuSelEnemy.innerText = "none"
        selectedHero = null
        selectedHeroDiv = null
        selectedWeapon = null
        selectedEnemy = null
        selectedEnemyDiv = null


        //reset - ubaci sve u jednu funkciju
        resetOpacity("1500")
        ////////////
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

    document.body.appendChild(anim);

    setTimeout(()=>{
        anim.remove();
    }, 4000);

}
