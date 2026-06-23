import { app } from "./firebase-config.js";

import {
  getDatabase,
  ref,
  onValue
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const db = getDatabase(app);

// =========================
// ELEMENT
// =========================

const humidDisplay =
  document.getElementById("humid-display");

const humidProgress =
  document.getElementById("humid-progress");

const lastUpdate =
  document.getElementById("last-update");

const alertContainer =
  document.getElementById("alert-container");

const alertMessage =
  document.getElementById("alert-message");

// =========================
// CHART
// =========================

const ctx =
document.getElementById("sensorChart");

const sensorChart =
new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Kelembaban Tanah (%)",
        data: [],
        tension: 0.4
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

// =========================
// UPDATE CHART
// =========================

function addChartData(nilai)
{
  const now =
  new Date().toLocaleTimeString();

  sensorChart.data.labels.push(now);

  sensorChart.data.datasets[0].data.push(nilai);

  if(sensorChart.data.labels.length > 10)
  {
    sensorChart.data.labels.shift();
    sensorChart.data.datasets[0].data.shift();
  }

  sensorChart.update();
}

// =========================
// FIREBASE LISTENER
// =========================

onValue(
  ref(db, "sensor/kelembabanTanah"),
  (snapshot) =>
  {
    const nilai = snapshot.val();

    if(nilai === null) return;

    // tampil angka

    humidDisplay.innerHTML =
      `${nilai}<span>%</span>`;

    // progress bar

    humidProgress.style.width =
      `${nilai}%`;

    // waktu update

    lastUpdate.innerText =
      new Date().toLocaleString("id-ID");

    // chart

    addChartData(nilai);

    // alert sederhana

    if(nilai < 30)
    {
      alertContainer.classList.remove("d-none");

      alertMessage.innerText =
        "⚠️ Tanah terlalu kering!";
    }
    else
    {
      alertContainer.classList.add("d-none");
    }
  }
);

// =========================
// DISABLE PUMP BUTTON
// SEMENTARA BELUM DIPAKAI
// =========================

window.controlPump = function(status)
{
  alert(
    "Kontrol pompa akan diaktifkan besok 😊"
  );
};