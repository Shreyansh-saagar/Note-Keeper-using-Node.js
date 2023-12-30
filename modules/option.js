import * as rl from './readline.js';
export function option(){
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
}
