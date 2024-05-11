import replaceMissingNumber from '../src/replaceMissingNumber'

describe('Replace missing number in array', () => {
  it('Should return the missing number in the array', () => {
    expect(replaceMissingNumber([1, 2, 3, 5])).toStrictEqual([1, 2, 3, 4, 5])
    expect(replaceMissingNumber([2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
    expect(replaceMissingNumber([1, 2, 3, 4])).toStrictEqual([1, 2, 3, 4, 5])
  })
})
