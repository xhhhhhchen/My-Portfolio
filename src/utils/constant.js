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
import { Bus } from 'lucide-react';


export const projects = [
  {
    id: 1,
    title: 'Tiki Sales Prediction',
    description:
      "Developed a sales prediction model for Tiki with machine learning through PySpark, achieving an accuracy of 70% with Random Forest Regressor.",
    image: tiki,
    stack: ['Data Analysis', 'Machine Learning', 'Pyspark', 'Python'], 
    sourceUrl: 'https://github.com/xhhhhhchen/Tiki-Sales-Prediction.git',
  },


  {
    id: 3,
    title: 'Bus Prediction App',
    description:
      'Developed a data pipeline through Alteryx for real-time data streaming and created an end-user interface using Streamlit.',

    image: BusArrival,
    stack: ['Data Engineering', 'StreamLit', 'Alteryx'],
    liveUrl: 'https://bus-arrival-app-ikmt5bqb7jkfv3d3ktrevl.streamlit.app/',
    presentationURL: 'https://www.canva.com/design/DAGduuAiQCI/PboNqUYTXV3GZqXcVa7fiA/view?utm_content=DAGduuAiQCI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1726dfe9d0',
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

export const programming = [
  {
    id: 1,
    name: 'Python',
    icon: python,
  },

  {
    id: 2,
    name: 'R',
    icon: R,
  },

  {
    id: 3,
    name: 'C#',
    icon: csharp,
  },

  {
    id: 4,
    name: 'SQL',
    icon: SQL,
  },

  {
    id: 5,
    name: 'HTML',
    icon: Html,
  },

  {
    id: 6,
    name: 'JavaScript',
    icon: Js,
  },

  {
    id: 7,
    name: 'React',
    icon: React,
  },


  {
    id: 8,
    name: 'Tailwind',
    icon: Tailwind,
  },


];


export const analytics = [
  {
    id: 1,
    name: 'Pandas',
    icon: pandas,
  },

  {
    id: 2,
    name: 'matplotlib',
    icon: matplotlib,
  },

  {
    id: 3,
    name: 'Seaborn',
    icon: csharp,
  },

  {
    id: 4,
    name: 'Plotly',
    icon: csharp,
  },

  {
    id: 5,
    name: 'Power BI',
    icon: SQL,
  },

  {
    id: 6,
    name: 'Tableau',
    icon: Html,
  },

  {
    id: 7,
    name: 'SAP Analytics Cloud',
    icon: Js,
  },

];

export const datascience = [
  {
    id: 1,
    name: 'TensorFlow',
    icon: pandas,
  },

  {
    id: 2,
    name: 'PyTorch',
    icon: matplotlib,
  },

  {
    id: 3,
    name: 'Scikit-learn',
    icon: csharp,
  },

  {
    id: 4,
    name: 'Keras',
    icon: csharp,
  },

  {
    id: 5,
    name: 'Apache Spark',
    icon: SQL,
  },

  {
    id: 6,
    name: 'Streamlit',
    icon: Html,
  },


];


export const involvements = [
  {
    id: 1,
    title: 'Environmental Workshops',
    description:
      'Participated in data science workshops and hackathons, collaborating with peers to solve real-world data challenges.',
    images: [Airbnb, BusArrival, Airbnb, BusArrival],
    // image: [Airbnb],
  },
  {
    id: 2,
    title: 'Community Service',
    description:
      'Competed in various hackathons, developing innovative solutions to complex problems within tight deadlines.',
    // image: [Airbnb],
    images: [Airbnb],

  },
  {
    id: 3,
    title: 'Beach Clean-Ups',
    description:
      'Organized and participated in workshops and events to promote data science knowledge and skills among peers.',
    images: [Airbnb, BusArrival],
    // image: [Airbnb],
  },
  {
    id: 4,
    title: 'Hackathons',
    description:
      'Mentored junior students in data science concepts, providing guidance and support in their learning journey.',
    images: [Airbnb, BusArrival],
    // image: [Airbnb],
  },
  
];

