var express = require('express');
var router = express.Router();
const APIRequests=require("../middleware/APIRequests");

// GET Electionsmeta page.
router.get('/', function(req, res, next) {

    const url = 'https://elections-cpl.api.hscc.bdpa.org/v1/info'; //REPLACE &#39; with a single quote...
    const token = process.env.BEARER_TOKEN;
   
    // Pass url and token into RestAPIGet and pull information from response
    APIRequests.getWithBearerToken(url, token)
    .then(data => {
        if (process.env.CONSOLE_DEBUG){
            console.log("REST CALL ", data);
        }
       
        if (data.success){
            // SUBJECT TO CHANGE
            var electionInfo=data.info;
            var upcomingElections=data.info.upcomingElections;
            var openElections=data.info.openElections;
            var closedElections=data.info.closedElections;
        } // closes if statement

        else{
            res.render('error', {title: 'Stats call failed',
            message: data.error,
            });
        }
    }) // data then component
    .catch(error => console.error(error));
  res.render('index', { title: 'Express' });
});
module.exports = router;