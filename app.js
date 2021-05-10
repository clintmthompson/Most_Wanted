'use strict';

function searchByHeightWeight(){
    let heightInput = document.forms['heightWeightForm']['height'].value;
    let weightInput = document.forms['heightWeightForm']['weight'].value;

    
    let filteredPeople = people.filter(function (person) {
        if(person.height == heightInput && person.weight == weightInput){
            return true;
        }
        return false;
    });
    
    if(filteredPeople.length > 0){
        return(filteredPeople);
    }else{
        alert('Sorry, looks like there is no match. Please try again.');
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
        <td>${el.grandchildren}</td>
    </tr>`
})



function getNewTable(){
    let newTable= searchByHeightWeight();
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
        <td>${el.grandchildren}</td>
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
        <td>${el.grandchildren}</td>
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
            <td>${el.grandchildren}</td>
    </tr>`
})
}


