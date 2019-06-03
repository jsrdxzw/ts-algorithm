/**
 * 归并排序
 * 稳定排序，稳定的O(nlgn)时间复杂度
 * O(n)的空间复杂度
 * 在小规模数据排序中很常用
 */
class MergeSort {
  public static mergeSort(array: number[]) {
    if (!array || !array.length) return
    const length = array.length
    this.mergeSortInternally(array, 0, length - 1)
  }

  static mergeSortInternally(array: number[], p: number, r: number) {
    if (p >= r) return
    // 严格按照中间值作切分点
    const q = p + (r - p) / 2
    this.mergeSortInternally(array, p, q)
    this.mergeSortInternally(array, q + 1, r)
  }
}
