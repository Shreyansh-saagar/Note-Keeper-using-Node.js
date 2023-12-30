/**
 * The `createNote` function allows the user to create a note by providing a name and content, and
 * saves it as a file.
 */
import * as rl from './readline.js';
import * as fs from 'fs';

export function createNote(){
    rl.interface1.question("Enter note name with extension (e.g. file.txt) ->  " , (noteName)=>{
        rl.interface1.question("Feed your note ->  ",(noteFeed)=>{
            try {
                fs.writeFileSync(noteName,noteFeed)
                console.log("Note Created");
            } catch (error) {
                console.log("Error occured while creating note");
            }
        } )
    })
}