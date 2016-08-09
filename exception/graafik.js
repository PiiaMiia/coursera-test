window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
            {
                title: {
                    text: "Exceptions workload traffic",
                    fontSize: 20
                },

                animationEnabled: true,
                axisX: {
                    gridColor: "Silver",
                    tickColor: "silver",
                },

                toolTip: {
                    shared: true
                },

                theme: "theme2",
                axisY: {
                    gridColor: "Silver",
                    tickColor: "silver"
                },

                legend: {
                    verticalAlign: "center",
                    horizontalAlign: "right"
                },

                data: [
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "Inbox traffic TOTAL",
                        dataPoints: [
                            {label: "W23", y: 1878},
                            {label: "W24", y: 1371},
                            {label: "W25", y: 974},
                            {label: "W26", y: 1581},
                            {label: "W27", y: 1519},
                            {label: "W28", y: 1173},
                            {label: "W29", y: 1045},
                            {label: "W30", y: 1080},
                            {label: "W31", y: 951}
                        ]
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "Received TOTAL",
                        dataPoints: [
                            {label: "W23", y: 919},
                            {label: "W24", y: 704},
                            {label: "W25", y: 601},
                            {label: "W26", y: 763},
                            {label: "W27", y: 756},
                            {label: "W28", y: 658},
                            {label: "W29", y: 502},
                            {label: "W30", y: 539},
                            {label: "W31", y: 460}
                        ]
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "Sent TOTAL",
                        dataPoints: [
                           {label: "W23", y: 959},
                            {label: "W24", y: 667},
                            {label: "W25", y: 373},
                            {label: "W26", y: 818},
                            {label: "W27", y: 763},
                            {label: "W28", y: 515},
                            {label: "W29", y: 543},
                            {label: "W30", y: 541},
                            {label: "W31", y: 491}
                        ]
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "Exception tables",
                        dataPoints: [
                            {label: "W23", y: 925},
                            {label: "W24", y: 884},
                            {label: "W25", y: 1084},
                            {label: "W26", y: 830},
                            {label: "W27", y: 1017},
                            {label: "W28", y: 876},
                            {label: "W29", y: 1045},
                            {label: "W30", y: 939},
                            {label: "W31", y: 770}
                        ]
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "New exceptions",
                        dataPoints: [
                            {label: "W23", y: 424},
                            {label: "W24", y: 458},
                            {label: "W25", y: 665},
                            {label: "W26", y: 413},
                            {label: "W27", y: 742},
                            {label: "W28", y: 322},
                            {label: "W29", y: 354},
                            {label: "W30", y: 333},
                            {label: "W31", y: 313}
                        ]
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "Missing fund table",
                        dataPoints: [
                            {label: "W23", y: 52},
                            {label: "W24", y: 77},
                            {label: "W25", y: 110},
                            {label: "W26", y: 117},
                            {label: "W27", y: 219},
                            {label: "W28", y: 115},
                            {label: "W29", y: 163},
                            {label: "W30", y: 152},
                            {label: "W31", y: 153}
                        ]
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "Missing receipt table",
                        dataPoints: [
                            {label: "W23", y: 95},
                            {label: "W24", y: 104},
                            {label: "W25", y: 108},
                            {label: "W26", y: 118},
                            {label: "W27", y: 97},
                            {label: "W28", y: 119},
                            {label: "W29", y: 96},
                            {label: "W30", y: 69},
                            {label: "W31", y: 66}
                        ]
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "Approval table",
                        dataPoints: [
                            {label: "W23", y: 327},
                            {label: "W24", y: 401},
                            {label: "W25", y: 652},
                            {label: "W26", y: 329},
                            {label: "W27", y: 590},
                            {label: "W28", y: 515},
                            {label: "W29", y: 561},
                            {label: "W30", y: 529},
                            {label: "W31", y: 404}
                        ]
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "Vouchers table",
                        dataPoints: [
                            {label: "W23", y: 248},
                            {label: "W24", y: 123},
                            {label: "W25", y: 103},
                            {label: "W26", y: 61},
                            {label: "W27", y: 33},
                            {label: "W28", y: 23},
                            {label: "W29", y: 22},
                            {label: "W30", y: 20},
                            {label: "W31", y: 18}
                        ]
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "Critical table",
                        dataPoints: [
                            {label: "W23", y: 203},
                            {label: "W24", y: 179},
                            {label: "W25", y: 111},
                            {label: "W26", y: 107},
                            {label: "W27", y: 0},
                            {label: "W28", y: 0},
                            {label: "W29", y: 116},
                            {label: "W30", y: 99},
                            {label: "W31", y: 54}
                        ]
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "Other eProc table",
                        dataPoints: [
                            {label: "W23", y: 0},
                            {label: "W24", y: 0},
                            {label: "W25", y: 0},
                            {label: "W26", y: 98},
                            {label: "W27", y: 78},
                            {label: "W28", y: 104},
                            {label: "W29", y: 87},
                            {label: "W30", y: 70},
                            {label: "W31", y: 75}
                        ]
                    }
                ],
                legend:{
                    cursor: "pointer",
                    itemclick: function (e) {
                        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                            e.dataSeries.visible = false;
                        }

                        else {
                            e.dataSeries.visible = true;
                        }
                        chart.render();
                    }

                }
            });

    chart.render();


    $( "#addDataPoint" ).click(function() {
        chart.options.data[0].dataPoints.push({label: "W32", y: parseFloat($( "#inbox").val())});
        chart.options.data[1].dataPoints.push({label: "W32", y: parseFloat($( "#received").val())});
        chart.options.data[2].dataPoints.push({label: "W32", y: parseFloat($( "#sent").val())});
        chart.options.data[3].dataPoints.push({label: "W32", y: parseFloat($( "#tables").val())});
        chart.options.data[4].dataPoints.push({label: "W32", y: parseFloat($( "#new").val())});
        chart.options.data[5].dataPoints.push({label: "W32", y: parseFloat($( "#funds").val())});
        chart.options.data[6].dataPoints.push({label: "W32", y: parseFloat($( "#receipt").val())});
        chart.options.data[7].dataPoints.push({label: "W32", y: parseFloat($( "#approval").val())});
        chart.options.data[8].dataPoints.push({label: "W32", y: parseFloat($( "#vouchers").val())});
        chart.options.data[9].dataPoints.push({label: "W32", y: parseFloat($( "#critical").val())});
        chart.options.data[10].dataPoints.push({label: "W32", y: parseFloat($( "#other").val())});
        chart.render();
    });


};