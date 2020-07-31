// M.A.S.H. Project
function mash() {
    return ("You will live in a " + getHome() + ", and travel to " + getTravelCount() + ", countries, have a pet " + getPet() + ", be married to " + getSpouse() + ", and you will work as a " + getOccupation() + "!");
}
let myVar = mash();
console.log(myVar);

function randNumGenerator(num1) {
    let a1 = Math.floor(Math.random() * num1);
    return a1
}


function getHome() {
    let myArray = ["Mansion", "Castle", "Shack", "House"];
    myArray.push(process.argv[2])
    let randNum = randNumGenerator(myArray.length + 1);
    if (randNum == 0) {
        return myArray[0];
    }
    else if (randNum == 1) {
        return myArray[1];
    }
    else if (randNum == 2) {
        return myArray[2];
    }
    else if (randNum == 3){
        return myArray[3];
    }
    else {
        return myArray[4]
    }
}

function getTravelCount() {
    let randNum2 = randNumGenerator(101);
    return randNum2;
}

function getPet() {
    let myArray2 = ["Pikachu", "Dog", "Komodo Dragon", "Racoon", "Mountain Lion", "Squirtle", "Charmander", "Drippy Squirrel"];
    let randomPets = ["Dinosaur", "Sonic", "Knuckles"];
    randomPets.push(process.argv[3]);
    let randNum4 = randNumGenerator(2);
    if (randNum4 == 1) {
        let randNum3 = randNumGenerator(myArray2.length + 1);
            if (randNum3 == 0) {
                return myArray2[0];
    }
            else if (randNum3 == 1) {
                return myArray2[1];
    }
            else if (randNum3 == 2) {
                return myArray2[2];
    }
            else if (randNum3 == 3) {
                return myArray2[3];
    }
            else if (randNum3 == 4) {
                return myArray2[4];
    }
            else if (randNum3 == 5) {
                return myArray2[5];
    }
            else if (randNum3 == 6) {
                return myArray2[6];
    }
            else {
                return myArray2[7];
    }
}
    if (randNum4 == 0) {
        let randNum5 = randNumGenerator(randomPets.length + 1);
            if (randNum5 == 0) {
                return randomPets[0];
            }
            else if (randNum5 == 1) {
                return randomPets[1];
            }
            else {
                return randomPets[2];
            }
    }
}

function getSpouse() {
    let mySpouse1 = ["Madison Beer", "Billie Eilish", "Raphtalia", "Kylie Jenner"];
    let randNum6 = randNumGenerator(mySpouse1.length + 1);
            if (randNum6 == 0) {
                return mySpouse1[0];
            }
            else if (randNum6 == 1) {
                return mySpouse1[1];
            }
            else if (randNum6 == 2) {
                return mySpouse1[2];
            }
            else {
                return mySpouse1[3];
            }
    }


function getOccupation() {
    let myOccupation = ["Computer Scientist", "Twitch Streamer", "Police Officer", "Anime Voice Actor"]
    let randNum8 = randNumGenerator(myOccupation.length + 1);
    if (randNum8 == 0) {
        return myOccupation[0];
    }
    else if (randNum8 == 1) {
        return myOccupation[1];
    }
    else if (randNum8 == 2) {
        return myOccupation[2];
    }
    else {
        return myOccupation[3];
    }
}
