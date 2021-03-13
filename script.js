const rumahMakan = {
  nama: "Rumah makan berkah",
  lokasi: "Jalan merpati blok m",
  kategori: ["tradisional", "murah", "warteg"],
  minuman: ["es teh", "es jeruk", "kopi"],
  makanan: ["soto", "gulai ikan", "rendang"],
  order: function (minumanIndex, makananIndex) {
    return [this.minuman[minumanIndex], this.makanan[makananIndex]];
  },
  jamBuka: {
    kam: {
      buka: 12,
      tutup: 22,
    },
    jum: {
      buka: 11,
      tutup: 23,
    },
    sab: {
      buka: 0,
      tutup: 24,
    },
  },
  pesanan: function ({
    minumanIndex = 1,
    makananIndex = 0,
    alamat,
    pukul = "20:00",
  }) {
    console.log(
      `Pesanan diterima! ${this.minuman[minumanIndex]} dan ${this.makanan[makananIndex]} siap diantarkan ke alamat ${alamat} pukul ${pukul}`
    );
  },
  pesanMakan: function (menu1, menu2, menu3) {
    console.log(`Ini dia makananya ${menu1}, ${menu2}, ${menu3}`);
  },
};

/* ----- CARA MANUAL ----- */
const arr = [4, 5, 6];
const tambahArr = [1, 2, 3, arr[0], arr[1], arr[2]];
console.log(tambahArr); // Array(6) [1,2,3,4,5,6]

/*----- SPREAD OPERATOR ----- */
const newArr = [1, 2, 3, ...arr];
console.log(newArr); // Array(6) [1,2,3,4,5,6]
/*Menampilkan datanya saja yang ada di dalam array */
console.log(...newArr); //1,2,3,4,5,6

// -------- CONTOH KASUS --------

const makananya = [...rumahMakan.makanan];
console.log(makananya); // soto, gulai ikan, rendang

/* ----- Menyalin data suatu objek */
const salinMakanan = [...rumahMakan.makanan];
console.log(salinMakanan);

const makanMinum = [...rumahMakan.makanan, ...rumahMakan.minuman];
console.log(makanMinum);

/* ----- Mengurai nilai function ---- */
const menunya = [
  /*prompt(`Silahkan pilih menunya, menu 1`),
    prompt(`Menu 2`),
    prompt(`Menu 3`), */
];
/*Cara Manual */
rumahMakan.pesanMakan(menunya[0], menunya[1], menunya[2]);
/* Spread Operator */
rumahMakan.pesanMakan(...menunya);

/* ---- Mencopy Object ----- */
const rumahMakanBaru1 = { ...rumahMakan };
console.log(rumahMakanBaru1);

const rumahMakanBaru2 = {
  tahunBerdiri: 1970,
  ...rumahMakan,
  cabang: "Surabaya",
};
console.log(rumahMakanBaru2);

/*----- Merubah nama object -----  */
const rumahMakanCopy = { ...rumahMakan };
rumahMakanCopy.nama = "Rumah makan barokah";
console.log(rumahMakanCopy.nama); // Rumah makan barokah
console.log(rumahMakan.nama); // Rumah makan berkah
