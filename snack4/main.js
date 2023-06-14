const teams = [
{
    name: 'milan', 
    points: 0,
    fouls: 0
},
{
    name: 'inter', 
    points: 0,
    fouls: 0
},
{
    name: 'juve', 
    points: 0,
    fouls: 0
},
{
    name: 'roma', 
    points: 0,
    fouls: 0
},
{
    name: 'palermo', 
    points: 0,
    fouls: 0
},
{
    name: 'reggina', 
    points: 0,
    fouls: 0
},
{
    name: 'como', 
    points: 0,
    fouls: 0
},
{
    name: 'sassuolo', 
    points: 0,
    fouls: 0
},
{
    name: 'cagliari', 
    points: 0,
    fouls: 0
},
]

/* let {points, fouls}= teams;

points = Math.floor(Math.random() * 100);
fouls = Math.floor(Math.random() * 100); */


 teams.forEach(({points, fouls}) => {
    points = Math.floor(Math.random() * 100);
    fouls = Math.floor(Math.random() * 100);

})
 
console.log(teams)
