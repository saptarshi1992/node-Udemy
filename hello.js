
const fs = require('fs')
//fs.writeFileSync('notes.txt','test data enter into file')
fs.appendFileSync('notes.txt','  text1 enter here',(err)=>{
    if(err) throw err
    console.log('data is appended to file')
})