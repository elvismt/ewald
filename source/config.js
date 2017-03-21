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
let config = module.exports;

/*
 * Port in which the server should bind and listen.
 */
config.SERVER_PORT = 8080;

/*
 * Names of the modules/subapps the server should set up.
 * Each name should match a subdirectory in the same
 * directory where this file is.
 */
config.MODULE_NAMES = [
    'home'
];

/*
 * Sets up the modules especified in config.MODULE_NAMES
 * and adds their router to the server workflow.
 */
config.setup = function(server) {
    this.MODULES = {};
    this.MODULE_NAMES.forEach((module_name) => {
        // this sub app is the module
        let module = express();
        // module level and common static files folder
        module.use('/static', express.static('./' + module_name + '/static'));
        module.use('/public', express.static('./common'));
        // module level views folder
        module.set('view engine', 'pug');
        module.set('views', ['./' + module_name + '/views']);
        // main router exported by the module
        module.use('/', require('./' + module_name + '/router'));
        // add the module to the server
        server.use('/' + module_name, module);
        // and keep track of the module object
        this.MODULES[module_name] = module;
    });
};

