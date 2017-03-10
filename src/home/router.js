/*
 * Copyright (C) 2017 Elvis Teixeira
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const express = require('express');
const path = require('path');
const app = require('../server.js');
const settings = require('../settings.js');
const router = module.exports = express.Router();
const mongo = require('mongodb').MongoClient;

router.get('/', function(req, res) {
    res.render(path.join(__dirname, 'templates/home.pug'), {
        title: 'home'
    });
});

router.get('/login', function(req, res) {
    res.render(path.join(__dirname, 'templates/login.pug'), {
        title: 'login'
    });
});

router.post('/login', function(req, res) {
    mongo.connect(settings.MONGO_URL, function(err, db) {
        if (err) throw err;
        console.log('Connected to db!');
    });
    res.status(200).send('hello');
});