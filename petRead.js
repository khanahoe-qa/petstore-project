'use strict';

const FETCHURL1 = "https://petstore.swagger.io/v2/store/inventory";
const FETCHURL2 = "https://petstore.swagger.io/v2/pet/";
const pets = document.querySelector("#pets");
const petID = document.querySelector("#petID");
const readOptions = document.querySelector("#readOptions");

const read = () => {
    fetch(FETCHURL1).then((response) => {
        if (response.status !== 200){
            console.error(`Error - Status code: ${response}`);
            return;
        }else{
            response.json().then(json => {
                console.log(json);
                for (let i = 0; i < json.length; i++){
                    let p = document.createElement("p");
                    p.setAttribute("class","pets");
                    let info = document.createTextNode(json[i]);
                    p.appendChild(info);  
                }
            })
        }
    })
}

const readPetByID = () => {
    fetch(FETCHURL2 + petID.value,{ method : "GET", headers : {"Content-Type" : "application/json"
}
}).then(response => response.json())
.then(json => {
    alert(`Your pet has been Found! \n\n ID: ${json.id}\n Name: ${json.name}\n Category: ${json.category.name}`);
    console.log(json)})
.catch(err => console.log("Stop "));
    
}

const readAllPets = () => {
    fetch(FETCHURL2 + "findByStatus?status=" + readOptions.value,{
        method : "GET"
    }).then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log("Stop "));
}