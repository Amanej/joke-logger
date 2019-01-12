const jokes = require('./jokes.json');

const app = {};
app.getAll = () => {
    return jokes
}
module.exports = app;