// ~~~~~~ 1 ~~~~~~
// console.log(hello);
// // var hello = 'world';
// var hello = 'world';
// console.log(hello);

//~~~~~~ 2 ~~~~~~
// var needle = 'haystack';
// test();
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }
// var needle = 'haystack';
// var needle = 'magnet';
// test();
// function test() {
//     console.log(needle);
// }

// //~~~~~~ 3 ~~~~~~
// // var brendan = 'super cool';
// // function print() {
// //     brendan = 'only okay';
// //     console.log(brendan);
// // }
// // console.log(brendan);
// var brendan = 'super cool';
// console.log(brendan);

//~~~~~~ 4 ~~~~~~
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// var food = 'chicken';
// console.log(food); // 'chicken'
// eat();
// food = 'half-chicken';
// console.log(food); // 'half-chicken'

//~~~~~~ 5 ~~~~~~
// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// Error, 'mean' cannot be invoked

//~~~~~~ 6 ~~~~~~
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock"; // rock
//     console.log(genre);
//     var genre = "r&b"; // r&b
//     console.log(genre);
// }
// console.log(genre); //disco
// will print out rock, r&b, disco

//~~~~~~ 7 ~~~~~~
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// will print 'san jose', 'seattle', 'burbank', 'san jose'

// ~~~~~~ 8 ~~~~~~
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// }
