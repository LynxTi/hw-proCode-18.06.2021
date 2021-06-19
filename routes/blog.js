const express = require('express');
const router = express.Router();

const articles = [
    {id: '1' ,nameBook: "Сказания Меекханского пограничья", bookAuthor: "Venger", userRating: "Мега крутое (лайтовое) дарк фентези!"},
    {id: '2' ,nameBook: "Пороховй маг", bookAuthor: "Брайан Макклеллан", userRating: "Очень не плохо (Стимпанк)"},
    {id: '3' ,nameBook: "Архив буресвета", bookAuthor: "Сандерсон", userRating: "Крутая штука! (фентези)"},
    {id: '4' ,nameBook: "пробуждение Левиафана", bookAuthor: "ДЖЕЙМС КОРИ", userRating: "Крутая фантастика"}
];

router.get('/list', (req, res) => {
    res.json({
        status: 'ok',
        rezalt: {
            list: articles
        }
    })
});

// router.get('/list/:id', (req, res) => {
//     const { id } = req.params;

//     const article = articles.find( val => val.id === id);

//     if (!article) {
//         res.json({
//             status: 'not exist'
//         });
//         return;
//     }

//     res.json({
//         status: 'ok', 
//         rezalt: {article}
//     })
// });

module.exports = router;