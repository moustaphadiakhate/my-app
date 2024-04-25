const express = require('express');
const path = require('path');
const app = express();


app.use((req, res, next) => {
    const logData = {
        method: req.method,
        url: req.url,
        timestamp: new Date().toISOString()
    };
    console.log(JSON.stringify(logData));
    next();
});

app.use(express.static(__dirname + '/dist/my-app'));

app.get('/*', function(req,res) {

    res.sendFile(path.join(__dirname+'/dist/my-app/index.html'));
});

app.listen(process.env.PORT || 8080);
