// ================= CART SYSTEM =================

// ambil cart dari localStorage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// simpan cart
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
}

// TAMBAH KE KERANJANG (dipanggil dari tombol)
function tambahKeranjang(nama, harga, gambar) {
    let cart = getCart();

    let produk = cart.find(item => item.nama === nama);

    if (produk) {
        produk.qty += 1;
    } else {
        cart.push({
            nama: nama,
            harga: harga,
            gambar: gambar,
            qty: 1
        });
    }

    saveCart(cart);
    alert("Produk ditambahkan ke keranjang 🛒");
}

// UPDATE BADGE CART
function updateCartBadge() {
    let cart = getCart();
    let totalQty = 0;

    cart.forEach(item => {
        totalQty += item.qty;
    });

    let badge = document.getElementById("cart-count");
    if (badge) {
        badge.innerText = totalQty;
    }
}

// PINDAH KE CHECKOUT
function keCheckout() {
    window.location.href = "checkout.html";
}

// jalankan saat halaman dibuka
updateCartBadge();
