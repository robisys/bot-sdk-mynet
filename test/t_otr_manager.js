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
      const msg = data.data.text; // user's message
      this.bots[botID].otr.decrypt(data.from, data.data.sender, msg)
    
 // bot among the user_ids, delete any saved data
        de.otr.encryptForDevices(this.bots[botID].devices,
      
                    p.push(this.bots[botID].otr.encrypt(i, j,
                      b64.decode(pResponse[i][j].key), util.toArrayBuffer(pb)));
        

          otr: new Otr(this.storePath, botID),
          httpsClient,
          botInstance: new BotInstance(botID, this),
        };
        this.getDevices(botID, (devices, status) => {
          console.log(`getDevices response: ${JSON.stringify(devices)}`);
          if (status === 412 && Service.validateDevices(devices)) {
            this.bots[botID].devices = devices.missing;
            console.log('got devices!');
            this.bots[botID].otr.initWithNoKeys()
              .then(() => {
                resolve(true);
              });
          }
        });
      } catch (err) {
        resolve(false);
      }
    });
  }

 
*/

const storePath = "mypath";
const botID = "botid" ;
const numberOfKeys  = 2 ;
const userId = "23456";
const clientId = "1234";
var cypher = ["cccc","ggggg"] ;
const preKey = "676";
var data = ["aa","bbb"];

    
      const otr = new Otr(storePath,botID);
      
      console.log("-initWithNoKey");
      otr.initWithNoKeys();
      console.log("-number");
      otr.init(numberOfKeys);
      console.log("-encrypt");
      otr.encrypt(userId,clientId,preKey,data);
      console.log("data: ",data);
      console.log("-decrypt");
      otr.decrypt(userId,clientId,cypher);
      console.log("cypher: ", cypher);
      
      otr.encrypt(userId,clientId,preKey,data);
      console.log("data: ",data);
      
      otr.decrypt(userId,clientId,cypher);
      console.log("cypher: ", cypher);
      
      
      
//    /*
        (preKeys) => {  resolve([otr, preKeys]); }

// */
