class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }
    
    get level() {
        return this._level;
    }
    
    get numberOfStudents() {
        return this._numberOfStudents;
    }

    // set level(inputLevel) {
    //     if (inputLevel == 'primary' || inputLevel == 'middle' || inputLevel == 'high') {
    //         this._level = inputLevel;
    //     } else {
    //         console.log("Incorrect Level Supplied, acceptable values are 'primary' / 'middle' / 'high'.")
    //     }
    // }

    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number') {
            this._numberOfStudents = newNumberOfStudents;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeachers) {
        if (Array.isArray(substituteTeachers) === true) {
            let validInput = true;
            
            substituteTeachers.forEach(teacher => {
                if (typeof teacher != 'string') {
                    validInput = false;
                    console.log("Invalid input: substituteTeachers must all contain strings.")
                }
            });

            if (validInput === true) {
                let selectedSubTeacher = Math.floor(Math.random() * substituteTeachers.length);
                return substituteTeachers[selectedSubTeacher];
            }
        } else {
            console.log("Invalid input: substituteTeachers must be an array of strings.")
        }
    }
}

// const schoolTest = new School('Name','primary',200);
// let subTeachers = ["John", "Frank" , "Amy", "Violet"];
// console.log(School.pickSubstituteTeacher(subTeachers));


//Primary
class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy ) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents);
    }
}

class HighSchool extends School {
    constructor(name, level, sportsTeams) {
        super(name, level);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return console.log(this._sportsTeams); 
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;