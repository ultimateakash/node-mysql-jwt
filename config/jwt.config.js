/*
*    ttl - JWT time to live(seconds or time units(https://github.com/vercel/ms))
*    ttl: 3600 // 1 hour
*    ttl: '1h' // 1 hour
*    ttl: '7d' // 7 days
*/
module.exports = { 
    secret: process.env.JWT_SECRET,
    ttl: 3600
}