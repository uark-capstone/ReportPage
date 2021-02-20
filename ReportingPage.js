
new Chart(document.getElementById("chart"), {
    type: 'line',
    data: {
        labels: ["9:30 AM", "9:35 AM", "9:40 AM", "9:45 AM", "9:50 AM", "9:55 AM", "10:00 AM"],
        datasets:
            [
                {
                    data: [12,23,31,41,12,12,9],
                    label: "Expressions Detected",
                    borderColor: "#ff602a",
                    fill: false

                }

            ]

    },
    options: {

        title:
        {
            display: true,
            text: "Let's see how you did today:"

        }


    }



});
