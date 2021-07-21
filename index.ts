// src/index.ts
const https = require('https');
const http = require('http');
const express = require('express');
var request = require('request-promise');
const fetch = require('node-fetch');
let base64 = require('base-64');
import Shopify, { ApiVersion, AuthQuery } from '@shopify/shopify-api';
require('dotenv').config();

const app = express();

const { API_KEY, API_SECRET_KEY, SCOPES, SHOP, HOST } = process.env;

https.get('https://' + API_KEY + ':' + API_SECRET_KEY + '@' + SHOP + '/admin/api/2021-07/products.json', (resp:any) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk:any) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err:any) => {
  console.log("Error: " + err.message);
});
app.listen(3000, () => {
  console.log('your app is now listening on port 3000');
});