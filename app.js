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
        return(filteredPeople);
    }else{
        alert('Sorry, looks like there is no one with that name. Please try again.');
    }
}

let firstTable = people.map(function(el){
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
        <td>${el.children}</td>
    </tr>`
})



function getNewTable(){
    let newTable= searchByName();
    document.getElementById("data").innerHTML = ''
newTable.map(function(el){
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
        <td>${el.children}</td>
    </tr>`
})
}


function searchByDob(){
    
    let dobInput = document.forms['dobForm']['dob'].value;

    
    let filteredPeople = people.filter(function (person) {
        if(person.dob === dobInput){
            return true;
        }
        return false;
    });
    
    
    if(filteredPeople.length > 0){
        return(filteredPeople);
    }else{
        alert('Sorry, looks like there is no one with that birthday. Please try again.');
    }
}

let birthdayTable = people.map(function(el){
    document.getElementById("birthdayTable").innerHTML += `<tr>
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
        <td>${el.children}</td>
    </tr>`
})

function getNewBirthdayTable(){
    let newBirthdayTable= searchByDob();
    document.getElementById("birthdayTable").innerHTML = ''
newBirthdayTable.map(function(el){
    document.getElementById("birthdayTable").innerHTML += `<tr>
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
            <td>${el.children}</td>
    </tr>`
})
}

