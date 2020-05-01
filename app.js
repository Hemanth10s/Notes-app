const chalk=require('chalk');
const yargs=require('yargs');
const notes= require('./notes.js');
//customize yargs version
yargs.version('1.1.0');
//create a add command
yargs.command({
    command:'add',
    describe:'adding a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body of the note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
      notes.addnote(argv.title,argv.body)  
    }
});

//create a remove command
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
        
    }
});

//create a list command
yargs.command({
    command:'list',
    describe:'listing your notes',
    handler(){
        notes.listnotes()
    }
});


//create a read command
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
        
    }
});

yargs.parse();