// function say(word){
//   console.log('Song: ' + word + '.')
// }
//
// function executer(someFunction, value){
//   someFunction(value);
// }
//
// executer(say, 'Hello World')
//
// function eat(food){
//   console.log('Song: ' + food + '.')
// }
//
// executer(eat, 'apple')

function executer(someFunction, value){
  someFunction(value);
}

executer(function(word){
  console.log('say: '+word)
}, 'Hello')

executer(function(food){
  console.log('放肆才叫青春 eating: ' + food)
}, 'banana')

executer(function(film){
  console.log('完美猫(北京-完美猫) seeing: ' + film)
}, 'h film.')
