let userScore=0
let userChoice=""

let machineScore=0
let machineChoice=""

let continuer

let choix=document.querySelector(".conteneur")
let messageJoueur=document.querySelector(".messageJoueur")
choix.addEventListener("click",function getHumanChoice(e)
    {
        if(e.target.tagName==="BUTTON")
        {
            userChoice=e.target.value
        }
        play()
        messageJoueur.insertAdjacentHTML("afterbegin",`<p>${userChoice} vs ${machineChoice}</p>`)
    }
)


function getMachineChoice()
{
    let random=Math.random()
    if(random<=0.3333)
        machineChoice="rock"
    else if(random>0.3333 && random<=0.6666)
        machineChoice="scissor"
    else
        machineChoice="paper"
    console.log("machine "+machineChoice)

    return machineChoice
}

function result(machineChoice=getMachineChoice())
{
    if(userChoice===machineChoice)
        console.log("match null!")

    else
    {
        if(userChoice[0]==="p" && machineChoice[0]==="s")
        {
            machineScore++
        }
        if(userChoice[0]==="p" && machineChoice[0]==="r")
        {
            userScore++
        }
        if(userChoice[0]==="r" && machineChoice[0]==="s")
        {
            userScore++
        }
        if(userChoice[0]==="r" && machineChoice[0]==="p")
        {
            machineScore++
        }
        if(userChoice[0]==="s" && machineChoice[0]==="p")
        {
            userScore++
        }
        if(userChoice[0]==="s" && machineChoice[0]==="r")
        {
            machineScore++
        }
        

    }
}

function play()
{
    if (userScore<5 && machineScore<5) {
        result()
    }
    if(userScore==5)
       {
         messageJoueur.insertAdjacentHTML("beforebegin",`<p>🎊vous avez gagnee🎊  ${userScore} : ${machineScore}</p>`)
         continuer=confirm("voulez-vous continuer?")
       }
    else if(machineScore==5)
        {
            messageJoueur.insertAdjacentHTML("beforebegin",`<p>vous avez perdu 😂😂😂😂😂   ${machineScore} : ${userScore}</p>`)
            continuer=confirm("voulez-vous continuer?")
        }
    if(continuer)
       {
        userScore=0
        machineScore=0
        messageJoueur.innerHTML=""
       }
}



