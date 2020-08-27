// import middleware here
const authCheck = require('./authCheck')
const authenticateTrack = require('./authenticateTrack')


module.exports = {
    // exports middleware here
    authCheck: authCheck,
    authenticateEndTrack: authenticateTrack.authenticateEndTrack,
    authenticateStartTrack: authenticateTrack.authenticateStartTrack,


}
