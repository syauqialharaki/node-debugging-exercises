# Exercise 03

There's no coding involved in this exercise. Instead, I've provided two implementations of a for-loop that runs 10 times and prints out the variable `i` after 10ms.

Your task is to explain why the first loop prints out 10 "10"s, while the second loop prints out numbers 0-9?

```
10
10
10
10
10
10
10
10
10
10
0
1
2
3
4
5
6
7
8
9
```

Answer:

Hal tersebut (perbedaan output) terjadi karena jumlah dan cara pembuatan variabel i nya berbeda. Pada implementasi A, hanya terdapat satu variabel i yang digunakan bersama oleh seluruh iterasi sehingga nilainya terus berubah. Sementara pada implementasi B, penggunaan let yang bersifat block scope menyebabkan setiap iterasi for memiliki variabel i yang berbeda. Setiap kali loop memasuki blok iterasi yang baru, JavaScript membuat binding variabel i yang baru juga, bukan sekadar mengubah nilai dari variabel yang sama.

Ketika SetTimeout menjalankan callback setelah 10ms, mekanisme closure akan mengingat variabel i dari scope tempat callback itu dibuat, sehingga masing-masing callback mengakses nilai I yang diingatnya tersebut.

Keduanya sama-sama mengingat dan mengakses variabel i, hanya saja pada implementasi A seluruh callback mengingat variabel i yang sama, sehingga semuanya mencetak nilai terakhir, yaitu 10, sebaliknya pada implementasi B setiap callback mengingat variabel i yang berbeda, sehingga mencetak nilai sesuai iterasinya yakni 0, 1, 2, dan seterusnya hingga 9.
