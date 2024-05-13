export default class Bottles {
  private numberOfBottles: number = 99
  public verse = (n: number): string =>
    n === 0
      ? `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`
      : n === 1
      ? `${n} bottle of beer on the wall, ${n} bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`
      : `${n} bottles of beer on the wall, ${n} bottles of beer.\nTake one down and pass it around, ${n - 1} bottle${n > 2 ? 's' : ''} of beer on the wall.\n`

  public verses = (start: number, end: number): string => {
    let result = ''
    for (let i = start; i > end; i--) {
      result += this.verse(i) + '\n'
    }
    return (result += this.verse(end))
  }

  public song = (): string => this.verses(99, 0)
}
