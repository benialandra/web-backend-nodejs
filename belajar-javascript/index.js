// TASK 1
// /**
//  * TODO 1 (Tiger.js):
//  * Ekspor nilai dari class Tiger
//  */

// /** TODO 2 (Wolf.js)
// * Ekspor nilai dari class Wolf
// */
// // import { Wolf} from "./Wolf";
// // import {Tiger} from "./Tiger";

// /* * TODO 3 (main.js)
//  * Impor class Tiger dan Wolf
//  *
//  * TODO 4 (main.js)
//  * Ekspor fungsi fight, myTiger, myWolf, dan result
// //  *
// //  */


// // // TODO 3
// const Tiger = require('./Tiger.js');
// const Wolf = require('./Wolf.js');

// const fight = (Tiger, Wolf) => {
//     if (myTiger.strength > myWolf.strength) {
//         return myTiger.growl();
//     }
//     if (myWolf.strength > myTiger.strength) {
//         return myWolf.howl();
//     }
//     return 'Harimau dan serigala sama-sama kuat!';
// };

// const myTiger = new Tiger();
// const myWolf = new Wolf();
// const result = fight(Tiger, Wolf);

// // TODO 4
// module.exports = { fight,myTiger, myWolf, result }
// console.log( fight,myTiger, myWolf, result)


//TASK 2

// try {
//     console.log("Awal blok try");
//     console.log("Akhir blok try");
//   } catch (error) {
//     console.log("Tidak terjadi eror, maka kode ini diabaikan");
// //   }
// try {
//     console.log("Awal blok try");
//     console.log("Akhir blok try");
//   } catch (error) {
//     console.log("Baris ini diabaikan");
//   } finally {
//     console.log("Akan tetap dieksekusi");
//   }


// TASK 3
// const json = '{ "name": "Yoda", "age": 20 }';

// try {
//   const user = JSON.parse(json);

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }


// const json = '{ bad json }';

// try {
//   const user = JSON.parse(json);

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }


/* output
SyntaxError
Unexpected token b in JSON at position 2
*/

// const json = '{ "name": "Yoda", "age": 20 }';

// try {
//   const user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("'name' is required.");
//   }

//   errorCode;

//   console.log(user.name); // Yoda
//   console.log(user.age);  // 20
// } catch (error) {
//   console.log(`JSON Error: ${error.message}`);
// }

// /* output
// JSON Error: errorCode is not defined
// */



// let json = '{ "name":"beni","age": 30 }';

// try {
//   let user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("'name' is required.");
//   }

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   if (error instanceof SyntaxError) {
//     console.log(`JSON Error: ${error.message}`);
//   } else if (error instanceof ReferenceError) {
//     console.log(error.message);
//   } else {
//     console.log(error.stack);
//   }
// }
// class ValidationError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "ValidationError";
//     }
//   }

//   const json = '{ "nae":"beni","age": 30 }';

//   try {
//     const user = JSON.parse(json);

//     if (!user.name) {
//       throw new ValidationError("'name' is required.");
//     }
//     if (!user.age) {
//       throw new ValidationError("'age' is required.");
//     }

//     console.log(user.name);
//     console.log(user.age);
//   } catch (error) {
//     if (error instanceof SyntaxError) {
//       console.log(`JSON Syntax Error: ${error.message}`);
//     } else if (error instanceof ValidationError) {
//       console.log(`Invalid data: ${error.message}`);
//     } else if (error instanceof ReferenceError) {
//       console.log(error.message);
//     } else {
//       console.log(error.stack);
//     }
//   }

//   /* output
//   Invalid data: 'name' is required.
//   */



//TASK 4

/**
 * Saat ini, Anda sudah memiliki fungsi detectTriangle yang berguna untuk
 * mendeteksi jenis segitiga berdasarkan nilai argumen.
 * Contoh:
 *  - 1, 1, 1 -> Segitiga sama sisi
 *  - 4, 4, 2 -> Segitiga sama kaki
 *  - 3, 4, 6 -> Segitiga sembarang
 *
 * Namun fungsi detectTriangle belum berjalan dengan baik karena
 * bila ada argumen fungsi yang bukan number, alih-alih error, ia akan mengembalikan "Segitiga sembarang".
 * Contoh:
 *  - 1, false, 1 -> Segitiga sembarang
 *  - 'a', 3, 5 -> Segitiga sembarang
 *  - 12, 2, null -> Segitiga sembarang
 * Kondisi yang diharapkan:
 *  - 1, false, 1 -> Argumen kedua harus number
 *  - 'a', 3, 5 -> Argumen pertama harus number
 *  - 12, 2, null -> Argumen ketiga harus number
 *
 *  Tugas Anda adalah memperbaiki fungsi detectTriangle agar berjalan dengan kondisi yang diharapkan.
 *  Pastikan Anda menggunakan teknik Throwing dan Handling Error yah.
 *
 * TODO 1:
 * - Buatlah class ValidationError yang merupakan custom error dengan spesifikasi berikut:
 *   - Turunan dari class Error
 *   - Memiliki constructor(message)
 *   - this.name harus bernilai "ValidationError"
 *
 * TODO 2:
 * - Buatlah fungsi validateNumberInput yang memvalidasi 3 buah input (argumen) dengan spesifikasi berikut:
 *   - Menerima 3 argumen
 *   - Bila argumen pertama bukan number:
 *     - throw ValidationError dengan pesan 'Argumen pertama harus number'
 *   - Bila argumen kedua bukan number:
 *     - throw ValidationError dengan pesan 'Argumen kedua harus number'
 *   - Bila argumen ketiga bukan number:
 *     - throw ValidationError dengan pesan 'Argumen ketiga harus number'
 *
 * TODO 3:
 * - Panggil fungsi validateNumberInput di dalam fungsi detectTriangle untuk memvalidasi nilai argumen a, b, dan c.
 *   - pastikan Anda memanggil validateNumberInput menggunakan try .. catch.
 *   - bila block catch terpanggil, kembalikan fungsi detectTriangle dengan pesan error yang dibawa fungsi validateNumberInput.
 */

// TODO 1

// TODO 2

// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }


// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'ValidationError';
//     }
// }

// // TODO 2
// const validateNumberInput = (a, b, c) => {
//     if (typeof a !== 'number') {
//         throw new ValidationError('Argumen pertama harus number');
//     }
//     if (typeof b !== 'number') {
//         throw new ValidationError('Argumen kedua harus number');
//     }
//     if (typeof c !== 'number') {
//         throw new ValidationError('Argumen ketiga harus number');
//     }
// };
// const detectTriangle = (a, b, c) => {
//     try {
//         validateNumberInput(a, b, c);
//     } catch (error) {
//         return error.message;
//     }

//     if (a === b && b === c) {
//         return 'Segitiga sama sisi';
//     }

//     if (a === b || a === c || b === c) {
//         return 'Segitiga sama kaki';
//     }

//     return 'Segitiga sembarang';
// };



// TASK 5
// const { promisify } = require('util');

// function getProvinces(countryId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (countryId === 'id') {
//                 resolve([
//                     { id: 'id-jk', name: 'Jakarta' },
//                     { id: 'id-bt', name: 'Banten' },
//                     { id: 'id-jr', name: 'Jawa Barat' },
//                 ]);
//             } else {
//                 reject(new Error('Country not found'));
//             }
//         }, 1000);
//     });
// }

// module.exports = { getProvinces };
// // // console.log(getProvinces);

// function watchMovie() {
//     withDrawMoney(10)
//         .then((money) => buyCinemaTicket(money))
//         .then((ticket) => goInsideCinema(ticket))
//         .then((result) => console.log(result))
//         .catch((error) => console.log(error.message));
// }
// console.log(watchMovie)

// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.all([promise1, promise2, promise3]).then((values) => console.log(values)); // [1, 2, 3] setelah 3 detik

// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.all([promise1, promise2, promise3])
//   .then((values) => console.log(values))
//   .catch((error) => console.log(error.message)); // ups

// function watchMovie() {
//     withDrawMoney(10)
//       .then((money) => buyCinemaTicket(money))
//       .then((ticket) => goInsideCinema(ticket))
//       .then((result) => console.log(result))
//       .catch((error) => console.log(error.message));
//   }
//   watchMovie();

// async function watchMovie() {
//     try {
//       const money = await withDrawMoney(10);
//       const ticket = await buyCinemaTicket(money);
//       const result = await goInsideCinema(ticket);

//       console.log(result);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   watchMovie();

//TASK 6
// const { buyTollRoadCard, topUpBalance, useTollRoad } = require('./utils');

// async function getTollAccess() {
//   try {
//     const card = await buyTollRoadCard(25);
//     console.log('Toll road card bought');
//     console.log(card);

//     const cardWithBalance = await topUpBalance(card, 10);
//     console.log('Toll road card topped up');
//     console.log(cardWithBalance);

//     await useTollRoad(cardWithBalance);
//     console.log('Toll road used');
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// // Jalankan fungsi getTollAccess()
// getTollAccess();

// const message = (name) => {
//     console.log(`Hello ${name}`);
//  }

// //  message('JavaScript');
// const initialMemoryUsage = 100 
// const yourName = "Beni"
// const environment = 0

// for(let i = 0; i <= 10000; i++) {
// // Proses looping ini akan membuat penggunaan memori naik
// }

// const currentMemoryUsage = initialMemoryUsage

// console.log(`Hai, ${yourName}`);
// console.log(`Mode environment: ${environment}`)
// console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
// var _ = require('lodash');

// const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], (n) => n % 2);

// console.log(myOddEvenArray);
// const { EventEmitter } = require('events');

// const myEventEmitter = new EventEmitter();

// const makeCoffee = ({ name }) => {
//     console.log(`Kopi ${name} telah dibuat!`);
// };

// myEventEmitter.on('coffee-order', makeCoffee);

// // Memicu event 'coffee-order' terjadi.
// myEventEmitter.emit('coffee-order', { name: 'Tubruk' });

// /**
//  * output:
//  * Kopi Tubruk telah dibuat!
//  */

// const { EventEmitter } = require('events');

// const myEventEmitter = new EventEmitter();

// const yourName = ({ name }) => {
//     console.log(`Halo ${name} selamat Ulang tahun`);
// };

// // const makeParty = ({ birthday }) => {
// //     console.log(`Bill sebesar ${birthday} telah dibuat!`);
// // }

// // myEventEmitter.on('coffee-order', makeCoffee);
// myEventEmitter.on('birthDay', yourName);

// myEventEmitter.emit('birthDay', { name: 'Beni'});

// /**
//  * output:
//  * Kopi Tubruk telah dibuat!
//  * Bill sebesar 15000 telah dibuat!
//  */

// // const { EventEmitter } = require('events');

// // const myEventEmitter = new EventEmitter();

// // const birthdayEventListener = (name) => {
// //     console.log(`Happy birthday ${name}!`);
// // }


// const fs = require('fs');

// const data = fs.readFileSync('task.txt', 'UTF-8');
// console.log(data);


// const fs = require('fs');

// const readableStream = fs.createReadStream('./task.txt', {
//     highWaterMark: 10
// });

// readableStream.on('readable', () => {
//     try {
//         process.stdout.write(`[${readableStream.read()}]`);
//     } catch(error) {
//         // catch the error when the chunk cannot be read.
//     }
// });

// readableStream.on('end', () => {
//     console.log('Done');
// });

// const fs = require('fs');

// const writableStream = fs.createWriteStream('text.txt');

// writableStream.write('Ini merupakan teks baris pertama!\n');
// writableStream.write('Ini merupakan teks baris kedua!\n');
// writableStream.end('Akhir dari writable stream!');




//task 7
// const fs = require('fs');
// const { createReadStream, createWriteStream } = require('fs');
// const { pipeline } = require('stream');

// // Buat stream untuk membaca berkas input.txt
// const readStream = createReadStream('task.txt', { encoding: 'utf8' });

// // Buat stream untuk menulis ke berkas output.txt
// const writeStream = createWriteStream('text.txt', { encoding: 'utf8' });

// // Gunakan pipeline() untuk menghubungkan stream pembaca dan penulis
// pipeline(
//   readStream, // stream pembaca
//   writeStream, // stream penulis
//   (err) => {
//     if (err) {
//       console.error('Gagal menulis berkas:', err);
//     } else {
//       console.log('Teks berhasil ditulis pada berkas text.txt');
//     }
//   }
// );
const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('X-Powered-By', 'NodeJS');
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;

    const { method, url } = request;

    if(url === '/') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah homepage',
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`,
            }));
        }
    } else if(url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Halo! Ini adalah halaman about',
            }));
        } else if(method === 'POST') {
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
 
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about`,
                }));
            });
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses menggunakan ${method}, request`
            }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }));
    }
}


const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});