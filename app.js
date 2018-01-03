const express = require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();

app.set('view engine', 'ejs');

//set up routes
app.use('/auth', authRoutes);

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(8080, () => console.log('server is running on port 8080'));