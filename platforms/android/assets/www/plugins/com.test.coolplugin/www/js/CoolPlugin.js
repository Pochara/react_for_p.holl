cordova.define("com.test.coolplugin.CoolPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

function CoolPlugin() { 
	console.log("CoolPlugin.js: is created");
}

CoolPlugin.prototype.showToast = function(aString, success, error){
 console.log("CoolPlugin.js: showToast");

 exec(function(result){
     /*alert("OK" + reply);*/ 
	 		success(result);

	 
   },
  function(e){
	  error(e);
    /*alert("Error" + reply);*/
   },"CoolPlugin","CoolPlugin",[]);
}

 var coolPlugin = new CoolPlugin();
 module.exports = coolPlugin;

});
