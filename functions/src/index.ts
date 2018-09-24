'use strict';


import * as functions from 'firebase-functions';
const admin = require('firebase-admin');
const serviceAccount = require('./../fireplay-admin.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fireplay-3d064.firebaseio.com"
});

const cors = require("cors");
const express = require("express");

/* Express with CORS */
const app = express();
app.use(cors({ origin: true }));

app.get("/helloWorld",  (request, response) => {
  response.json({timeOnServer: Date.now()});
  response.end();
});

app.post("/echo", (request, response) => {
  const original = request.body.text;
  const key = admin.database().ref('/messages').push({text: original, timestamp: admin.database.ServerValue.TIMESTAMP}).key;
  response.json({'key': key});
  response.end();
});

const api = functions.https.onRequest(app);

module.exports = {
  api
};
