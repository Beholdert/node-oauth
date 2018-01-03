const router = require('express').Router();

//Auth login
router.get('/login', (req, res) => {
    res.render('login');
});

//Auth logout
router.get('/logout', (req, res) => {
    res.send('logging out');
});

//Auth with Google
router.get('/google', (req, res) => {
    //handle with paassport
    res.send('logging in with google');
});

module.exports = router;