function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['andres','Fernando','Adriana','Zaida']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
