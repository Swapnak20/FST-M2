const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
   host: '0.0.0.0',
   port: 38887
});
