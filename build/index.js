"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// first import express
var express_1 = __importDefault(require("express"));
// create global object called app 
var app = (0, express_1.default)();
var port = 3000; //it's best practice to set your port as a variable
// define a route handler for the default home page
app.get('/api', function (req, res) {
    res.send('Hello World');
});
// start the Express server 
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
