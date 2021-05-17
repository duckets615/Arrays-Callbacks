import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data
 note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
// console.log(fifaData.filter(obj => obj.Year === 2014 && obj.Stage === 'Final')[0]["Home Team Name"]);
  
//(b) Away Team name for 2014 world cup final
// console.log(fifaData.filter(obj => obj.Year === 2014 && obj.Stage === 'Final')[0]["Away Team Name"]);

//(c) Home Team goals for 2014 world cup final
// console.log(fifaData.filter(obj => obj.Year === 2014 && obj.Stage === 'Final')[0]["Home Team Goals"]);

//(d) Away Team goals for 2014 world cup final
// console.log(fifaData.filter(obj => obj.Year === 2014 && obj.Stage === 'Final')[0]["Away Team Goals"]);

//(e) Winner of 2014 world cup final */
// let game = fifaData.filter(obj => obj.Year === 2014 && obj.Stage === 'Final')[0];
// console.log(game["Home Team Goals"] > game["Away Team Goals"] ? game["Home Team Name"] : game["Away Team Name"])

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

const getFinals = ar => ar.filter(obj => obj.Stage === 'Final')




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

const getYears = ar => getFinals(ar).map(obj => obj["Year"]);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

const getWinner = obj => obj["Home Team Goals"] > obj["Away Team Goals"] ? obj["Home Team Name"] : obj["Away Team Name"];
const getWinners = ar => getFinals(ar).map(obj => getWinner(obj));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(ar) {
    let array = [];
    let year = getYears(ar);
    let country = getWinners(ar);
    for (let i = 0; i < year.length; i++) {
      array.push(`In ${year[i]}, ${country[i]} won the world cup!`);
    }
    return array
  }

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(ar) {
    let goals = getFinals(ar).map(obj => obj["Home Team Goals"] + obj["Away Team Goals"]);
    return (goals.reduce((acc,cur) => acc + cur) / goals.length).toFixed(2)
  }

/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

// function getCountryWins(ar, init) {
//     let wins = 0;
//     getWinners(ar).forEach(team => wins += team.substring(0,3).toUpperCase() === init ? 1 : 0);
//     return wins;
//   }
  const getCountryWins = (ar, init) => getWinners(ar).filter(team => team.substring(0,3).toUpperCase() === init).length



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
   Write a function called getGoals() that accepts a parameter `data` and returns the team with the most 
//  goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {    
  let finals = getFinals(data);
  let obj = {};
  let max = 0
  let most = '';
  
  finals.forEach(game => {
    let homeTeam = game["Home Team Name"];
    let awayTeam = game["Away Team Name"];
    obj[homeTeam] === undefined ? obj[homeTeam] = 0 : obj[homeTeam] += game["Home Team Goals"];
    obj[awayTeam] === undefined ? obj[awayTeam] = 0 : obj[awayTeam] += game["Away Team Goals"];
  })

  for (let k in obj) {
    if (obj[k] > max) {
      max = obj[k];
      most = k;
    }
  }
  return most
}




/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
