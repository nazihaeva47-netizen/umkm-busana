let cart = JSON.parse(localStorage.getItem("cart")) || [];
let listProduk = document.getElementById("list-produk");
let totalEl = document.getElementById("total");

function renderCheckout() {
    listProduk.innerHTML = "";
    let totalHarga = 0;

    if (cart.length === 0) {
        listProduk.innerHTML = "<p>Keranjang masih kosong 😢</p>";
        totalEl.innerText = "";
        return;
    }

    cart.forEach((item, index) => {
        totalHarga += item.harga * item.qty;

        listProduk.innerHTML += `
            <div class="item">
                <div class="info">
                    <h4>${item.nama}</h4>
                    <p>Harga: Rp ${item.harga.toLocaleString()}</p>

                    <div class="qty">
                        <button onclick="kurangQty(${index})">−</button>
                        <span>${item.qty}</span>
                        <button onclick="tambahQty(${index})">+</button>
                    </div>

                    <button class="hapus-btn" onclick="hapusItem(${index})">
                        Hapus
                    </button>
                </div>
            </div>
        `;
    });

    totalEl.innerText = "Total: Rp " + totalHarga.toLocaleString();
}

// TAMBAH JUMLAH
function tambahQty(index) {
    cart[index].qty++;
    simpanCart();
}

// KURANG JUMLAH (minimal 1)
function kurangQty(index) {
    if (cart[index].qty > 1) {
        cart[index].qty--;
        simpanCart();
    }
}

// HAPUS ITEM
function hapusItem(index) {
    cart.splice(index, 1);
    simpanCart();
}

// SIMPAN & RENDER ULANG
function simpanCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCheckout();
}

function checkoutWA() {
    let pesan = "Halo, saya ingin pesan:%0A";
    let totalHarga = 0;

    cart.forEach(item => {
        pesan += `- ${item.nama} (${item.qty} pcs)%0A`;
        totalHarga += item.harga * item.qty;
    });

    pesan += `%0ATotal: Rp ${totalHarga.toLocaleString()}`;

    let noWA = "6285702302849"; // GANTI NOMOR WA
    window.open(`https://wa.me/${noWA}?text=${pesan}`, "_blank");
}

// WAJIB DIPANGGIL
renderCheckout();
