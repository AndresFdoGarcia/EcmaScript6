function newUser(name,age,country){
    var name = name || 'Andres';
    var age = age || 32;
    var country = country || 'Col';
    console.log(name,age,country);
}

newUser();
newUser('Adriana',50,'Col');

//ECMAscript6
function newAdmin(name='Andres',age=32,country='Col'){
    console.log(name,age,country);
}

newAdmin();
newAdmin('Zaida',52,'Col');