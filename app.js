const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('I am CLOUD!'));
=======
app.get('/', (req, res) => res.send('Cloud Computing AI is Cool!'));
>>>>>>> a02abc2362e3572d129828a448324a35248f5ee0

app.listen(port);
console.log(`App running on http://localhost:${port}`);
