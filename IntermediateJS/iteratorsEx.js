//Use the following object for this set of questions:

let users = [
  {
    username: 'larry',
    email: 'larry@foo.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Perl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
      city: 'San Francisco',
      state: 'CA'
    }
  },
  {
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
      city: 'New York',
      state: 'NY'
    }
  },
  {
    username: 'sam',
    email: 'sam@test.com',
    yearsExperience: 8.2,
    favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
    favoriteEditor: 'Atom',
    hobbies: ['Golf', 'Cooking', 'Archery'],
    hometown: {
      city: 'Fargo',
      state: 'SD'
    }
  },
  {
    username: 'anne',
    email: 'anne@test.com',
    yearsExperience: 4,
    favoriteLanguages: ['C#', 'C++', 'F#'],
    favoriteEditor: 'Visual Studio Code',
    hobbies: ['Tennis', 'Biking', 'Archery'],
    hometown: {
      city: 'Albany',
      state: 'NY'
    }
  },
  {
    username: 'david',
    email: 'david@test.com',
    yearsExperience: 12.5,
    favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
    favoriteEditor: 'VS Code',
    hobbies: ['Volunteering', 'Biking', 'Coding'],
    hometown: {
      city: 'Los Angeles',
      state: 'CA'
    }
  }
];

/*Write a function called printEmails which console.log’s each email for the users.*/
function printEmails(users){
    users.forEach(function(obj){
        console.log(obj.email);
    });
}

printEmails(users);
// larry@foo.com
// jane@test.com
// sam@test.com
// anne@test.com
// david@test.com

/*Write a function called printHobbies which console.log’s each hobby for each user.*/
function printHobbies(users){
    users.forEach(function(obj){
        obj.hobbies.forEach(function(hobby){
            console.log(hobby);
        });
    });
}

printHobbies(users);
// "Fishing",
// "Sailing",
// "Hiking",
// "Swimming", ...

/*Write a function called findHometownByState which returns the first user which has a hometown of the state that is passed in*/
function findHometownByState(users, state){
    let arr = Object.values(users);
    return arr.find(function(obj){
        return obj.hometown && obj.hometown.state === state;
    });
}

findHometownByState(users, 'CA');
/*/
{
    username: "larry",
    email: "larry@foo.com",
    years_experience: 22.1,
    favorite_languages: ["Perl", "Scala", "C++"],
    favorite_editor: "Vim",
    hobbies: ["Fishing", "Sailing", "Hiking"],
    hometown: {
        city: "San Francisco",
        state: "CA"
    }
}
/*/

/*Write a function called allLanguages which returns an array of all of the unique values*/
function allLanguages(users){
    let languages = [];
    users.map(function(obj){
        obj.favoriteLanguages.map(function(language){
            if(!languages.includes(language)){
                languages.push(language);
            }
        });
    });
    return languages;
}

allLanguages(users);
// ["Perl", "Scala", "C++","Haskell", "PHP","JavaScript","Ruby", "Python", "Go","C#", "F#", "Swift"]

/*Write a function called hasFavoriteEditor which returns a boolean if any of the users have the editor passed in*/

//'any of the users' -> some method

function hasFavoriteEditor(users, editor){
    let arr = Object.values(users);
    return arr.some(function(user){
        return user.favoriteEditor === editor;
    });
}

hasFavoriteEditor(users, 'VS Code'); // true
hasFavoriteEditor(users, 'Eclipse'); // false