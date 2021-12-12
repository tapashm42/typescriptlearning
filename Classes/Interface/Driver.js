"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IOSDeveloper_1 = require("./IOSDeveloper");
var AndroidDeveloper_1 = require("./AndroidDeveloper");
var iosdeveloper = new IOSDeveloper_1.IOSDeveloper();
var androidDeveloper = new AndroidDeveloper_1.AndroidDeveloper();
var developers = [];
developers.push(iosdeveloper);
developers.push(androidDeveloper);
for (var _i = 0, developers_1 = developers; _i < developers_1.length; _i++) {
    var developer = developers_1[_i];
    console.log(developer.getApplication());
}
