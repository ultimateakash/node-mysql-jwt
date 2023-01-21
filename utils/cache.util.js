const Keyv = require('keyv'); 
const keyv = new Keyv();

exports.set = (key, value, ttl = 0) => keyv.set(key, value, ttl);

exports.get = (key) => keyv.get(key); 

exports.del = (key) => keyv.delete(key);