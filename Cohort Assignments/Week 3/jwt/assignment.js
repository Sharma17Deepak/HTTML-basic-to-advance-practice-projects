const jwt = require("jsonwebtoken");
const jwtPassword =  "secret";
const zod = require("zod");

const emailSchmea = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt( username, password ){
    const usernameResponse = emailSchmea.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
 
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
 
    let sign = jwt.sign({usernanme},jwtPassword);
 
    return sign;
}

function verifyJwt(token){
    let ans = true;
    try {
        jwt.verify(token,jwtPassword);
    } catch(e){
        ans=false;
    }
    return ans;
}

function decodeJwt(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    } else {
        return false;
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}