'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
    DOMAIN: 'http://localhost:9000',
    SESSION_SECRET: "phoenixgolfguys-secret",
    // Control debug level for modules using visionmedia/debug
    DEBUG: '',
    STORMPATH_API_KEY_ID: '2C55HW79EYIML9M81170XWVH5',
    STORMPATH_API_KEY_SECRET: 'uisWcymhursXHbAvRTb0kD3Jo5Nw3svTWCCtqCVrV0I',
    STORMPATH_APP_HREF: 'https://api.stormpath.com/v1/applications/5mhpDfmgS1rjbHdtL2COkl'
};