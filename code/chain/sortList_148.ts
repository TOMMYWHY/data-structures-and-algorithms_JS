////// 有问题
    export class Node {
        val: any;
        next: any;
        constructor(value: any) {
            this.val = value
            this.next = undefined;
        }
    }

    export class NodeList {
        constructor(arr: any[]) {
            let head = new Node(arr.shift());
            let next = head;
            arr.forEach((item) => {
                next.next = new Node(item);
                next = next.next;
            })
            return head;
        }
    }

    let swap = (p: Node, q: Node) => {
        let val = p.val
        p.val = q.val
        q.val = val
    }

    let partion = (begin: Node, end: Node) => {
        let val = begin.val;
        let p = begin
        let q = begin.next
        while (q !== end) {
            if (q.val < val) {
                swap(p.next, q)
                p = p.next
            }
            q = q.next;
        }
        swap(begin, p)
        return p
    }

    export default function sort(begin:Node, end:Node) {
        if (begin! == end) {
            let part = partion(begin, end);
            sort(begin, part)
            sort(part.next, end)
        }
    }
 


