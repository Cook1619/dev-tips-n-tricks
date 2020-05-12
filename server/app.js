const express =  require("express");
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('Testing'));

app.listen(port, () => console.log(`Application running on at http:localhost:${port}`));