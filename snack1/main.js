const invitatesNames = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

const invitateDescription = invitatesNames.map((invitate , index) => {
    return { nome: invitate, posto: index + 1 , tavolo: 'Tavolo Vip'}
})

console.log(invitateDescription);