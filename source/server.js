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
const bodyParser = require('body-parser');
const settings = require('./settings');
const server = module.exports = express();

// place global middleware
server.use('/static', express.static('./static'));
server.use(bodyParser.json());
server.set('view engine', 'pug');
server.set('views', './views');

// set up modules
settings.MODULE_NAMES.forEach((modname) => {
    // include module router
   server.use(`/${modname}`, require(`./${modname}/router`));
});

if (settings.rootModule) {
    server.use('/', (req, res) => {
        res.redirect(settings.rootModule);
    });
}

// and... let's play the game
server.listen(settings.SERVER_PORT);

