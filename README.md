# Notes-app
A simple file system based note taking app . 
This app uses npm modules such as yargs module to handle the command line options and chalk module to display the operational messages in a more readable format.

Make sure you run the "npm init" command to install the node_modules required to run the app.

COMMANDS:

1.To add a note,
      node app.js add --title="note title" --title="note body"
2.To remove a note,
      node app.js remove --title="note title"
3.To retrieve a particular note,
      node app.js read --title="note title"
4.To retrieve all the notes,
      node app.js list
