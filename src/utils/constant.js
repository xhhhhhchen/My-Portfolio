// project images
import Airbnb from '../assets/airbnb.png';
import BusArrival from '../assets/BusArrival.png';
import Poverty from '../assets/ASEAN.png';
import baseball from '../assets/baseball.png';
import tiki from '../assets/Tiki.png';
import fk from '../assets/fk.png';

// skills images
import Html from '../assets/html5.svg';
import Css from '../assets/css.svg';
import Js from '../assets/javascript.svg';
import React from '../assets/react.svg';
import Node from '../assets/nodejs.svg';
import TypeScript from '../assets/typescript.svg';
import Tailwind from '../assets/tailwindcss.svg';
import Postgres from '../assets/postgresql.svg';


export const projects = [
  {
    id: 1,
    title: 'Tiki Sales Prediction',
    description:
      "Developed a sales prediction model for Tiki with machine learning through PySpark, achieving an accuracy of 70% with Random Forest Regressor.",
    image: tiki,
    stack: ['Data Analysis', 'Machine Learning', 'Pyspark', 'Python'], 
    sourceUrl: 'https://www.google.com',
  },


  {
    id: 3,
    title: 'Bus Prediction App',
    description:
      'Developed a data pipeline through Alteryx for real-time data streaming and created an end-user interface using Streamlit.',

    image: BusArrival,
    stack: ['Data Engineering', 'StreamLit', 'Alteryx'],
    liveUrl: 'https://bus-arrival-app-ikmt5bqb7jkfv3d3ktrevl.streamlit.app/',
    sourceUrl: 'https://github.com/xhhhhhchen/Bus-Arrival-App',
    
  },



  {
    id: 5,
    title: 'Airbnb Price Prediction',
    description:
      "Developed a pricing prediction model with Python and machine learning based on Singapore's Airbnb listings, and deploying it using Streamlit. ",
    image: Airbnb,
    stack: ['Data Analysis', 'Machine Learning', 'Streamlit','Python'], 
    liveUrl: 'https://airbnb-price-prediction-ee5mrtypzqqo9tfm8e9gec.streamlit.app/',
    sourceUrl: 'https://github.com/xhhhhhchen/Airbnb-Price-Prediction',
  },

  {
    id: 4,
    title: 'ASEAN Poverty Pulse',
    description:
      'Conducted data analysis on ASEAN poverty and health issues, highlighting key insights to support poverty reduction and improving living conditions.',
    image: Poverty,
    stack: ['Data Analysis','Tableau'],
    presentationURL: 'https://www.google.com',
  },


  {
    id: 6,
    title: 'Major League Baseball database',
    description:
      'Developed a linear regression model to predict the win rate of teams in the Major League Baseball (MLB) using historical data and player statistics.',
    image: baseball,
    stack: ['Data Analysis','Machine learning','Python'],
    presentationURL: 'https://www.google.com',
  },
 
   
  {
    id: 2,
    title: 'Flipkart Sales Analysis',
    description:
      "Created business dashboards and reports using Power BI to analyze Flipkart's sales data, providing insights into sales performance and customer behavior.",
    image: fk,
    stack: ['Data Analysis', 'Power BI', 'Python'], 
    liveUrl: 'https://airbnb-price-prediction-ee5mrtypzqqo9tfm8e9gec.streamlit.app/',
    presentationURL: 'https://www.google.com',
  },

  
];

export const skills = [
  {
    id: 1,
    name: 'HTML',
    icon: Html,
  },

  {
    id: 2,
    name: 'CSS',
    icon: Css,
  },

  {
    id: 3,
    name: 'JavaScript',
    icon: Js,
  },

  {
    id: 4,
    name: 'React',
    icon: React,
  },

  {
    id: 5,
    name: 'Node',
    icon: Node,
  },

  {
    id: 6,
    name: 'TypeScript',
    icon: TypeScript,
  },

  {
    id: 7,
    name: 'Tailwind',
    icon: Tailwind,
  },

  {
    id: 8,
    name: 'Postgres',
    icon: Postgres,
  },
];