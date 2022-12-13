"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = void 0;
const axios_1 = __importDefault(require("axios"));
exports.instance = axios_1.default.create({
    baseURL: "https://some-domain.com/api/",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
});
console.log(exports.instance);
