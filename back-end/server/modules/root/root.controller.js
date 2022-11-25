"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RootController {
    static async get(req, res) {
        return res.send("app");
    }
    static async wrongRoute(req, res) {
        console.log("wrong route");
        return res.sendStatus(404);
    }
    static async successRoute(req, res) {
        return res.json({
            result: "success",
        });
    }
}
exports.default = RootController;
