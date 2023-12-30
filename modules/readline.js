/**
 * The `deleteNote` function prompts the user to enter the name of a note file and then deletes that
 * file.
 */
/* The code is importing the `readline` module from the Node.js standard library and creating an
interface object named `interface1` using the `createInterface` method provided by the `readline`
module. */
import * as readline from 'readline' ;

export const interface1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});