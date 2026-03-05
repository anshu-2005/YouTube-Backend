// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
    
// </head>
// <body>
//     <script src="script.js"></script>
// </body>
// </html> --></head>
// forEach
// var arr = [1, 2, 3, 4];
// arr.forEach(function(val){
//     console.log(val+ " hello");
// }

// )

// map
// var arr = [1, 2, 3, 4];

// var newarr = arr.map(function(val){
//     return val * 5;
    
// })
// console.log(newarr);
// to create new array

//filter
// var arr = [1, 2, 3, 4];
// var newarr = arr.filter(function(val){
//     if(val >= 3) {
//         return true;
//         }
//         else{
//             return false;
//         }
// })
// console.log(newarr);

// var arr = [1, 2, 2 , 3, 3, 4];

// var ans = arr.find(function(val){
//     if(val == 2){
//         return val;
//     }
    
// })

// console.log(ans);


// indexOf
// var arr = [1, 2, 3, 4, 5];

// var ans = arr.indexOf(2)
// console.log(ans);
  

//Object

// are key value pairs

// var obj = {
//     name :"harsh" ,
//     age : 35 
         
// }
// Object.freeze(obj);// ye kuch change nhi krne dega
// obj.age = 25;// isse age change kr sakte h 

//conselo me
//obj['name']
//obj.name


// function abcd(){
//     return 12;  
// }
// var ans = abcd();



// async await

// async function abcd(){
// var blob = await fetch(`https://randomuser.me/api/`);
// var ans = await blob.json();
// console.log(ans.results[0].name);

// }
// abcd();
//line by line code chale isey kehte h synchronous
// jo bhi code asyc nature ka ho, usye side stack me bhej do and agle code ko chalao jo bhi sync nature ka ho jab bhi sara sync code chal jay (main stack empty ho jay ) tab chack kro async code complete huaa ya nhi agr complete huaa ho to usye main stack me lao and chala do

