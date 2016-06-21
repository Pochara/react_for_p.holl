cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.matd.coolplugin/www/CoolPlugin.js",
        "id": "com.matd.coolplugin.CoolPlugin",
        "clobbers": [
            "CoolPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "com.matd.coolplugin": "0.2.11"
};
// BOTTOM OF METADATA
});