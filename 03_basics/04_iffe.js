// Immediately Invoked Function Expressions (IIFE) is used to remove the pollutant of globle scope


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   //  ; used to end the iife 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('aman')