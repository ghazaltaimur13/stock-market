
import React, { memo } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Colors
} from 'chart.js';
import { Line } from "react-chartjs-2";
import moment from "moment";
import { useTranslation } from "react-i18next";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Colors
);

const LineChart = (props) => {
    var data = props.securityTimeSeries;
    const { t } = useTranslation();

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text:t('Market Value Chart'),
          },
          colors: {
            enabled: true,
            forceOverride: true
          }
        },
    };

    let dataset = []
    data.map((val) => {
        dataset.push( {
            label: val?.key?.name,
            data: val?.values.map((newVal) => {
                return newVal.value;
            }),
            fill: true,
            lineTension: 0.5,
            borderWidth: 2,
        })
    })
    const dataLine = {
        labels: data[0]?.values.map((val) => {
            return moment(val.key).format("DD-MMM-YY");
        }),
        datasets: dataset
    };

      
    return (
        <React.Fragment>
            <Line options={options} data={dataLine} width={100} height={50} />
        </React.Fragment>
    );
};

export default memo(LineChart);
