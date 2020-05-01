const chalk=require('chalk');
const fs=require('fs')
const addnote=(title,body)=>{
    const notes=loadnotes()
    const duplicateNote=notes.find((note)=>note.title===title)
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        savenotes(notes)
        console.log(chalk.bgGreen('New Note Added!'))
    }else{
        console.log(chalk.bgRed('Note title taken!'))
    }   
}
const savenotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadnotes=()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json');
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON)
    }catch(e){
        return[]
    }
}

const removeNote=(title)=>{
    const notes=loadnotes()
    const notestobekept=notes.filter((note)=>note.title!==title)
    if(notestobekept.length < notes.length){
        savenotes(notestobekept)
        console.log(chalk.bgGreen('Note removed!'))
    }else{
        console.log(chalk.bgRed('No Note Found!'))
    }
}
const listnotes=()=>{
    console.log(chalk.bgBlueBright(getnotes()))
    const notes=loadnotes()
    notes.forEach(note => {console.log(chalk.bgGreenBright(note.title+","+note.body))
    });
}
const readNote=(title)=>{
    const notes=loadnotes()
    const foundNote=notes.find((note)=>note.title===title);
    if(foundNote){
        console.log(chalk.bgGreenBright(foundNote.title+':'+foundNote.body))
    }
    else{
        console.log(chalk.bgRedBright('No Match Found!'))
    }
}
const getnotes=()=>{return 'My notes..'}
module.exports={
    getnotes: getnotes,
    addnote: addnote,
    removeNote:removeNote,
    listnotes: listnotes,
    readNote: readNote
}