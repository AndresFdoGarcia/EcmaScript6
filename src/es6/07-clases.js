class User {};

//instancia de una clase
//const newUser = new User();

class user {
    // metodos
    gretting(){
        return 'Hello';
    }
};

const newUser = new user();
console.log(newUser.gretting());

//Constructor
class beta1 {
    constructor(){
        console.log('Nuevo usuario');
    }
    gretting(){
        return 'Hello';
    }
}
const gar = new beta1();
console.log(gar.gretting());

// this

class beta {
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    gretting(){
        return `${this.speak()} ${this.name}`;
    }
}
const ana = new beta('ANA');
console.log(ana.gretting());


// setters getters
class alfa{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return 'Hello';
    }
    gretting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const developer = new alfa('Andres',32);
console.log(developer.uAge);
console.log(developer.uAge = 20);