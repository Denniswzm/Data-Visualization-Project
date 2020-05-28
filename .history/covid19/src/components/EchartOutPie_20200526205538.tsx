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
        backgroundColor: 'white',
    
        title: {
            text: ' Gender',
            left: 'center',
            // top: 20,
            textStyle: {
                color: 'black'
            }
        },
    
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
    
        visualMap: {
            show: false,
            min: 5000,
            max: 10000,
            // inRange: {
            //     colorLightness: [0, 1]
            // }
        },
        series: [
            {
                name: 'Gender',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: out.data,
                roseType: 'radius',
                label: {
                    color: 'black'
                },
                labelLine: {
                    lineStyle: {
                        color: 'black'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                itemStyle: {
                    color: 'black',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
    
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
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