// configure our dependencies 
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

// overcome cors limitations
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions) );

// parse requests of JSON or URLEncoded types
app.use(express.json()  );
app.use(express.urlencoded({extended: true}) );

// routing 
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Video Tutorials API."} );
}   );

// start server & listen for requests
const PORT = process.env.PORT || 8088; 
app.listen(PORT, ()=> {
    console.log(`Our app server is now running on port ${PORT}.  Enjoy! `  );
}    );
