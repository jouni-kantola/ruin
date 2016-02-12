// hash algorithm from http://stackoverflow.com/a/6248722
function uid(){
    return ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
}

module.exports = {
    uid: uid
}