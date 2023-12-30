/**
 * The `deleteNote` function prompts the user to enter the name of a note file and then deletes that
 * file.
 */
import * as rl from './readline.js'
import * as fs from 'fs';

export function deleteNote(){
    rl.interface1.question("Enter your note name with extension (e.g. file.txt) ->  ",(noteName)=>{
        fs.unlinkSync(noteName)
        console.log('Note Deleted');
    })
}