'use strict';


//Displays names in place of ID's
function getPersonById(idInput){
    let foundPerson = people.filter(function (person){
        
        if(person.id == idInput){ 
            return true
        }

        else{
            return false;
        }
    
    })
    if(foundPerson[0] !== undefined){
    return(foundPerson[0].firstName + " " + foundPerson[0].lastName)
    }
    else{
        return(" ")
    }
}



//Function to find descendants
function findDescendants(person, people, descendantsArray = []){
 
    people.map(function(el){
        if(el.parents.includes(person.id)){
            descendantsArray.push(" " + el.firstName + " " + el.lastName)
            findDescendants(el, people, descendantsArray)
        }
    })
    return descendantsArray;
}

//Function to find siblings
function findSiblings(person, people, siblingArray = []){
 
    people.map(function(el){
        if(el.parents.includes(person.parents[0]) && (el.firstName != person.firstName)){
            siblingArray.push(" " + el.firstName + " " + el.lastName)
        }
        
    })
    
    return siblingArray;
}



//Returns an array of people matching the search criterea for height/weight
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

//Function to clear tables
function clearTable(table){
    document.getElementById(table).innerHTML = ''
}


//Function to Generate Tables
function makeTable(arrayInput, chosenTable){


    arrayInput.map(function(el){
        document.getElementById(chosenTable).innerHTML += `<tr>
        <td>${el.id}</td>
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td>${el.gender}</td>
        <td>${el.dob}</td>
        <td>${el.height}</td>
        <td>${el.weight}</td>
        <td>${el.eyeColor}</td>
        <td>${el.occupation}</td>
        <td>${getPersonById(el.parents[0]) + " " + getPersonById(el.parents[1])}</td>
        <td>${getPersonById(el.currentSpouse)}</td>
        <td>${findDescendants(el, people)}</td>
        <td>${findSiblings(el, people)}</td>
        </tr>`
    })

}

//Initial Generation of Table 1
makeTable(people, "data")

//Updates Table 1 based on search results
document.getElementById("button").onclick = function(){
    clearTable("data");
    let heightWeightArray = searchByHeightWeight()
    makeTable(heightWeightArray, "data");
}




//Returns an array of people matching the search criterea for DOB
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

//Initial generation of Table 2
makeTable(people, "birthdayTable")


//Updates Table 2 based on search results
document.getElementById("dobButton").onclick = function(){
    clearTable("birthdayTable");
    let dobArray = searchByDob()
    makeTable(dobArray, "birthdayTable");
}



