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
settings.SERVER_PORT = 8080;

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
settings.rootModule = 'home';

