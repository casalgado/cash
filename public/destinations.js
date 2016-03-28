

var destination = {
    city:"Krems",
    country:"Austria",
    days: 50,
    year: 2015
};

fullName = function() {return this.city + ", " + this.country;}


console.log(destination.city)
console.log(destination.fullName)