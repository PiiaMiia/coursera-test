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
                            {label: "W26", y: 1581}
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
                            {label: "W26", y: 763}
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
                            {label: "W26", y: 818}
                        ]
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "Team",
                        dataPoints: [
                            {label: "W23", y: 605},
                            {label: "W24", y: 501},
                            {label: "W25", y: 317},
                            {label: "W26", y: 524}
                        ]
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "Missing funds",
                        dataPoints: [
                            {label: "W23", y: 8},
                            {label: "W24", y: 27},
                            {label: "W25", y: 43},
                            {label: "W26", y: 31}
                        ]
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "Missing receipt",
                        dataPoints: [
                            {label: "W23", y: 138},
                            {label: "W24", y: 62},
                            {label: "W25", y: 139},
                            {label: "W26", y: 91}
                        ]
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "PO completed",
                        dataPoints: [
                            {label: "W23", y: 60},
                            {label: "W24", y: 32},
                            {label: "W25", y: 35},
                            {label: "W26", y: 18}
                        ]
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "Reminders",
                        dataPoints: [
                            {label: "W23", y: 13},
                            {label: "W24", y: 7},
                            {label: "W25", y: 2},
                            {label: "W26", y: 3}
                        ]
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "Returned invoices",
                        dataPoints: [
                            {label: "W23", y: 27},
                            {label: "W24", y: 19},
                            {label: "W25", y: 5},
                            {label: "W26", y: 23}
                        ]
                    },
                    {
                        type: "spline",
                        showInLegend: true,
                        name: "Other eProc",
                        dataPoints: [
                            {label: "W23", y: 24},
                            {label: "W24", y: 18},
                            {label: "W25", y: 18},
                            {label: "W26", y: 5}
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
                            {label: "W26", y: 830}
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
                            {label: "W26", y: 117}
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
                            {label: "W26", y: 118}
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
                            {label: "W26", y: 329}
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
                            {label: "W26", y: 61}
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
                            {label: "W26", y: 107}
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
                            {label: "W26", y: 98}
                        ]
                    }
                ],
                legend:{
                    cursor: "pointer",
                    itemclick: function (e) {
                        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                            e.dataSeries.visible = false;
                        } else {
                            e.dataSeries.visible = true;
                        }
                        chart.render();
                    }
                }
            });

    chart.render();
}