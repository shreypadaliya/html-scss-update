document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("attendanceChart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Present", "Late", "Absent", "Holiday"],
      datasets: [
        {
          data: [93.98, 3.01, 2.01, 1],
          backgroundColor: ["#F5F5F5", "#FFCE56", "#FF6384", "#FFA500"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      cutout: "70%",
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  });
});



// <script>
// var ctx = document.getElementById("myChart").getContext("2d");
// var myChart = new Chart(ctx, {
//   type: "doughnut",
//   data: {
//     labels: ["Present", "Late", "Absent", "Holiday"],
//     datasets: [
//       {
//         data: [93.98, 2, 2, 2],
//         backgroundColor: ["#ffffff", "#ffcc00", "#ff6600", "#ff9900"],
//         borderColor: ["#ffffff", "#ffcc00", "#ff6600", "#ff9900"],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     cutoutPercentage: 50,
//   },
// });
// </script>