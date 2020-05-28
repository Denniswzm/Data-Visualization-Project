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
import out from "../data/Outcome.json";

class EchartOutPie extends React.Component {

    options = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: out.data.map(x => x.name)
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                // label: {
                //     show: false,
                //     position: 'center'
                // },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: out.data
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

export default EchartOutPie;