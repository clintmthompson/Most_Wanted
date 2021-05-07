'use strict';

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    
    // Rather than console logging, you need to append the filteredPeople to a table.
    if(filteredPeople.length > 0){
        console.log(filteredPeople);
    }else{
        console.log('Sorry, looks like there is no one with that name.');
    }
}

people.map(function(el){
    document.getElementById("data").innerHTML += `<tr>
        <td>${el.id}</td>
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td>${el.gender}</td>
        <td>${el.dob}</td>
        <td>${el.height}</td>
        <td>${el.weight}</td>
        <td>${el.eyeColor}</td>
        <td>${el.occupation}</td>
        <td>${el.parents}</td>
        <td>${el.currentSpouse}</td>
    </tr>`
})


//Storing specific contents of array in new variables by type

let listIds = people.map(function(el){
    return(el.id)
})
let lisFirstName = people.map(function(el){
    return(el.firstName)
})
let listLastName = people.map(function(el){
    return(el.lastName)
})
let listGender = people.map(function(el){
    return(el.gender)
})
let listDob = people.map(function(el){
    return(el.dob)
})
let listHeight = people.map(function(el){
    return(el.height)
})
let listWeight = people.map(function(el){
    return(el.weight)
})
let listEyeColor = people.map(function(el){
    return(el.eyeColor)
})
let listOccupation = people.map(function(el){
    return(el.occupation)
})
let listParents = people.map(function(el){
    return(el.parents)
})
let listCurrentSpouse = people.map(function(el){
    return(el.currentSpouse)
})

console.log(listOccupation[0]) //testing calling a specific index from stored array