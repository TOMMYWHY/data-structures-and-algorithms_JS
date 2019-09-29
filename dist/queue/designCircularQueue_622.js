"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DesignCircularQueue = /** @class */ (function () {
    function DesignCircularQueue(k) {
        this.list = Array(k);
        this.front = 0; //头指针
        this.rear = 0; //尾指针 + 1 // rear 中 不存值
        this.max = k;
    }
    DesignCircularQueue.prototype.enQueue = function (num) {
        if (this.isFull()) {
            return false;
        }
        else {
            this.list[this.rear] = num;
            this.rear = (this.rear + 1) % this.max;
            return true;
        }
    };
    DesignCircularQueue.prototype.deQueue = function () {
        var v = this.list[this.front];
        this.list[this.front] = '';
        this.front = (this.front + 1) % this.max;
        return v;
    };
    DesignCircularQueue.prototype.isEmpty = function () {
        return this.front === this.rear && !this.list[this.front]; // true && !false( list.front 空)
    };
    DesignCircularQueue.prototype.isFull = function () {
        return this.front === this.rear && !!this.list[this.front]; // 头尾重合 && 不为空 则满 // 如果不用！！则返回数字类型
    };
    DesignCircularQueue.prototype.Front = function () {
        return this.list[this.front];
    };
    DesignCircularQueue.prototype.Rear = function () {
        var rear = this.rear - 1;
        return this.list[rear < 0 ? this.max - 1 : rear];
    };
    return DesignCircularQueue;
}());
exports.default = DesignCircularQueue;
