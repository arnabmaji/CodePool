const express = require('express');

var router = express.Router()

var map = {};

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/error', (req, res) => {
    res.render('error');
});

router.post('/view', (req, res) => {
    var documentId = req.body.documentId;  // get doc id from body
    res.redirect('view/' + documentId);  // redirect to requested page
});

router.get('/view/:id', (req, res) => {
    var documentId = req.params.id;
    var doc = map[documentId];  // extract doc id from map

    if (doc) {  // if doc is available redirect to editor
        res.render('view', {
            document_id: documentId,
            document: doc
        });
    } else {  // redirect to error page
        res.redirect('/error');
    }
});


router.get('/editor', (req, res) => {
    res.render('editor');
});

router.post('/create', (req, res) => {
    var documentId = req.body.documentId;
    var document = req.body.document;

    if (map[documentId]) {
        res.send({
            success: false
        });
    } else {
        map[documentId] = document;

        res.send({
            success: true
        });
    }
});


module.exports = router;