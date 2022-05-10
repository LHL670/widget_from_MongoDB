const express = require('express');
const router = express.Router();
const CGUscholarProfile = require('../models/cguscholar')

// get a list of cguscholar from the db
router.get('/cguscholar', function (req, res, next) {
    CGUscholarProfile.find({}).then(function (cguscholar) {
        res.send(cguscholar)
    }).catch(next)
});
// get a specific cguscholar from the db
router.get('/cguscholar/:id', function (req, res, next) {
    CGUscholarProfile.findOne({ _id: req.params.id }).then(function (cguscholar) {
        res.send(cguscholar)
    }).catch(next)
});

// add a new cguscholar to the db
router.post('/cguscholar', function (req, res, next) {
    CGUscholarProfile.create(req.body).then(function (cguscholar) {
        res.send(cguscholar)
    }).catch(next)
});

// update a cguscholar in the db
router.put('/cguscholar/:id', function (req, res, next) {
    CGUscholarProfile.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function (cguscholar) {
        CGUscholarProfile.findOne({ _id: req.params.id }).then(function (cguscholar) {
            res.send(cguscholar);
        })

    }).catch(next);
});

// delete a cguscholar from the db
router.delete('/cguscholar/:id', function (req, res, next) {
    CGUscholarProfile.findByIdAndRemove({ _id: req.params.id }).then(function (cguscholar) {
        res.send(cguscholar);
    }).catch(next);
});

module.exports = router;