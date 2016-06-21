cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.test.coolplugin/www/js/CoolPlugin.js",
        "id": "com.test.coolplugin.CoolPlugin",
        "clobbers": [
            "CoolPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "com.test.coolplugin": "0.2.11"
};
// BOTTOM OF METADATA
});