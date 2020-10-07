// OOP

class Cartoon { 
    constructor (name, yearOfCreation, origin) {
        this.name = name;
        this.yearOfCreation = yearOfCreation;
        this.origin = origin;
    }
    getUniversary() {
        const cartoonAge = new Date().getFullYear() - this.yearOfCreation
        return  cartoonAge > 50 
        ? `Waiting for a 100 year Universary` 
        : `The 50 year Universary will be in ${50 - cartoonAge} years`
    }

    getSpendings (budget) {
        return `The studio has spent ${budget} US dollars for production`
    }
}


class Anime extends Cartoon { 
    constructor (name, dateOfCreation, studio) {
    super ( name, dateOfCreation, "Japan");
    this.studio = studio;
}}

class StopMotion extends Cartoon { 
    constructor (name, dateOfCreation, director) {
    super( name, dateOfCreation, "worldwide");
    this.director = director;
}}


const newCartoon = new Cartoon ("Cinderella", 1950, 'USA');
console.log({
    newCartoon,
    cartoonAniv: newCartoon.getUniversary(),
    cartoonBudget: newCartoon.getSpendings("1.000.000")
});

const newAnime = new Anime ("Howl's Moving Castle", 2005, "Ghibli");
console.log({
    newAnime,
    animeAniv: newAnime.getUniversary(),
    amimeBudget: newAnime.getSpendings("2.000.000")
});

const newStopMotion = new StopMotion("Chicken Run", 2000, "Peter Lord");
console.log({
    newStopMotion,
    stopMotionAniv: newStopMotion.getUniversary(),
    stopMotionBudget: newStopMotion.getSpendings("45.000.000")
});



