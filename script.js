let userScore=0
let userChoice=""

let machineScore=0
let machineChoice=""

function getHumanChoice()
{
    userChoice=(prompt("entrer votre votre choix -rock  -scissor  -paper (default='rock')","rock")).toLowerCase()
    return userChoice
}

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

function result(userChoice=getHumanChoice(),machineChoice=getMachineChoice())
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
    while (userScore<5 && machineScore<5) {
        result()
    }
    if(userScore==5)
        console.log("vous avez gagnee "+userScore)
    else
        console.log("defaite. Essayer une prochaine fois "+machineScore)

    let continuer=confirm("voulez-vous continuer?")
    if(continuer)
       {
         userScore=0
        machineScore=0
        play()
       }
}

play()

