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

const https = require('follow-redirects').https;

token= " ";

httpsclient =  new HttpsClient(token) ;

/*

module.exports = class HttpsClient {
  constructor(token) {
    this.token = token;
  }
*/

  httpsclient.onError(req, e, cb) ;
  

  httpsclient.sendRequest(method, path, data, additionalHeaders, cb); 
  
  httpsclient.sendMessage(postData, ignoreMissing, cb) ;
  
  httpsclient.getClients(postData, cb) ;
  

  httpsclient.getPrekeys(forUsersAndDevices, cb); 
  
  httpsclient.getAsset(assetID, assetToken, cb) ;
  

  httpsclient.uploadAsset(assetData, cb) ;
  