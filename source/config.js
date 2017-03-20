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

module.exports = {
    SERVER_PORT: 8080,
    MODULES: [
        'home'
    ],
    setupModules: function(server) {
        // Static files shared among modules
        server.use('/static', express.static('./common'));
        // Set views and static directories in each module as a
        // source for these types of resources and create routers
        server.set('views', this.MODULES.map((mod) => './' + mod + '/views'));
        this.MODULES.forEach((mod) => {
            server.use(
                '/' + mod + '_static',
                express.static('./' + mod + '/static'));
            server.use(require('./' + mod + '/router'));
        });
    }
};

