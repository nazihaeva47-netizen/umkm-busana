const cards = document.querySelectorAll(".produk-card");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");

// EVENT KLIK KARTU
cards.forEach(card => {
  card.addEventListener("click", function (e) {
    e.preventDefault();

    // === AMBIL DATA ===
    const title = this.dataset.title;
    const img = this.dataset.img;
    const desc = this.dataset.desc;
    const link = this.dataset.link;

    // === ISI MODAL ===
    modalTitle.textContent = title;
    modalImg.src = img;
    modalDesc.textContent = desc;

    modal.style.display = "flex";

    // === PINDAH HALAMAN SETELAH 1 DETIK ===
    setTimeout(() => {
      window.location.href = link;
    }, 1000);
  });
});

// TUTUP MODAL
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// KLIK LUAR MODAL
window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};