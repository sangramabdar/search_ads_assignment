"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseBodyBuilder {
    constructor() {
        this.timeStamp = Date.now();
        this.error = { message: "" };
        this.status = 200;
        this.data = null;
    }
    setError(error) {
        this.error.message = error;
        return this;
    }
    setStatus(status) {
        this.status = status;
        return this;
    }
    setData(data) {
        this.data = data;
        return this;
    }
    build() {
        return this;
    }
}
exports.default = ResponseBodyBuilder;
