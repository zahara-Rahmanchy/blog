"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const post_routes_1 = require("./Modules/Posts/post.routes");
const app = (0, express_1.default)();
// {
//   origin: 'https://shoemanagementsystem.netlify.app',
//   credentials: true,
// }
app.use((0, cors_1.default)());
// parsers
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send({
        Message: "Blog platform",
    });
});
app.use("/api", post_routes_1.PostRoutes);
exports.default = app;
