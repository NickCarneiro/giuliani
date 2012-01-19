chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getCredentials"){
    	sendResponse({eid: localStorage["eid"], password: localStorage["password"]});
  	}
    else if(request.method == "setCredentials"){
    	localStorage["eid"] = request.eid;
    	localStorage["password"] = request.password;

    	sendResponse({result: "Updated eid to " +request.eid+"and password to "+request.password}); 

  	}else {
  		sendResponse({})
	}
});