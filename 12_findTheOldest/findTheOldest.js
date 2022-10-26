const findTheOldest = function(people) {

    let maxAge = 0;
    let oldestPerson = {};
    let age = 0;

    for (const i in people) {
        if (!people[i].hasOwnProperty("yearOfDeath")) {
            const date = new Date();
            const currentYear = date.getFullYear();
            age = currentYear - people[i]["yearOfBirth"];
            if (age > maxAge) {
                maxAge = age;
                oldestPerson = people[i];
            } 
        }
        else {
            age = people[i]["yearOfDeath"] - people[i]["yearOfBirth"];
            if (age > maxAge) {
                maxAge = age;
                oldestPerson = people[i];
            }
        } 
    }

    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
