document.addEventListener("DOMContentLoaded", function () {
  const ctx = document
    .getElementById("customTestResultsChart")
    .getContext("2d");
  const testResultsChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["0", "22.5", "45", "65.7", "90"],
      datasets: [
        {
          label: "Student score",
          data: [0, 30, 20, 80, 40],
          borderColor: "#a5a5a5",
          fill: false,
          tension: 0.4,
        },
        {
          label: "Class average score",
          data: [0, 40, 25, 70, 50],
          borderColor: "#ff9c33",
          fill: false,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          display: false, // Hide the horizontal axis
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});


  //   <script>
  //   document.addEventListener("DOMContentLoaded", function () {
  //     const ctx = document
  //       .getElementById("customTestResultsChart")
  //       .getContext("2d");
  //     const testResultsChart = new Chart(ctx, {
  //       type: "line",
  //       data: {
  //         labels: ["0", "22.5", "45", "65.7", "90"],
  //         datasets: [
  //           {
  //             label: "Student score",
  //             data: [0, 30, 20, 80, 40],
  //             borderColor: "#a5a5a5",
  //             fill: false,
  //             tension: 0.4,
  //           },
  //           {
  //             label: "Class average score",
  //             data: [0, 40, 25, 70, 50],
  //             borderColor: "#ff9c33",
  //             fill: false,
  //             tension: 0.4,
  //           },
  //         ],
  //       },
  //       options: {
  //         responsive: true,
  //         maintainAspectRatio: false,
  //         plugins: {
  //           legend: {
  //             display: false,
  //           },
  //         },
  //         scales: {
  //           y: {
  //             beginAtZero: true,
  //             ticks: {
  //               stepSize: 22.5,
  //             },
  //           },
  //         },
  //       },
  //     });
  //   });
  // </script> 