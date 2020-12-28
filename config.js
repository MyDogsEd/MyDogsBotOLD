const fs = require('fs')

const config = {
    "ownerId": "335802802335121408",
    "prefix": "|",
    "homeGuild": "734502410952769607",
    "devRole": "734517422576631828",
    "token": JSON.parse(fs.readFileSync('./token.bottoken'))
}
module.exports = config
// TODO: add token.bottoken into this file somehow so i dont have to edit a bunch of code