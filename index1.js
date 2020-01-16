const express = require("express");
var session = require("express-session");
var bcrypt = require('bcrypt');
const app = express();
const port = 3000;

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);



// Access the session as req.session
app.get("/pass", async function(req, res, next) {
    var passRegister = await bcrypt.hash('hehe',10);
    var passLogin= await bcrypt.compare('hehe',passRegister);
    console.log(passLogin);
    res.send('hehe');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
