import React from "react";
import ReactEcharts from "echarts-for-react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card } from 'react-bootstrap';
import axios from "axios"; 
import echart_gl from "echarts-gl";
import echarts from "echarts";
import consts from "../Const/Const";
import mapFetch from "../Utils/Fetcher";
import PropTypes from "prop-types";
import updater from "../Utils/DataUpdater"
import { bind, clear } from "size-sensor";
import './App.scss';