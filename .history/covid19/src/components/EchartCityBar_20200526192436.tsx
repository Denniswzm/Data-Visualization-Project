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
            data: city.data.map(x => x.name)
        },
        series: [
            {
                type: 'bar',
                data: city.data.map(x => x.value)
            }
        ]
    };
    
    render() {
        return (
            <div>
                <ReactEcharts option={this.options} opts={{height: "1000px"}}/>
            </div>
        )
    }
}

export default EchartCityBar;