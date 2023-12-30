/**
 * The `readNote` function reads the contents of a file specified by the user and prints it to the
 * console.
 */
import * as rl from './readline.js';
import * as fs from 'fs';

export function readNote(){
    rl.interface1.question("Enter your note name with extension (e.g. file.txt) ->  ",(noteName)=>{
        const buffer = fs.readFileSync(noteName, 'utf-8');
        console.log(buffer);
    })
}