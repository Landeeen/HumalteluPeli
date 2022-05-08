let gameOn = false

const playerList = []

function randomPlayer() {
     return playerList[Math.floor(Math.random() * playerList.length)]
}

let singleChallenges = []
let pairChallenges = []
let groupChallenges = []
let drinkChallenges = []
let randomChallenges = []

const addPlayerToList = () => {
    let playerName = document.querySelector('#playerName').value
    if(playerName === ''){
        alert('Syötä pelaajan nimi ensin.')
    } else if (playerName.length > 8 ){
        alert('Nimen maksimipituus on 8 kirjainta.')
    } else {
        playerList.push(playerName)
        console.log(playerList);
        addPlayer(playerName)
        document.querySelector('#playerName').value = ''
    }   
    let container_li = document.getElementById('playerList');
    let liCount = container_li.getElementsByTagName('li').length;
    if(liCount > 20){
        document.querySelector('#playerList').style.fontSize = '10px'
    }
    if (liCount > 40) {
        alert('Eiköhän jo riitä.')
    }
    
    console.log(liCount);
}

const addPlayer = (name) => {

    let li = document.createElement("li");
    li.innerText = name;
    document.querySelector('#playerList').appendChild(li);
 }

const startGame = () => {
    if (playerList.length === 0) {
        alert('Lisää ensin pelaajat.')
    } else {

        singleChallenges = ['Juo huikka ilman käsiä. Jaa 3 kolme huikkaa jos onnistut, muuten juo 3.','Istu slaavikyykkyssä seuraava kierros tai juo 5 huikkaa','Valitse itsellesi juomakaveri, joka juo aina kun sinäkin juot. (Kolmen kierroksen ajan)','Tee kuperkeikka ja jaa 5 huikkaa, muuten juo itse 5.','Muut pelaajat keksivät sinulle sanan jostain kategoriasta esim. eläin, elokuvahahmo. Sinulla on minuutti aikaa kysyä kyllä tai ei kysymyksiä ja keksiä mikä olet. Jos onnistutu muut juovat 5 jos et juo itse 5.','Bottleflip tai flipcup, kolme yritystä, jos onnistut jaa 3 huikkaa muuten juo itse.']

        pairChallenges = ['Ottakaa kps ja lyökää vetoa huikista, häviäjä juo huikat.','Molemmat juo 4 huikkaa','Näyttäkää viimeisin tallennettu meme puhelimesta. Muut pelaajat päättävät kumpi on parempi. Häviäjä juo 3 huikkaa','Päättäkää kumpi juo viinashotin ja kumpi vesishotin, älkää kertoko muille. Juokaa samaan aikaan ja muut arvaavat kumpi joi viinaa. väärin arvanneet juovat 2 huikkaa.','Juokaa ikäeronne verran huikkia','Kädenvääntö, häviäjä juo 2 huikkaa.','Peukkusota, häviäjä juo 2 huikkaa','Pelaaja jolla on puhelin tekee juoman, jonka jälkeen heittäkää kolikkoa kumpi sen joutuu juomaan','Patsas. Menkää asentoon, jossa teillä on yhteensä 2 päätä, 2 jalkaa ja 2 kättä koskettamassa maata. Jos onnistutte molemmat saavat jakaa 3 huikkaa, muten juokaa molemmat itse 3.','Toinen teistä juo yhden huikan siten, että toinen toimii tämän pelaajan käsinä seisomalla hänen selkänsä takana.','Ottakaa kps siten, että alkuasennossa molemmat seisovat normaalisti ja häviäjä siirtää aina toista jalkaansa askeleen verran taakse. Peli loppuu, kun toinen ei pysy enää psytyssä. Häviäjälle 3 huikkaa.','Muut antavat teille sanan, jonka toinen teistä pirtää toisen selkään. Jos saatte sanan oikein saatte jakaa molemmat 3 huikkkaa, muuten juokaa itse 3.']

        groupChallenges = ['Kaikki joilla valkoiset sukat juo 1 huikan, mustat sukat 2 ja ilman sukkia 3.',`Kaikki juovat niin monta huikkaa kuin on pelaajia. Eli ${playerList.length}.`,'Se kuka on juonut tänään vähiten juo kolme. Se kuka on juonut eniten juo lasin vettä.','Kaatakaa lasiin vettä vuorotellen. Kuka ensimmäisenä saa veden valumaan yli juo 5 huikkaa.','Laskekaa kolmeen ja kaikki osoittavat samaan aikaan henkilöä kenen tulisi juoda. Se kuka saa eniten osoituksia juo 3 huikkaa','Kaikki jotka seurustelevat juovat 2 huikkaa.','Kaikki sinkut juovat yhden huikan']

        drinkChallenges = ['Ota 5 huikkaa','Jaa 5 huikkaa.',`Vesiputous alkaa pelaajasta ${randomPlayer()}.`, 'Ota shotti.', 'Kaikki pelaajat juo 2.','Laske syntymävuotesi numerot yhteen niin kauan kunnes jäljelle jää vain yksi numero. Ota sen verran huikkia.','Juo etunimen kirjainten määrä huikkia.','Kaikki muut juo 2 huikkaa.','Ota huikka ja valitse uusi tehtävä.','Juo huikka lasisi vastakkaiselta reunalta.','Isäntä/emäntä juo 3 huikkaa.','Miehet juo.','Naiset juo.',`${randomPlayer()} kertoo monta huikkaa juot (1-10).`,'Juo 3 huikkaa','Jaa 3 huikkaa','Se joka on juonut vähiten ottaa 5 huikkaa',`${randomPlayer()} ja ${randomPlayer()}, se kummalla on vähemmän juomaa jäljellä juo sen loppuun.`,'Juo niin monta huikkaa kuin päälläsi on erivärisiä vaatekappaleita']

        randomChallenges = ['Valitse toinen tehtävä','Suunnan vaihto','Puhu seuraava kierros niin kuin sinulla ei olisi hampaita. Jos joku nauraa hän joutuu juomaan yhden huikan.','Näytä party trick, muuten juo 5 huikkaa.','Seuraava pelaaja valitsee tehtävänsä silmät kiinni','Skippaa seuraavan pelaajan vuoro.','Vuoro siirtyy sille, joka on sinua vastapäätä','Sinä ja joka toinen sinusta kellon suuntaan ottaa 2 huikkaa']

        document.querySelector('#beforePlay').style.display = 'none'
        document.querySelector('#duringPlay').style.display = 'flex'
        document.querySelector('#playerList').innerHTML = ''
       
        gameOn = true
    }
}

const singleTask = function() {
    if (gameOn === false ) {
        alert('Lisää ensin pelaajat ja aloita peli.')
    } else {
        
        let singleChallenge = singleChallenges[Math.floor(Math.random() * singleChallenges.length)]
        console.log(singleChallenge);
        document.querySelector('#task').innerHTML = singleChallenge
        singleChallenges = singleChallenges.filter(element => element !== singleChallenge)
        
    }
    
}

 const pairTask = function() {
    if (gameOn === false ) {
        alert('Lisää ensin pelaajat ja aloita peli.')
    } else {
        
        let pairChallenge = pairChallenges[Math.floor(Math.random() * pairChallenges.length)]
        console.log(pairChallenge);
        document.querySelector('#task').innerHTML = pairChallenge
        pairChallenges = pairChallenges.filter(element => element !== pairChallenge)
    
    }
}

const groupTask = function() {
    if (gameOn === false ) {
        alert('Lisää ensin pelaajat ja aloita peli.')
    } else {
        
        let groupChallenge = groupChallenges[Math.floor(Math.random() * groupChallenges.length)]
        console.log(groupChallenge);
        document.querySelector('#task').innerHTML = groupChallenge
        groupChallenges = groupChallenges.filter(element => element !== groupChallenge)
        
    }
}

const drinkTask = function() {
    if (gameOn === false ) {
        alert('Lisää ensin pelaajat ja aloita peli.')
    } else {

        let drinkChallenge = drinkChallenges[Math.floor(Math.random() * drinkChallenges.length)]
        console.log(drinkChallenge);
        document.querySelector('#task').innerHTML = drinkChallenge
        drinkChallenges = drinkChallenges.filter(element => element !== drinkChallenge)
       
    }
}

const randomTask = function() {
    if (gameOn === false ) {
        alert('Lisää ensin pelaajat ja aloita peli.')
    } else {
    
        let randomChallenge = randomChallenges[Math.floor(Math.random() * randomChallenges.length)]
        console.log(randomChallenge);
        document.querySelector('#task').innerHTML = randomChallenge
        randomChallenges = randomChallenges.filter(element => element !== randomChallenge)
        
    }
}

document.querySelector('#addPlayer').addEventListener('click',addPlayerToList)
document.querySelector('#startGame').addEventListener('click',startGame)

document.getElementById('single').onclick = singleTask
document.getElementById('pair').onclick = pairTask
document.getElementById('group').onclick = groupTask
document.getElementById('drink').onclick = drinkTask
document.getElementById('random').onclick = randomTask


