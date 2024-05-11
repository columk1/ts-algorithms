export default function replaceMissingNumber(arr: number[]): number[] {
  arr.forEach((num, index) => {
    if (index === 0 && num !== 1) return arr.unshift(1)
    if (num + 1 !== arr[index + 1]) {
      return arr.splice(index + 1, 0, num + 1)
    }
  })
  return arr
}

// export default function replaceMissingNumber(arr: number[]): number[] {
//   const result: number[] = []
//   let found = false
//   arr.forEach((num, index) => {
//     if (index === 0 && num !== 1) {
//       result.push(1)
//       found = true
//     }

//     result.push(num)

//     if (!found) {
//       if (num + 1 !== arr[index + 1]) {
//         result.push(num + 1)
//         found = true
//       }
//     }
//   })
//   return result
// }
