import DesignCircularQueue_622 from  '../../dist/queue/designCircularQueue_622'

test('DesignCircularQueue_622:1',()=>{
    let queue = new DesignCircularQueue_622(4);
    queue.enQueue(2)

    expect(queue.isFull()).toBe(false)
    expect(queue.enQueue(1)).toBe(true)
    expect(queue.Front()).toBe(2)
    expect(queue.Rear()).toBe(1)
})

test('DesignCircularQueue_622:2',()=>{
    let queue = new DesignCircularQueue_622(4);
    queue.enQueue(1)
    queue.enQueue(2)
    queue.enQueue(3)
    queue.enQueue(4)

    expect(queue.isFull()).toBe(true)
    expect(queue.enQueue(5)).toBe(false)
    expect(queue.Front()).toBe(1)
    expect(queue.Rear()).toBe(4)
})