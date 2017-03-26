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

'use strict';
const express = require('express');
const helmet = require('helmet');
const sessions = require('express-session');
const MongoStore = require('connect-mongo')(sessions);
const bodyParser = require('body-parser');
const settings = require('./settings');
const DB = require('./db');
const server = module.exports = express();

// Place global middleware
server.use(helmet());
server.set('view engine', 'pug');
server.set('views', './views');
server.use('/static', express.static('./static'));
server.use(bodyParser.json());

// Set up sessions
DB.db(settings.MONGODB_SESSIONS, (err, dbConn) => {
    if (err) throw err;
    server.use(sessions({
        secret: settings.SESSIONS_SECRET,
        name: settings.SESSIONS_NAME,
        store: new MongoStore({ db: dbConn }),
        proxy: true,
        resave: true,
        saveUninitialized: true
    }));
});

// Set up modules
settings.MODULE_NAMES.forEach((modname) => {
   server.use(`/${modname}`, require(`./${modname}/router`));
});

// What module receives requests for '/'
if (settings.ROOT_MODULE) {
    server.use('/', (req, res) => {
        res.redirect(settings.ROOT_MODULE);
    });
}

// And... let's play the game
server.listen(settings.SERVICE_PORT);

