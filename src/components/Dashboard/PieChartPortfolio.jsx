
import React, { memo } from "react";
import { Pie } from "react-chartjs-2";

const PieChartPortfolio = (props) => {
    var data = props.securityValuations;

    let labels = []
    data.map((val) => {
        labels.push( val?.security?.name)
    })

    let dataset = []
    data.map((val) => {
        dataset.push( val?.marketValue)
    })

    const barData = {
        labels,
        datasets: [
            {
            data: dataset,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            },
        ],
    };
    const options = { 
        responsive: true,
        plugins: {
            legend: {
              display: false
            },
            datalabels: {
                display: true,
                color: "white",
                font: {
                    size: 11,
                    weight: 600
                },
            }
        },
        
    };

    return (
        <React.Fragment>
            <Pie data={barData} options={options} />
        </React.Fragment>
    );
};

export default memo(PieChartPortfolio);