const teams = [
{
    name: 'milan', 
    'punti fatti': 0,
    'falli subiti': 0
},
{
    name: 'inter', 
    'punti fatti': 0,
    'falli subiti': 0
},
{
    name: 'juve', 
    'punti fatti': 0,
    'falli subiti': 0
},
{
    name: 'roma', 
    'punti fatti': 0,
    'falli subiti': 0
},
{
    name: 'palermo', 
    'punti fatti': 0,
    'falli subiti': 0
},
{
    name: 'reggina', 
    'punti fatti': 0,
    'falli subiti': 0
},
{
    name: 'como', 
    'punti fatti': 0,
    'falli subiti': 0
},
{
    name: 'sassuolo', 
    'punti fatti': 0,
    'falli subiti': 0
},
{
    name: 'cagliari', 
    'punti fatti': 0,
    'falli subiti': 0
},
]

 teams.forEach((squadra) => {
    squadra['punti fatti'] = Math.floor(Math.random() * 100);
    squadra['falli subiti'] = Math.floor(Math.random() * 100);
 
})
 
console.log(teams)

