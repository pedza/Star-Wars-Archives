let tableSelec=document.getElementById("table")
let imageShips=document.getElementById("ships")
let imagePeople=document.getElementById("people")
let buttonGen=document.createElement("button")
let divButtSelect=document.getElementById("buttoncont")
divButtSelect.append(buttonGen)
buttonGen.innerText="next"
buttonGen.style.visibility="hidden"


let tableGen=function(tHead1, tHead2, tHead3, tHead4, tHead5, tHead6){
    let trforHead=document.createElement("tr");
    tableSelec.append(trforHead)
    let thInTr1=document.createElement("th");
    trforHead.append(thInTr1)
    let thInTr2=document.createElement("th")
    trforHead.append(thInTr2)
    let thInTr3=document.createElement("th")
    trforHead.append(thInTr3)
    let thInTr4=document.createElement("th")
    trforHead.append(thInTr4)
    let thInTr5=document.createElement("th")
    trforHead.append(thInTr5)
    let thInTr6=document.createElement("th")
    trforHead.append(thInTr6)
    thInTr1.innerText=tHead1
    thInTr2.innerText=tHead2
    thInTr3.innerText=tHead3
    thInTr4.innerText=tHead4
    thInTr5.innerText=tHead5
    thInTr6.innerText=tHead6

}

tableGenInfoShip=function(jSon){
    for(let i=0; i<jSon.results.length;i++){
    let trForinfo=document.createElement("tr")
    tableSelec.append(trForinfo)
    let tdForName=document.createElement("td")
    trForinfo.append(tdForName)
    let tdForModel=document.createElement("td")
    trForinfo.append(tdForModel)
    let tdForMan=document.createElement("td")
    trForinfo.append(tdForMan)
    let tdForCost=document.createElement("td")
    trForinfo.append(tdForCost)
    let tdForPeopCap=document.createElement("td")
    trForinfo.append(tdForPeopCap)
    let tdForClass=document.createElement("td")
    trForinfo.append(tdForClass)
    tdForName.innerText=jSon.results[i].name
    tdForModel.innerText=jSon.results[i].model
    tdForMan.innerText=jSon.results[i].manufacturer
    tdForCost.innerText=jSon.results[i].cost_in_credits
    tdForPeopCap.innerText=jSon.results[i].passengers
    tdForClass.innerText=jSon.results[i].model
}
    
}

tableGenInfoPeople=function(jSon){
    for(let i=0; i<jSon.results.length;i++){
    let trForinfo=document.createElement("tr")
    tableSelec.append(trForinfo)
    let tdForName=document.createElement("td")
    trForinfo.append(tdForName)
    let tdForHeight=document.createElement("td")
    trForinfo.append(tdForHeight)
    let tdForMass=document.createElement("td")
    trForinfo.append(tdForMass)
    let tdForSpecies=document.createElement("td")
    trForinfo.append(tdForSpecies)
    let tdForBirh=document.createElement("td")
    trForinfo.append(tdForBirh)
    let tdForAppear=document.createElement("td")
    trForinfo.append(tdForAppear)
    tdForName.innerText=jSon.results[i].name
    tdForHeight.innerText=jSon.results[i].height
    tdForMass.innerText=jSon.results[i].mass
    tdForSpecies.innerText=jSon.results[i].species
    tdForBirh.innerText=jSon.results[i].birth_year
    tdForAppear.innerText=jSon.results[i].films.length
}
    
}
let counter=1

buttonGen.addEventListener("click", function(e){
    
    tableSelec.innerText=""
    counter+=1
    console.log(counter)
    if(counter<5){
    tableSelec.innerText = tableGen("Name", "Model", "Manufacturer", "Cost", "People Capacity", "Class")
    tableSelec.innerText=getData(`https://swapi.co/api/starships/?page=${counter}&format=json`)
    }
    else (tableSelec.innerText="No More Pages")
})




let getData=function(url, img){
    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){

    if(img===imageShips){
            tableGenInfoShip(data)
            
    }
    else if (img===imagePeople){
        tableGenInfoPeople(data)
    } 

    else if (buttonGen.innerText==="next"){
        tableGenInfoShip(data)
    }

    
    
    
    console.log(data)
    return data
})
}
    


imageShips.addEventListener("click", function(){
    // let counter2=1
    // counter2+=1
    // console.log (counter2)
    imageShips.style.display="none"
    imagePeople.style.display="none"
    tableGen("Name", "Model", "Manufacturer", "Cost", "People Capacity", "Class")
    getData("https://swapi.co/api/starships/?page=1&format=json", imageShips)
   buttonGen.style.visibility="visible"
})

imagePeople.addEventListener("click", function(){
    imageShips.style.display="none"
    imagePeople.style.display="none"
    tableGen("Name", "Height ", "Mass ", "Species Name", "Birth Yea", "Appearances")
    getData("https://swapi.co/api/people/?page=1&format=json", imagePeople)
   
})

