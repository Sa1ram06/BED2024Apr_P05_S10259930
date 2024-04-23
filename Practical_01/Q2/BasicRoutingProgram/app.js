const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
})

// Respond with Hello World! on the homepage:
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Respond with POST request on the homepage:
app.post('/', (req, res) => {
    res.send('Got a POST request');
});

// Respond with with PUT request to the /user route:
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
});

// Respond with DELETE request to the /user route:
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user');
});