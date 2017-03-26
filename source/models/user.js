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
const settings = require('./settings');
const DB = require('../db.js');


class Model {
    constructor(args) {
        __config__(args, {
            attrs: []
        });
    }

    __config__(args, defaults) {
        for (let i in defaults) {
            this[i] = defaults[i];
        }
        if (args) {
            for (let i in args) {
                this[i] = args[i];
            }
        }
        // Add some metadata to the model's attributes
        let rawAttrs = this.attrs;
        this.attrs = [];
        for (let att of rawAttrs) {
            this.attrs.push({
                name: att.name,
                saved: false
            });
        }
    }

    save() {
        let changedAttrs = [];
        for (let att of this.attrs) {
            if (att.saved === false) {
                changedAttrs.push(att);
            }
        }
        updateDatabase(changedAttrs);
    }
}


