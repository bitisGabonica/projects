var user= prompt().toUpperCase(); //replace prompt method with altering html on the page, using innerHTML property
//leaving in this empty structure so I remember how switches work, etc.


switch(user){ //begins switch for var user prompt data
    case '':
        var x= prompt('').toUpperCase();
        if (x==='YES'){ //maybe replace with if X button is selected, or allow user to type data into a text area on page
            if (Math.random() > 0.5) { //just in case i need to remember how math.random works
                console.log('');
            } //end if
            else{
                console.log('');
            }; //ends inner if/else function by ending else
        } //end main if
        else {
            console.log('');
        }; //ends main if/else function by ending else
         break; //this ends a particular switch.


         default: //if the user doesn't enter a defined option, it defaults to this. How would that work in the case of buttons?
         console.log('');
         break; //ends default switch
 }; //ends switch sequence
     
