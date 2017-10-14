/*
 * Wire
 * Copyright (C) 2017 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

const b64 = require('base64-arraybuffer');
const crypto = require('crypto');
const fs = require('fs');
const https = require('https');
const path = require('path');
const protobuf = require('protocol-buffers');
const uuidV1 = require('uuid/v1');

const BotInstance = require('../lib/bot_instance');
const HttpsClient = require('../lib/https_client');
const Otr = require('../lib/otr_manager');
const util = require('../lib/util');

/*
class Service {
  constructor(options, cb) {
    this.bots = {};
    this.cb = cb;
    this.port = options.port;
    this.auth = options.auth;
    this.storePath = options.storePath;
    this.messages = protobuf(fs.readFileSync(path.resolve(__dirname, './messages.proto')));

    https.createServer({ key: fs.readFileSync(options.key),

      cert: fs.readFileSync(options.cert) }, (req, res) => {
*/
  console.log("t_fileservice: start");
  fs.readFileSync("server.crt");
  console.log("aktiv");
  
