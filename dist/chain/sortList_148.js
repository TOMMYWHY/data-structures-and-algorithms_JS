"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
////// 有问题
var Node = /** @class */ (function () {
    function Node(value) {
        this.val = value;
        this.next = undefined;
    }
    return Node;
}());
exports.Node = Node;
var NodeList = /** @class */ (function () {
    function NodeList(arr) {
        var head = new Node(arr.shift());
        var next = head;
        arr.forEach(function (item) {
            next.next = new Node(item);
            next = next.next;
        });
        return head;
    }
    return NodeList;
}());
exports.NodeList = NodeList;
var swap = function (p, q) {
    var val = p.val;
    p.val = q.val;
    q.val = val;
};
var partion = function (begin, end) {
    var val = begin.val;
    var p = begin;
    var q = begin.next;
    while (q !== end) {
        if (q.val < val) {
            swap(p.next, q);
            p = p.next;
        }
        q = q.next;
    }
    swap(begin, p);
    return p;
};
function sort(begin, end) {
    if (begin == end) {
        var part = partion(begin, end);
        sort(begin, part);
        sort(part.next, end);
    }
}
exports.default = sort;
