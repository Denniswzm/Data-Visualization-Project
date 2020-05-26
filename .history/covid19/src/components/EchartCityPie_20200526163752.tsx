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

class EchartCityPie extends React.Component {

    options = {
        backgroundColor: '#2c345',
    
        title: {
            text: 'Report City',
            left: 'center',
            // top: 20,
            textStyle: {
                color: '#ccc'
            }
        },
    
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
    
        visualMap: {
            show: false,
            min: 4000,
            max: 10000,
            // inRange: {
            //     colorLightness: [0, 1]
            // }
        },
        series: [
            {
                name: 'city',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                    // {value: 8848, name: 'FEMALE'},
                    // {value: 6392, name: 'MALE'},
                    // {value: 135, name: 'UNKNOWN'},
                    // {value: 2, name: 'TRANSGENDER'},
                    // {value: 3, name: 'OTHER'}
//                     {value: Toronto , name: 4619 },
//                     {value: Mississauga , name: 2211 },
//                     {value: Newmarket , name: 1401 },
//                     {value: Ottawa , name: 1206 },
//                     {value: Whitby , name: 905 },
//                     {value: Waterloo , name: 608 },
//                     {value: Windsor , name: 561 },
//                     {value: Thorold , name: 462 },
//                     {value: Oakville , name: 433 },
//                     {value: Mississauga , name: 2211 },
//                     {value: Mississauga , name: 2211 },
//                     {value: Mississauga , name: 2211 },
//                     {value: Mississauga , name: 2211 },
//                     {value: Mississauga , name: 2211 }
//                     Windsor              561
// Thorold              462
// Oakville             433
// Hamilton             404
// London               382
// Brockville           304
// Guelph               262
// Barrie               254
// Simcoe               176
// Point Edward         174
// Port Hope            160
// Brantford             98
// Cornwall              91
// Peterborough          84
// Owen Sound            74
// Thunder Bay           70
// Chatham               66
// Kingston              58
// Timmins               57
// St. Thomas            56
// Sudbury               52
// Stratford             44
// Belleville            40
// Pembroke              15
// Kenora                15
// North Bay             14
// Sault Ste. Marie      13
// New Liskeard          12
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                labelLine: {
                    lineStyle: {
                        color: 'white'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                itemStyle: {
                    color: 'white',
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

export default EchartCityPie;