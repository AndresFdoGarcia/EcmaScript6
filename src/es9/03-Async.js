async function* otraf(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = otraf();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');

async function nombres (array){
    for await ( let value of array){
        console.log(value);
    }
}

const names = nombres(['Andres','Sara','Raul']);
console.log('After');