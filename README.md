# Spread operator pada javascript

Spread operator pada javascript memungkinkan kita untuk melakukan manipulasi/mengurai data pada `arrays` atau `object` dengan penulisan syntax yang lebih singkat

### Cara manual

```javascript
const arr = [4, 5, 6];
const tambahArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(tambahArr); // Array(6) [1,2,3,4,5,6]
```

### Spread Operator

Hasilnya akan sama dengan cara di atas

```javascript
const newArr = [1, 2, 3, ...arr];
console.log(newArr); // Array(6) [1,2,3,4,5,6]
```

Jika kita ingin menampilkan datanya saja yang ada di dalam array

```javascript
console.log(newArr); // 1,2,3,4,5,6
```

## Contoh Kasus

Kita gunakan objek `rumahMakan` yang telah kita buat sebelumnya.

```javascript
const rumahMakan = {
  nama: "Rumah makan berkah",
  lokasi: "Jalan merpati blok m",
  kategori: ["tradisional", "murah", "warteg"],
  minuman: ["es teh", "es jeruk", "kopi"],
  makanan: ["soto", "gulai ikan", "rendang"],
};
```

Sebagai contoh kita akan mengambil data makanan dari `objek` diatas (anggap saja kita sedang bertanya "Lauknya apa saja bu?")

```javascript
const makananya = [...rumahMakan.makanan];
console.log(makananya); // soto, gulai ikan, rendang
```

Kita juga bisa menambahkan nilai baru pada suatu array dengan spread operator

```javascript
const makananya = [...rumahMakan.makanan, mendoan];
console.log(makananya); soto, gulai ikan, rendang, 'mendoan'
```

### Meng-_copy_ nilai dari property suatu objek

Menggunakan spread operator untuk menyalin data dari property suatu objek dan memasukkan nilai tersebut ke variable yang baru

```javascript
const salinMakanan = [...rumahMakan.makanan];
console.log(salinMakanan);
```

> Hasilnya sama saja dengan property makanan milik objek `rumahMakan` tapi nilai tersebut sekarang dimiliki oleh variable `salinMakanan`

### Menggabungkan 2 array

```javascript
const makanMinum = [...rumahMakan.makanan, ...rumahMakan.minuman];
console.log(makanMinum); // semua Makanan, semua Minuman
```

### Mengurai data yang dimasukkan ke dalam suatu function

kita masih menggunakan objek yang sama dan menambahkan `function` baru ke dalamnya

```javascript
pesanMakan: function (menu1, menu2, menu3) {
    console.log(`Ini dia makananya ${menu1}, ${menu2}, ${menu3}`);
  }
```

> Function ini akan mengembalikan nilai yang kita masukkan nanti melalui ketiga parameternya

```javascript
const menunya = [
  prompt(`Silahkan pilih menunya, menu 1`),
  prompt(`Menu 2`),
  prompt(`Menu 3`),
];
```

Kita mulai gunakan functionya dengan input yang kita masukkan melalui kotak dialog prompt.

#### Cara Manual

```javascript
rumahMakan.pesanMakan(menunya[0], menunya[1], menunya[2]);
```

#### Spread Operator

```javascript
rumahMakan.pesanMakan(...menunya);
```

> Spread Operator akan mengurai semua nilai yang ada di variable `menunya`. tanpa harus menuliskanya secara manual satu persatu

### Meng-copy object dan menambahkan property baru di dalamnya

Sama yang telah kita lakukan pada `arrays` kita juga bisa memanipulasi objek dengan spread operator

```javascript
const rumahMakanBaru = { ...rumahMakan };
console.log(rumahMakanBaru); // kita berhasil menyalin semua property & methodnya
```

Selanjutnya kita tambahkan property baru pada objek kita yang baru

```javascript
const rumahMakanBaru = {Tahun Berdiri : 1970, ...rumahMakan, Cabang : 'Surabaya'}
```

### Merubah nama object

Pertama kita _copy_ datanya dari objek yang ingin kita salin.

```javascript
const rumahMakanCopy = { ...rumahMakan };
```

Kemudian setelah semua data diambil kita bisa langsung mengubah namanya menggunakan property `nama` yang sudah ada sebelumnya

```javascript
rumahMakanCopy.nama = "Rumah makan barokah";
```

```javascript
console.log(rumahMakanCopy.nama); // Rumah makan barokah
console.log(rumahMakan.nama); // Rumah makan berkah
```
