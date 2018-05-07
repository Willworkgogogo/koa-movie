function generator(arr) {
  let index = 0
  return {
    next: () => {
      if (index < arr.length) {
        return {
          value: arr[index++],
          done: false
        }
      }else{
        return {
          done: true
        }
      }
    }
  }
}

// let gen = generator(['吃饭', '睡觉', '打豆豆'])
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())


function *makeIterator(arr) {
  for(let i = 0; i < arr.length; i++) {
    yield arr[i]
  }
}
let mi = makeIterator(['吃饭', '睡觉', '打豆豆'])
console.log(mi.next())
console.log(mi.next())
console.log(mi.next())
console.log(mi.next())
