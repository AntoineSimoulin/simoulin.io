const r=`# Sorting and Searchings

## Bubble Sort

This a comparison based algorithm. We divide the array into two sections, unsorted and sorted. After each loop, we garranted, the largest element of the unsorted portion is pushed at the most right position. We scan through the unsorted portion of the array and if the element is bigger than the next, we swap them. We repeat the process \`n - 1\` time until all elements are in the sorted portion. If not swap was perform, list already sorted, no need to go through other iterations. This reduce best time complexity to \`O(n)\` if the list is already sorted.

\`\`\`python
def bubbleSort(array: list) -> list:
  for i in range(len(array), -1, -1):
    swapped = False
    for j in range(i - 1):
      if array[j] > array[j + 1]:
        array[j], array[j + 1] = array[j + 1], array[j]
        swapped = True
    if not swapped: break
  return nums
\`\`\`

## Selection Sort

We divide the array into two sections, sorted and unsorted. At each loop, we iterate through the unsorted portion to find the minimum and place it at the leftmost position. We repeat that until all elements are in the sorted section.

\`\`\`python
def selectionSort(array: list) -> list:
  for i in range(len(array)):
    m = i
    for j in range(i + 1, len(array)):
      if array[j] < array[m]: m = j
    array[i], array[m] = array[m], array[i]
  return array
\`\`\`

## Insertion Sort

We divide the array into two sections, sorted and unsorted. At each step we consider the rightmost element from the unsorted portion of the array and while its greater that the current element to its right, we swap the two.

\`\`\`python
def insertionSort(array: list) -> list:
  for i in range(len(array)):
    j = i
    while j > 0 and array[j] < array[j - 1]:
      array[j], array[j - 1] = array[j - 1], array[j]
      j -= 1
  return array
\`\`\`

## Merge Sort

Merge Sort is based on the principle of Divide and Conquer Algorithm. During the divide step, we divide the current array in two parts. During the conquer part, we sort each subarray by recursively calling the merge sort function. Finally during the combine part, we merge the two sorted sub-arrays into a single sorted array. The best, average and worst time complexity is O(n*log n) and space complexity is O(n).

\`\`\`python
def mergeSort(array: list) -> list:
  if len(array) == 1:
    return array

  mid = len(array) // 2
  subarray1, subarray2 = mergeSort(array[:mid]), mergeSort(array[mid:])
  i = j = 0
  while i < len(subarray1) and j < len(subarray2):
    if subarray1[i] < subarray2[j]:
      array[i + j] = subarray1[i]
      i += 1
    else:
      array[i + j] = subarray2[j]
      j += 1
  while i < len(subarray1):
    array[i + j] = subarray1[i]
    i += 1
  while j < len(subarray2):
    array[i + j] = subarray2[j]
    j += 1
  return array
\`\`\`

## Quick Sort
Recursive sort. At each step the array is organize with small elments to the right and big elements to the left. The elements are split given a pivot value.

\`\`\`python
def partition(array: list, low: int, high: int) -> list:
  # Choose the pivot and put it at the end
  mid = low + ((high - low + 1) >> 2)
  array[mid], array[high] = array[high], array[mid]
  pivot = array[high]

  # pointer for greater element
  g = low - 1

  for i in range(low, high):
    if array[i] <= pivot:
      g += 1
      array[i], array[g] = array[g], array[i]
  array[g + 1], array[high] = array[high], array[g + 1]
  return g + 1

def quickSort(array: list, low: int=None, high: int=None) -> list:
  if not low: low = 0
  if not high: high = len(array) - 1

  if low < high:
    pivot = partition(array, low, high)

    # recursive call on the left of pivot
    quickSort(array, low, pivot - 1)

    # recursive call on the right of pivot
    quickSort(array, pivot + 1, high)
  return array
\`\`\`

## Count Sort

## Radix Sort

## Heap Sort

## Bucket Sort

## Quick Select`;export{r as default};
