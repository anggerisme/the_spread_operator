# the_spread_operator

Spread operator pada javascript memungkinkan kita untuk melakukan manipulasi/mengurai data pada `arrays` atau `object` dengan penulisan syntax yang lebih singkat

### Cara manual

```javascript
const arr = [4, 5, 6];
const tambahArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(tambahArr); // Array(6) [1,2,3,4,5,6]
```

### Spread Operator

```javascript
const newArr = [1, 2, 3, ...arr];
console.log(newArr); // Array(6) [1,2,3,4,5,6]
```

Menampilkan datanya saja yang ada di dalam array

```javascript
console.log(newArr); //
```
