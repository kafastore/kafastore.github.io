// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Klik dimana saja menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// Temukan semua elemen judul menu
const menuTitles = document.querySelectorAll('.menu-card-title');

// Temukan semua elemen deskripsi menu
const menuDescriptions = document.querySelectorAll('.menu-card-description');

// Tambahkan event listener untuk setiap judul menu
menuTitles.forEach((title) => {
  title.addEventListener('click', (event) => {
    // Ambil ID deskripsi menu yang sesuai dengan judul yang diklik
    const descriptionId = event.target.nextElementSibling.id;

    // Temukan elemen deskripsi berdasarkan ID dan tampilkan atau sembunyikan
    const descriptionElement = document.getElementById(descriptionId);

    if (descriptionElement.style.display === 'block') {
      descriptionElement.style.display = 'none';
    } else {
      descriptionElement.style.display = 'block';
    }
  });
});

// Temukan semua tombol "Beli"
const buyButtons = document.querySelectorAll('.buy-button');

// Fungsi untuk mengirim pesan ke WhatsApp dengan pesan sesuai produk
function sendMessageToWhatsApp(productName) {
  const phoneNumber = '+6282228633955'; // Ganti dengan nomor WhatsApp yang sesuai
  const message = `Halo, saya ingin memesan ${productName}`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL);
}

// Tambahkan event listener ke setiap tombol "Beli"
buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.item; // Dapatkan nama produk dari atribut data-item
    sendMessageToWhatsApp(productName); // Kirim pesan ke WhatsApp dengan produk yang sesuai
  });
});

// Fungsi untuk mengirim pesan ke WhatsApp
function sendWhatsAppMessage() {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  // Gantilah nomor WhatsApp berikut dengan nomor WhatsApp Anda
  const phoneNumber = '+6282228633955';

  // Membuat pesan yang akan dikirim ke WhatsApp
  const whatsappMessage = `Halo, saya ${name} ingin memberi ulasan produk anda:\n\n${message}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Buka tautan WhatsApp dengan pesan yang sudah dibuat
  window.open(whatsappURL);
}

// Event listener untuk mengirim pesan saat formulir disubmit
document.getElementById('message-form').addEventListener('submit', function (e) {
  e.preventDefault();
  sendWhatsAppMessage();
});
