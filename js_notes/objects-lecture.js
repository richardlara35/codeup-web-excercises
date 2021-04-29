(function(){
"use strict";

    // var aboutMe = new Object();
    // // console.log(aboutMe);
    // //
    // var thisIsMe = {};
    // console.log(thisIsMe);
    //
    // thisIsMe = {
    //     name: "Richard",
    //     lovesFood: true,
    //     favTeam: "The best team in Texas aka The Rockets",
    //     age: 25,
    // };

//  // nameOfObject.nameOfProperty = value
// aboutMe.city = "Houston";
// aboutMe.lovesFood = true;
// aboutMe.intrests = "Music";


    //bracket notation

    // var daMavs = {};
    //
    // // brackets and quotes
    //
    // daMavs["city"] = 'Dallas';
    // console.log(daMavs);

// aboutMe["favSport"] = 'Basketball';
// aboutMe["hobby"] = 'sleeping';
// aboutMe["age"] = 25;
//     console.log(aboutMe);
//

    // TODO: create an empty 'yourFaveSportsTeam' object using object literals
// TODO: let's add a 'city', 'coach', and 'sport' property to our 'team' object using dot
// TODO: let's add 'numOfPlayers', 'numOfChampsWon', and 'isBestTeam' properties to our same 'teams' object using bracket notation

    // var theRockets = {};
    // theRockets.city = 'Houston';
    // theRockets.coach = 'Stephen Silas';
    // theRockets.sport = 'Basketball';
    //
    // theRockets["numOfChampsWon"] = '2';
    // theRockets["numOfPlayers"] = '17';
    // theRockets["isBestTeam"] = true;
    //
    //
    // function sportAndNumOfPlayers(input){
    //     return [input.sport, input.numOfPlayers]
    // }
    //
    // console.log(sportAndNumOfPlayers(theRockets));
    //
    // console.log(theRockets["numOfChampsWon"]);
    //


    // var losRockets = {
    //     city: 'Houston',
    //     coach: 'Stephen',
    //     wins: 5,
    //     playersInfo: [
    //         {name: 'John Wall',
    //         age: 30,
    //         },
    //         {name: 'Christian Wood',
    //         age: 25,
    //         },
    //         {name: "Jae'Sean Tate",
    //         age: 24
    //         },
    //     ]
    // }
    // console.log(losRockets.playersInfo[1].name);

    var theSpurs = {
        city: "SA",
        coach: 'gregg',
        wins: 5,
        players: ["one", "two", "tim duncan", "manu", "david robinson"],
        playerInfo: [
            {
                name: "Tim",
                age: 40,
                mvp: 3
            },
            {
                name: "manu",
                age: 38,
                mvp: 6
            }
        ],
        otherNBATeams: {
            Jazz: {
                city: "Salt Lake City",
                mascot: "Jazz Bear",
                champsWon: 0
            },
            Mavs: {
                city: "Dallas",
                mascot: "MavsMan & Champ",
                champsWon: 1
            },
            Pistons: {
                city: "Detroit",
                mascot: "Hooper the Horse",
                champsWon: 3
            }
        }
    }
    // console.log(theSpurs.otherNBATeams.Mavs);
// console.log(theSpurs.playerInfo[0].age);
// console.log(theSpurs);
// TODO: using above nested object, log the mascot of the "otherNBATeams", change "manu's" name
//  from "manu" to "Ginobli", print out the 3rd element in the 'players' array, add another
//  'otherNBATeam' team object.
    console.log(theSpurs.otherNBATeams.Jazz.mascot);
    console.log(theSpurs.otherNBATeams.Mavs.mascot);
    console.log(theSpurs.otherNBATeams.Pistons.mascot);

theSpurs.playerInfo[1].name = "Ginobli";
    console.log(theSpurs.playerInfo[1]);

    console.log(theSpurs.players[3].toUpperCase() +"!!!!");

  theSpurs.otherNBATeams['Rockets'] = {
      city: "Houston",
      mascot: "Clutch the Bear",
      champsWon: 2,
  };
    console.log(theSpurs.otherNBATeams.Rockets);
    console.log(theSpurs.otherNBATeams)




        /** Mini Exercises */
    /*  TODO: Create a zoo object that contains basic info about the zoo (name, city,
          isOpen, ranking, yearOpened), as
          well as, information about at least 5 different animals (think nested objects). For each
          Each animal must contain 3 identifiers (examples: hasFur, isMammal, animalSound, canFly,
           livingPlace). Each animal must also contain a method that returns the sound of that
            animal using the THIS keyword.
           hint: Each animal should have at least 5 properties (one of them being animalSound);
    */

var zoo = {
    name: "Houston Zoo",
    city: "Houston",
    isOpen: true,
    ranking: "10th",
    yearOpened: 1922,
    animals: [
        {
            name: 'Panda',
            hasFur: true,
            isMammal: true,
            canFly: false,
            animalSound: "grrrr",
            hearPandaSound: function() {
                return this.animalSound;
            }
        },
        {
            name: 'Cougar',
            hasFur: true,
            isMammal: true,
            canFly: false,
            animalSound: "Rawr xD",
            hearCougarSound: function() {
                return this.animalSound;
            }
        },
        {
            name: 'American Alligator',
            hasFur: false,
            isMammal: false,
            canFly: false,
            animalSound: "grrrr",
            hearAlligatorSound: function() {
                return this.animalSound;
            }
        },
        {
            name: 'Bald Eagle',
            hasFur: false,
            isMammal: false,
            canFly: true,
            animalSound: "squaaaaa",
            hearEagleSound: function() {
                return this.animalSound;
            }
        },
        {
            name: 'Amazon Milk Frog',
            hasFur: false,
            isMammal: false,
            canFly: false,
            animalSound: "Ribbit",
            hearFrogSound: function() {
                return this.animalSound;
            }
        }

    ]
}
    console.log(zoo.animals[0].hearPandaSound());
    console.log(zoo.animals[1].hearCougarSound());
    console.log(zoo.animals[2].hearAlligatorSound());
    console.log(zoo.animals[3].hearEagleSound());
    console.log(zoo.animals[4].hearFrogSound());

})()




