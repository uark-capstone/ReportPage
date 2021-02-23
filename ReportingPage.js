

var chart = new Chart(document.getElementById("chart"), {
    responsive: true,
    type: 'line',
    data: {
        labels: ["9:30 AM", "9:35 AM", "9:40 AM", "9:45 AM", "9:50 AM", "9:55 AM", "10:00 AM"],
        datasets:
            [
                {
                    data: [12,23,31,41,12,12,9],
                    label: "All Emotions",
                    backgroundColor: "#ff602a",
                    borderColor: "#ff602a",
                    fill: false,
                    fontColor: "black"


                },
                {
                  data: [2, 4, 2, 6, 7, 10, 0],
                    label: "Happiness",
                    backgroundColor: "#d518d5",
                    borderColor: "#d518d5",
                    fill: false,
                    fontColor: "black"


                }
                ,
                {
                    data: [2, 9, 7, 6, 7, 11, 3],
                    label: "Surprise",
                    backgroundColor: "#ffdb00",
                    borderColor: "#ffdb00",
                    fill: false,
                    fontColor: "black"


                },
                {
                    data: [1, 1, 3, 4, 5, 9, 1],
                    label: "Sadness",
                    backgroundColor: "blue",
                    borderColor: "blue",
                    fill: false,
                    fontColor: "black"


                },
                                {
                    data: [5.6, 1, 5., 4, 5, 7, 1],
                    label: "Absent from Camera",
                    backgroundColor: "orange",
                    borderColor: "orange",
                    fill: false,
                    fontColor: "black"


                }
            ]

    },
    options: {

        title:
        {
            display: true,
            text: "Here's how today went:",
            fontColor: 'black',
            defaultFontFamily: 'Roboto',
            defaultFontSize: 14
        },
        legend: {
            display: true,
            labels: {
                font:
                {
                    family: 'Roboto',
    
                }
            }
        }


    }



});
