/* The code is importing all the functions and variables from the specified modules. */
import * as create from './modules/createNote.js';
import * as append from './modules/addToNote.js';
import * as read from './modules/readNote.js';
import * as del from './modules/deleteNote.js';
import * as rl from './modules/readline.js' ;

/* The code is printing a welcome message and a list of options for the user to choose from. The
options include creating a new note, adding to a note, reading a note, and deleting a note. The
dashed lines are used to separate the sections for better readability. */
console.log('Welcome to Note Keeper');
console.log('-------------------------------------------------');
console.log('>> Options: ');
console.log("1. Create a new note");
console.log("2. Add to note");
console.log("3. Read a note");
console.log("4. Delete a note");
console.log('-------------------------------------------------');

/* The code is using the `rl.interface1.question` method to prompt the user to enter their option. The
method takes two arguments: the first argument is the question to be displayed to the user, and the
second argument is a callback function that will be executed when the user enters their option. */
rl.interface1.question("Enter your option ->  ",(opt)=>{
    if(opt === "1"){
        create.createNote();
    }else if(opt === "2"){
        append.appendNote();
    }else if(opt === "3"){
        read.readNote()
    }else if(opt === "4"){
        del.deleteNote()
    }
})