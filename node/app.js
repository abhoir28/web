var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Welcome");
});

app.post('/user',  (req, res) => {

    console.log("Post Called ...");

    console.log(JSON.stringify(req.body));

    var json1 = req.body;

    var msg = "Welcome " +json1.uname + " " +json1.lname;

    res.send({
        "msg": msg
    });

});

var server = app.listen(9000, () => {

    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});