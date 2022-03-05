sayHello = name => console.log('Hello', name);

function sayHello(name) {
    console.log('Hello', name);
  }

sayHello("Steve")

volume=(l,w=3,h=4) => console.log(l*w*h);

/*
function volume(l,w,h){
    if (w=== undefined))
    w=3;
    if (h===undefined)
    h=4;
    return l*w*h;
}
*/

volume(2)

function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous * current;
    });
  }

console.log(sum(2,3,4))