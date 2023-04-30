let instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

/*Write a function called displayCities that console.logs all the values in the citiesLivedIn array:

displayCities();

// "Seattle"
// "Providence"
// "New York"*/
function displayCities(){
    let cities = instructorData.additionalData.moreDetails.citiesLivedIn;
    for(let city of cities){
        console.log(city);
    }
}
displayCities();

/*Write a function called displayHometownData that console.logs all the values inside of the hometown object

displayHometownData();

// "West Orange"
// "NJ"*/
function displayHometownData(){
    let result = instructorData.additionalData.moreDetails.hometown;
    for(let key in result){
        console.log(result[key]);
    }
}
displayHometownData();

/*Let’s write a function called addDetail that accepts two parameters, a key and a value and adds the key and value to the moreDetails 
object and returns the moreDetails object*/

addDetail("isHilarious", true);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
}
*/
addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
    previousApartments: ["Mission", "North Beach", "Nob Hill"]
}
*/
function addDetail(key, value){
    let detailsObj = instructorData.additionalData.moreDetails;
    detailsObj[key] = value;
    return detailsObj
}
console.log(addDetail("isHilarious", true));
console.log(addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]));

/*Finally, let’s write a function called removeDetail that removes a key in the moreDetails object and returns the moreDetails object 
(the new keys added above are not included in these examples).*/

removeDetail('citiesLivedIn');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    }
}
*/
removeDetail('hometown');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true
}
*/
removeDetail('favoriteBasketballTeam');
/*
{
    numberOfSiblings: 3,
    isYoungest: true
}
*/
function removeDetail(key){
    let detailsObj = instructorData.additionalData.moreDetails;
    let removedVal = detailsObj[key];
    delete detailsObj[key];
    return detailsObj;
}