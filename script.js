// Untuk menampilkan dan menyembunyikan navigasi (navbar). 
document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    //Validasi semua variable ada
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  };

  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  // Fungsi untuk menambahkan warna pada link yang aktif
  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  // Menambahkan event listener untuk setiap link
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

});


// Mengambil semua elemen anchor yang memiliki kelas "contentNav" di dalam elemen nav
const navList = document.querySelectorAll("nav a.contentNav");
  console.log(navList);
  const mainContainer = document.getElementById("main-content");
  console.log(mainContainer);

  navList.forEach((list) => {
    list.addEventListener("click", async (e) => {
      e.preventDefault();
      const link = (e.target.href != undefined) ? e.target.href : e.target.parentElement.href
      console.log('link'+link);
      const response = await fetch(link, { method: "get" });
      const htmlText = await response.text();

      // Membuat dokumen dari teks HTML
      var doc = new DOMParser().parseFromString(htmlText, "text/html");
      console.log(doc.documentElement);
      // Memasukkan konten dari dokumen yang dibuat ke dalam konten utama
      mainContainer.innerHTML = doc.documentElement.innerHTML;
    });
  });


  // Menambahkan event listener saat halaman dimuat
  window.addEventListener('load' , async e =>{
    // Mengambil konten halaman dashboard saat halaman dimuat
      const response = await fetch('html/dashboard.html', { method: "get" });
      const htmlText = await response.text();
        console.log(response)
      var doc = new DOMParser().parseFromString(htmlText, "text/html");
      console.log(doc.documentElement);
      // Memasukkan konten halaman dashboard ke dalam konten utama
      mainContainer.innerHTML = doc.documentElement.innerHTML;
  });

  



function copyLink() {
  // Dapatkan elemen dengan ID "linkToCopy" dan simpan dalam variabel copyText
  var copyText = document.getElementById("linkToCopy");
  
  // Pilih teks di dalam elemen input
  copyText.select();
  
  // Salin teks yang dipilih ke clipboard
  document.execCommand("copy");
  
  // Tampilkan alert untuk memberi tahu pengguna bahwa tautan telah berhasil disalin
  alert("Tautan berhasil disalin: " + copyText.value);
}


//Script untuk menampilkan pesan alert
function showUploadAlertResep() {
    // Update keterangan upload
    var uploadInfo = document.getElementById("uploadInfo");
    uploadInfo.innerHTML = "Image uploaded successfully!";
    uploadInfo.className = "alert-message alert alert-success";
    uploadInfo.style.height = "20px";
    uploadInfo.style.padding = "0px";
    uploadInfo.style.marginTop = "5px";
  
  // Menghapus elemen alert setelah beberapa detik
  setTimeout(function() {
    uploadInfo.remove();
  }, 2000); // Hapus setelah 3 detik (3000 milidetik)

}


//Script untuk menampilkan pesan alert
function showUploadAlertProduk() {
  // Update keterangan upload
  var uploadInfo = document.getElementById("uploadInfo");
  uploadInfo.innerHTML = "Image uploaded successfully!";
  uploadInfo.className = "alert-message alert alert-success";
  uploadInfo.style.height = "20px";
  uploadInfo.style.padding = "0px";
  uploadInfo.style.marginTop = "5px";

// Menghapus elemen alert setelah beberapa detik
setTimeout(function() {
  uploadInfo.remove();
}, 2000); // Hapus setelah 3 detik (3000 milidetik)

}

