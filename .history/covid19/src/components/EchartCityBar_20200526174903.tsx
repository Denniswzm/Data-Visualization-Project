// // @ts-nocheck
// import React from "react";
// import ReactEcharts, {ReactEchartsPropsTypes} from "echarts-for-react";
// // import 'bootstrap/dist/css/bootstrap.css';
// import { Button, Card } from 'react-bootstrap';
// import axios from "axios"; 
// import echarts from "echarts";
// import PropTypes from "prop-types";
// import { bind, clear } from "size-sensor";
// import '../App.css';
// import gender from "../data/Gender.json";

// class EchartCityBar extends React.Component {

//     option = {
//         color: ['#3398DB'],
//         tooltip: {
//             trigger: 'axis',
//             axisPointer: {            // 坐标轴指示器，坐标轴触发有效
//                 type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
//             }
//         },
//         grid: {
//             left: '3%',
//             right: '4%',
//             bottom: '3%',
//             containLabel: true
//         },
//         xAxis: [
//             {
//                 type: 'category',
//                 data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//                 axisTick: {
//                     alignWithLabel: true
//                 }
//             }
//         ],
//         yAxis: [
//             {
//                 type: 'value'
//             }
//         ],
//         series: [
//             {
//                 name: '直接访问',
//                 type: 'bar',
//                 barWidth: '60%',
//                 data: [10, 52, 200, 334, 390, 330, 220]
//             }
//         ]
//     };
    
//     render() {
//         return (
//             <div>
//                 <ReactEcharts option={this.options}/>
//             </div>
//         )
//     }
// }

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
import gender from "../data/Gender.json";

class EchartCityBar extends React.Component {

    options = {
        backgroundColor: '#2c345',
    
        title: {
            text: ' Gender',
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
                data: gender.data,
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

export default EchartCityBar;