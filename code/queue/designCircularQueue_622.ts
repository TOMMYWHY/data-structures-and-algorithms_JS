export default class DesignCircularQueue {
    list: any[];
    front: number;
    rear: number;
    max: number;
    constructor(k: number) {
        this.list = Array(k);
        this.front = 0; //头指针
        this.rear = 0; //尾指针 + 1 // rear 中 不存值
        this.max = k
    }

    enQueue(num: any): boolean {
        if (this.isFull()) {
            return false
        } else {
            this.list[this.rear] = num
            this.rear = (this.rear + 1) % this.max;
            return true;
        }
    }

    deQueue(): any {
        let v = this.list[this.front];
        this.list[this.front] = '';
        this.front = (this.front + 1) % this.max;
        return v;
    }

    isEmpty(): boolean {
        return this.front === this.rear && !this.list[this.front] // true && !false( list.front 空)
    }
    isFull(): boolean {
        return this.front === this.rear && !!this.list[this.front] // 头尾重合 && 不为空 则满 // 如果不用！！则返回数字类型
    }
    Front(): any {
        return this.list[this.front]
    }
    Rear(): any {
        let rear = this.rear - 1;
        return this.list[rear < 0 ? this.max - 1 : rear]
    }
}



