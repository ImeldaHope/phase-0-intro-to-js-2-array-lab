// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newCats = [...cats,name];
    return newCats;
}

function prependCat(name) {
    const copyCats = [name, ...cats];
    return copyCats;
}

function removeLastCat() {
    const lastCat = cats.slice(0,-1);
    return lastCat;
}

function removeFirstCat() {
    const firstCat = cats.slice(1);
    return firstCat;
}