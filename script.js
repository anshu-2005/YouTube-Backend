const fs = require('fs');

// fs.writeFile("hey.txt", "Hello kese ho ?", function(err){
//     if(err)console.error(err);

//     else console.log("done");
// })


// const fs = require('fs');

// fs.appendFile("hey.txt", "mai thi tum btao ?", function(err){
//     if(err)console.error(err);

//     else console.log("done");
// })



// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.copyFile("hello.txt","./copy/copy.txt",function(err){
//     if(err)console.error(err.message);//.message se error pata chalege exact msg me 
//     else console.log("done");
    
// })

// fs.unlink("hello.txt", function(err){
//     if(err)console.error(err);
//     else console.log("done");
// })

fs.rm("./copy", {recursive: true},function(err){
    if(err) console.error(err);
    else console.log("removed folder");
})