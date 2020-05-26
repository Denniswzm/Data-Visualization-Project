import React from "react";
import ReactEcharts from "echarts-for-react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card } from 'react-bootstrap';
import axios from "axios"; 
import echarts from "echarts";
import PropTypes from "prop-types";
import { bind, clear } from "size-sensor";
import './App.css';

class EchartCityPie extends React.Component {
    
    render() {

    return (
    <Card className = "weeklyspecialtag">
        <a className = "weeklyspecialtext">Most Purchased Food</a>
        <a className = "more" type ="link">View All</a>
    </Card>
    )
    }
}

export default EchartCityPie;