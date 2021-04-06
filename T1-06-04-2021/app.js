// GLOBAL VARIABLES

// __dirname - path to current directory
// eg:
 console.log("Current Directory is  "+__dirname);
// __filename - filename
//eg:
console.log("Current file is  "+__filename);
// require - funtion to use modules(CommonJS)
// module - info about current module (file)
// process - info about env where the progress is being executed


// set interval is used to execute any funtion after a time interval
// in this below code it will execute this code in nevery 1000 ms
setInterval(function(){
    console.log("Game Start");
},1000);