/**
 * 基于Map和双向链表实现的LRU算法
 * 使用泛型可以存储多种类型的数据
 */
class LRUCache<K, V> {
  private cacheMap: Map<K, LinkedListNode<K, V>>
  private limit: number
  private head: LinkedListNode<K, V> | null = null
  private end: LinkedListNode<K, V> | null = null

  constructor(limit: number) {
    if (limit <= 0) throw new Error('limit of cache must > 0')
    this.cacheMap = new Map()
    this.limit = limit
  }

  public get(key: K): V | null {
    const node = this.cacheMap.get(key)
    if (!node) return null
    this.refreshNode(node)
    return null
  }

  private refreshNode(node: LinkedListNode<K, V>) {
    if (node === this.end) return
    this.removeNode(node)
    this.addNode(node)
  }

  private removeNode(node: LinkedListNode<K, V>) {
    if (node === this.end) {
      this.end = node
    } else if (node === this.head) {
      this.head = this.head.next
    } else {
      if (node.prev) node.prev.next = node.next
      if (node.next) node.next.prev = node.prev
    }
  }

  private addNode(node: LinkedListNode<K, V>) {
    // TODO
  }
}

class LinkedListNode<K, V> {
  key: K
  value: V
  next: LinkedListNode<K, V> | null
  prev: LinkedListNode<K, V> | null

  constructor(
    key: K,
    value: V,
    next: LinkedListNode<K, V> | null = null,
    prev: LinkedListNode<K, V> | null = null
  ) {
    this.key = key
    this.value = value
    this.next = next
    this.prev = prev
  }
}
