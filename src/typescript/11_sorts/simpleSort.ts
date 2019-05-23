/**
 * 简单的排序，分为冒泡和插入排序
 * 注意他们都是稳定的排序,并且是原地排序
 * 一般情况下更推荐使用插入排序，因为它所需要的操作更少
 * 这里使用简单工厂创建我们的排序算法
 */

/**
 * 排序的枚举类型
 */
enum SortType {
  BubbleSort,
  InsertSort
}

interface SortAlgo {
  sort(array: number[]): number[]
}

class BubbleSort implements SortAlgo {
  sort(array: number[]): number[] {
    return []
  }
}

class InsertSort implements SortAlgo {
  sort(array: number[]): number[] {
    return []
  }
}

class SortFactory {
  static getSortAlgo(type: SortType): SortAlgo {
    switch (type) {
      case SortType.BubbleSort:
        return new BubbleSort()
      case SortType.InsertSort:
        return new InsertSort()
      default:
        throw new Error('unknown sort algorithm type')
    }
  }
}
