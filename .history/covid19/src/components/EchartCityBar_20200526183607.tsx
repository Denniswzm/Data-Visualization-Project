// export default EchartCityBar;
// @ts-nocheck
import React from "react";
import ReactEcharts, {ReactEchartsPropsTypes} from "echarts-for-react";
// import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card } from 'react-bootstrap';
import axios from "axios"; 
import echarts from "echarts";
import PropTypes from "prop-types";
import { bind, clear } from "size-sensor";
import '../App.css';
import city from "../data/ReportCity.json";

class EchartCityBar extends React.Component {

    options = {
        title: {
            text: 'Confirmed Case in Cities',
            subtext: 'data from kaggle'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['2011年', '2012年']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
        },
        series: [
            {
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230]
            }
        ]
    };
    
    render() {
        return (
            <div>
                <ReactEcharts option={this.options}/>
            </div>
        )
    }
}

export default EchartCityBar;