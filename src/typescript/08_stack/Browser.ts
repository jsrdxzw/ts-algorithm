/**
 * 使用双栈结构实现浏览器的前进后退功能
 */
class Browser<T> {
  private backStack: LinkedNode<T>
  private forwardStack: LinkedNode<T>
  private current?: T

  constructor(backStack: LinkedNode<T>, forwardStack: LinkedNode<T>) {
    this.backStack = backStack
    this.forwardStack = forwardStack
  }

  public back(): T {

  }

  public forward(): T {

  }
}
