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
 *   service.js
 */

const b64 = require('base64-arraybuffer');
const crypto = require('crypto');
const fs = require('fs');
const https = require('https');
const path = require('path');
const protobuf = require('protocol-buffers');
const uuidV1 = require('uuid/v1');

const BotInstance = require('./bot_instance');
const HttpsClient = require('./https_client');
const Otr = require('./otr_manager');
const util = require('./util');


    this.bots = {};
cb;
port;
auth;
storePath;
messages = protobuf(fs.readFileSync(path.resolve(__dirname, './messages.proto')));

    
    
 fs.readFileSync(options.key);
 fs.readFileSync(options.cert); 
 
 
  static sendResponse(res, code, data) 
  handleRequest(req, data, res) 
  checkAuthHeader(req) 
  createBot(req, data, res) 
  static validateCreateBotData(data) 
  static checkPropertyAndType(obj, prop, type) 
  static validateOrigin(origin) 
  static validateConversation(conversation) 
  static validateMembers(members) 
  handleMessages(req, data, res, botID) 
  handleMessagesImpl(req, data, res, botID) 
  static validateMessages(msg) 
  conversationMessageAdd(req, data, res, botID) 
  static validateConversationMessageAdd(data) 
  conversationMemberJoin(req, data, res, botID) 
  static validateConversationMemberJoinLeave(data) 
  conversationMemberLeave(req, data, res, botID) 
  conversationRename(req, data, res, botID) 
  getDevices(botID, cb) 
  static validateDevices(response) 
    // sends message
  sendMessage(botID, message, cb) 
  getAsset(botID, assetID, assetToken, decryptKey, sha256, cb) 
  uploadAsset(botID, data, cb) 
  sendConfirmation(botID, messageID, cb) 
  loadState(botID) 
  saveState(botID) 
  static createCryptoStuff(storePath, botID, numberOfKeys) 
  
module.exports = {
  createService(options, cb) {
    return new Service(options, cb);
  },
};
