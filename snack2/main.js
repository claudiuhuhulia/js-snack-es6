const students = [{
id : 213,
name : 'Marco della Rovere',
grades : 78
},
{
id : 110,
name : 'Paola Cortellessa',
grades : 96
},
{
id : 250,
name : 'Andrea Mantegna',
grades :  48
},
{
id : 145,
name : 'Gaia Borromini',
grades : 74
}, 
{
 id : 196 ,
 name : 'Luigi Grimaldello',
grades : 68
},
{
id : 102,
name : 'Piero della Francesca',
grades : 50
},
{
id : 120,
name : 'Francesca da Polenta',
grades : 84
},
]

console.log(students)

const admitted = students.filter((student) => {return student.grades > 70});

console.log(admitted)

const admittedid = students.filter((student) => {return student.grades > 70 && student.id > 120});

console.log(admittedid)

const uppercase = students.map((student) =>{
    return student.name.toUpperCase()
});


console.log(uppercase)

