const express = require('express');
const cors = require('cors')

const port = process.env.PORT || 8010;

const app = express();

const router = require('./src/server/routes/index')

//Static
app.use(express.static(__dirname + '/dist/'));

//DB
require('./src/server/config/db')

//Config
app.use(cors());
app.use(express.json())

//Router
app.use('/', router)


//Output
app.listen(port, () => {
console.log(`Server on port ${port}`);
});

