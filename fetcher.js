const request = require('request');
const args = process.argv.slice(2);
const fs = require('fs');
request(args[0],(error,response,body) => {
  console.log('error:',error);
  console.log('statusCode:', response && response.statusCode);
  fs.writeFile(args[1],body,(err) => {
    if (err)
    console.log(err);
  else {
    fs.stat(args[1],(err,stats) => {
      if(err) {
        console.error(err)
        return
      }
      console.log("File written successfully");
      console.log(`Downloaded and saved ${stats.size} bytes to ${args[1]}`);
    })
  }
  });
}); 