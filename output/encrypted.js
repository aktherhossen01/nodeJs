const crypto = require("crypto")
const algorithm = 'ase-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

function encrypt(text){
    const cipher = crypto.createCipheriv(algorithm, key,iv)
    let encrypted = cipher.update(text , 'utf-8', 'hex')
    
}