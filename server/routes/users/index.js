const express = require('express');
const router = express.Router();
// const URL = require('url');
const User = require('../.././database/models/User');


router.route('/')
    .get((req, res) => {

        return new req.database.User().fetchAll()
            .then((users) => {
                return res.json(users);
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(500);
            });
    })
// .post((req, res) => {
//     const username = req.body.username;
//     return new req.database.User({ username }).save()
//         .then((user) => {
//             return res.json({ success: true });
//         })
//         .catch((err) => {
//             console.log(err);
//             res.sendStatus(500);
//         });
// });

module.exports = router;
