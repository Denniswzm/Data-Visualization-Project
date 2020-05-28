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
import gender from "../data/Gender.json";

class EchartGenderPie extends React.Component {

    option = {
        color: ['#3398DB'],
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        //         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        //     }
        // },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
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

export default EchartGenderPie;