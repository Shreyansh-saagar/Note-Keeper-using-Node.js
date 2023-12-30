/**
 * The `appendNote` function allows the user to enter a note name and content, and appends the content
 * to the specified note file.
 */
import * as rl from './readline.js';
import * as fs from 'fs';

export function appendNote(){
    rl.interface1.question("Enter note name with extension (e.g. file.txt) ->  " , (noteName)=>{
        rl.interface1.question("Feed your note ->  ",(noteFeed)=>{
            try {
                fs.appendFileSync(noteName,`\n${noteFeed}`)
                console.log("Note Updated");
            } catch (error) {
                console.log("Error occured while creating note");
            }
        } )
    })
}