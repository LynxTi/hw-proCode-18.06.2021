const epxress = require('express');
const router = epxress.Router();

router.get('/', (req, res) => {
    res.render('startPage');
})

module.exports = router;
