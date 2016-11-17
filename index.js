const errou = require('faustao-errou');

module.exports = {
    specDone: function(result) {
        if(result.failedExpectations.length > 0){
            errou();
        }
    }
};
