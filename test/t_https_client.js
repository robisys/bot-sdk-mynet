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
 *  t_https_client.js 
 */

const path = require('path');
const HttpsClient = require('../lib/https_client');

token= "0515";

const httpsClient =  new HttpsClient(token) ;

 
postData = "";
ignoreMissing = "" ; 
assetID =  "" ;
assetToken =  "";
assetData = "";

 function cb(a,b) {   }
 
 httpsClient;
   

  //console.log("-sendMessage");
  //httpsClient.sendMessage(postData, ignoreMissing, cb) ;
  console.log("-getclients");
  httpsClient.getClients(postData, cb) ;  //funktioniert
  
  //console.log("-getPrefkeys");
  //httpsClient.getPrekeys(forUsersAndDevices, cb); 
  console.log("-getAsset");
  httpsClient.getAsset(assetID, assetToken, cb) ;  //funktioniert
  console.log("-uploadAsset");
  httpsClient.uploadAsset(assetData, cb) ;
  

console.log("erfolg");
