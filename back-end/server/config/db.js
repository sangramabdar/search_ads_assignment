"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class MongoDatabase {
    static async connectToDatabase() {
        try {
            await this.mongoClient.connect();
            MongoDatabase.db = MongoDatabase.mongoClient.db(MongoDatabase.DB_NAME);
            console.log("database is connected");
        }
        catch (error) {
            MongoDatabase.db = null;
            console.log("database is not connected");
        }
    }
    static async getDb() {
        var _a;
        if ((_a = MongoDatabase.db) === null || _a === void 0 ? void 0 : _a.databaseName) {
            return MongoDatabase.db;
        }
        await MongoDatabase.connectToDatabase();
        return MongoDatabase.db;
    }
}
MongoDatabase.URL = process.env.DB_URL || "mongodb://localhost:27017";
MongoDatabase.DB_NAME = process.env.DB_NAME || "assignment";
MongoDatabase.db = null;
MongoDatabase.mongoClient = new mongodb_1.MongoClient(MongoDatabase.URL, {
    serverSelectionTimeoutMS: 2000,
});
exports.default = MongoDatabase;
