// ===============================
// CLHOUSEGAME JAVASCRIPT
// ===============================

function openPS5() {
  document.getElementById("ps5Modal").classList.add("active");
}

function openDarts() {
  document.getElementById("dartsModal").classList.add("active");
}

function openRubik() {
  document.getElementById("rubikModal").classList.add("active");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}


// ===============================
// REAL TIME WIB
// ===============================

function getWIB() {
  const now = new Date();

  return now.toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }) + " WIB";
}


// ===============================
// INVOICE
// ===============================

function showInvoice(name, game, chosen) {

  document.getElementById("invoiceDate").textContent = getWIB();
  document.getElementById("invoiceName").textContent = name;
  document.getElementById("invoiceGame").textContent = game;
  document.getElementById("invoiceChosen").textContent = chosen;

  document.getElementById("invoiceModal").classList.add("active");
}


// ===============================
// PS5 ORDER
// ===============================

function orderPS5() {

  const game = document.getElementById("ps5Game").value;
  const name = document.getElementById("ps5Name").value.trim();

  if (!game) {
    alert("Silakan pilih game PS5 terlebih dahulu.");
    return;
  }

  if (!name) {
    alert("Silakan isi nama terlebih dahulu.");
    return;
  }

  const key = "clhousegame_ps5_" + game;

  let plays = parseInt(localStorage.getItem(key)) || 0;

  if (plays >= 2) {
    alert(
      "LIMIT REACHED!\n\n" +
      game +
      " sudah dimainkan 2 kali."
    );
    return;
  }

  plays++;

  localStorage.setItem(key, plays);

  closeModal("ps5Modal");

  showInvoice(
    name,
    "PS5 GAME CHOOSEN",
    game
  );
}


// ===============================
// DARTS ORDER
// ===============================

function orderDarts() {

  const darts = document.getElementById("dartsCount").value;
  const name = document.getElementById("dartsName").value.trim();

  if (!darts) {
    alert("Silakan pilih jumlah darts.");
    return;
  }

  if (!name) {
    alert("Silakan isi nama terlebih dahulu.");
    return;
  }

  const key = "clhousegame_darts_" + darts;

  let plays = parseInt(localStorage.getItem(key)) || 0;

  if (plays >= 2) {
    alert(
      "LIMIT REACHED!\n\n" +
      darts +
      " sudah dimainkan 2 kali."
    );
    return;
  }

  plays++;

  localStorage.setItem(key, plays);

  closeModal("dartsModal");

  showInvoice(
    name,
    "DARTS GAME CHOOSEN",
    darts
  );
}


// ===============================
// RUBIK ORDER
// ===============================

function orderRubik() {

  const rubik = document.getElementById("rubikType").value;
  const name = document.getElementById("rubikName").value.trim();

  if (!rubik) {
    alert("Silakan pilih jenis Rubik.");
    return;
  }

  if (!name) {
    alert("Silakan isi nama terlebih dahulu.");
    return;
  }

  const key = "clhousegame_rubik_" + rubik;

  let plays = parseInt(localStorage.getItem(key)) || 0;

  if (plays >= 2) {
    alert(
      "LIMIT REACHED!\n\n" +
      rubik +
      " sudah dimainkan 2 kali."
    );
    return;
  }

  plays++;

  localStorage.setItem(key, plays);

  closeModal("rubikModal");

  showInvoice(
    name,
    "RUBIK TYPE CHOOSEN",
    rubik
  );
}


// ===============================
// CLOSE MODAL KETIKA KLIK LUAR
// ===============================

window.addEventListener("click", function(event) {

  const modals = document.querySelectorAll(".modal");

  modals.forEach(function(modal) {

    if (event.target === modal) {
      modal.classList.remove("active");
    }

  });

});


// ===============================
// ESCAPE UNTUK CLOSE
// ===============================

document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {

    document.querySelectorAll(".modal").forEach(function(modal) {
      modal.classList.remove("active");
    });

  }

});
