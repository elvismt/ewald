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
let settings = module.exports;

/*
 * Port in which the server should bind and listen.
 */
settings.SERVICE_PORT = 8080;

/*
 * MongoDB server URL
 */
settings.MONGODB_BASEURL = "mongodb://localhost:27017/";

/*
 * Mongo database collection for sessions
 */
settings.MONGODB_SESSIONS = 'sessions';

/*
 * Names of the modules the server should set up.
 * Each name should match a subdirectory in this
 * source tree
 */
settings.MODULE_NAMES = [
    'home',
    'samples'
];

/*
 * Name of the module to be aliased to the / route
 */
settings.ROOT_MODULE = 'home';

/*
 * Random string for sessions module
 */
settings.SESSIONS_SECRET = 'D6395G58JB6GF8D0E36F5CGSL';

/*
 * Random string for sessions cookie name
 */
settings.SESSIONS_NAME = '605NDG395NFG30KYHTS795K6';

