import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import moment from "moment";
import { useTranslation } from "react-i18next";

const HighChart = (props) => {
    const { t } = useTranslation();

    var data = props.securityTimeSeries;
    let dataset = [];
    data.map((val) => {
        dataset.push( {
            name: val?.key?.name,
            data: val?.values.map((newVal) => {
                return newVal.value;
            }),
            other: val?.values.map((newVal) => {
                return newVal.units;
            }),
        })
    })

    const options = {
        chart: {
          type: 'line'
        },
        title: {
          text: t('Market Value Chart')
        },
        series: dataset,
        xAxis: {
            categories: data[0]?.values.map((val) => {
                return moment(val.key).format("DD-MMM-YY");
            })
        },
        tooltip: {
            formatter: function() {
              // Custom tooltip formatting logic here
              return '<b>' + this.series.name + '</b><br/>' +
                'Date: ' + this.x + '<br/>' +
                'Value: ' + this.y.toFixed(3);
            }
        },
    
    };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default HighChart;