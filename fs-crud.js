const fs = require('fs');
const http = require('http');
const port = 9000;
const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.end("<h1> Performing File Handling...!!! </h1>");
    }
    else if(req.url == '/createfile'){
        if(fs.existsSync("neosoft.txt")){
            res.end("<h1> File Is Already Created...!!! </h1>");
        }
        else {
            fs.writeFile("neosoft.txt", "Welcome To NeoSOFT Technologies...!!!", (err) => {
                if (err) throw err;
                res.end("<h1 > File Is Created Successfully...!!! </h1>");
            })
        }
    }
    else if(req.url == '/readfile') {
        if(fs.existsSync('neosoft.txt')){
            let data = fs.readFileSync("neosoft.txt");
            res.end(data.toString());
        }
        else {
            res.end("<h1> File Is Not Exist...!!! </h1>");
        }
    }
    else if(req.url == '/appendfile'){
        if(fs.existsSync('neosoft.txt')){
            fs.appendFile("neosoft.txt", "Next Text Write Here...!!!", (err) => {
                if(err) throw err;
                else res.end("<h1> The File Is Updated Successfully...!!! </h1>");
            })
        }
        else {
            res.end("<h1> File Is Not Exist...!!! </h1>");
        }
    }
    else if(req.url == '/deletefile'){
        if(fs.existsSync('neosoft.txt')){
            fs.unlink('neosoft.txt', err => {
                if (err) throw err;
                else res.end("<h1> File Is Deleted Successfully...!!! </h1>");
            });
        }
        else {
            res.end("<h1> File Is Not Exist...!!! </h1>");
        }
    }
    else {
        res.end("<h1> Invalid Page  </h1>");
    }
})

server.listen(port, (err) => {
    if(err) throw err;
    console.log(`Server is work on ${port}`);
})
