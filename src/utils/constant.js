// project images
import Airbnb from '../assets/airbnb.png';
import BusArrival from '../assets/BusArrival.png';
import Poverty from '../assets/ASEAN.png';
import baseball from '../assets/baseball.png';
import tiki from '../assets/Tiki.png';
import fk from '../assets/fk.png';

// skills images
import Html from '../assets/html5.svg';
import Js from '../assets/javascript.svg';
import React from '../assets/react.svg';
import Tailwind from '../assets/tailwindcss.svg';
import pandas from '../assets/icons8-pandas (1).svg';
import tableau from '../assets/icons8-tableau-software.svg';
import plotly from '../assets/plotly.jpeg';
import c from '../assets/icons8-c.svg';
import python from '../assets/icons8-python.svg';
import R from '../assets/icons8-r-project.svg';
import pytorch from '../assets/icons8-pytorch.svg';
import sql from '../assets/icons8-sql-48.png';
import streamlit from '../assets/icons8-streamlit.svg';
import matplotlib from '../assets/Matplotlib.svg';
import tensor from '../assets/icons8-tensorflow.svg';
import keras from '../assets/Keras.svg';
import pbi from '../assets/pbi.svg';
import sap from '../assets/sap.svg';
import alteryx from '../assets/alteryx.png';
import scikit from '../assets/scikit-learn.svg';
import seaborn from '../assets/seaborn-1.svg';
import Aspark from '../assets/spark.svg';

// involvement images
import adopt from '../assets/Involvements/adoptablobk.jpg';
import beach from '../assets/Involvements/beachcleanups.jpg';
import commserve from '../assets/Involvements/commserveerc.jpg';
import mission from '../assets/Involvements/missionx.jpg';
import poly from '../assets/Involvements/polyforum.jpg';
import litterlifters from '../assets/Involvements/sbwlitter.jpg';
import ecocleanshores from '../assets/Involvements/ecpCleanshores.jpg';
import kayak from '../assets/Involvements/jkyn.jpg';
import ecobottles from '../assets/Involvements/Ecobottles.jpg';
import fop from '../assets/Involvements/fop.jpg';
import worldskills from '../assets/Involvements/worldskills.jpg';
import ercorientation from '../assets/Involvements/orientation.jpg';
import mapletree from '../assets/Involvements/mapletree.jpg';
import ncs from '../assets/Involvements/SustAInaHack.jpg';
import workshop from '../assets/Involvements/workshop.jpg';
import sylp from '../assets/Involvements/sylp.jpg';
import mindful from '../assets/Involvements/mindfulcardio.jpg';

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
    liveUrl: 'https://app.powerbi.com/links/dpuR3Q-F8i?ctid=cba9e115-3016-4462-a1ab-a565cba0cdf1&pbi_source=linkShare',
    presentationURL: 'https://www.google.com',
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
    icon: c,
  },

  {
    id: 4,
    name: 'SQL',
    icon: sql,
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
    name: 'React.js',
    icon: React,
  },


  {
    id: 8,
    name: 'Tailwind CSS',
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
    icon: seaborn,
  },

  {
    id: 4,
    name: 'Plotly',
    icon: plotly,
  },

  {
    id: 5,
    name: 'Power BI',
    icon: pbi,
  },

  {
    id: 6,
    name: 'Tableau',
    icon: tableau,
  },

  {
    id: 7,
    name: 'SAP Analytics Cloud',
    icon: sap,
  },

];

export const datascience = [
  {
    id: 1,
    name: 'TensorFlow',
    icon: tensor,
  },

  {
    id: 2,
    name: 'PyTorch',
    icon: pytorch,
  },

  {
    id: 3,
    name: 'Scikit-learn',
    icon: scikit,
  },

  {
    id: 4,
    name: 'Keras',
    icon: keras,
  },

  {
    id: 5,
    name: 'Apache Spark',
    icon: Aspark,
  },

  {
    id: 6,
    name: 'Streamlit',
    icon: streamlit,
  },

  {
    id: 7,
    name: 'Alteryx',
    icon: alteryx,
  },

]; 


export const involvements = [
  {
    id: 1,
    title: 'Youth Corps Singapore',
    description:
      'A part of Youth Corps Singapore, engaging in community service and leadership development programs to contribute to social causes.',
    images: [
      { image: mission, description: 'Mission X 2023 ' },
      { image: sylp, description: 'Singapore Young Leaders Programme 2024' },
      { image: poly, description: 'Poly Forum 2024' },
      { image: litterlifters, description: 'LitterLifters 2024-2025' }
    ],
  },
  {
    id: 2,
    title: 'Community Service',
    description:
      'Organised and participated in community service initiatives, including beach clean-ups and environmental conservation projects, to give back to the community.',
    images: [
      { image: mindful, description: 'Project Mindful Cardio @NewLifeCommunity Service' },
      { image: kayak, description: 'JKYN Kayak100 @Marina Bay' },
      { image: ecocleanshores, description: 'CleanShores @East Coast Park' },
      { image: ecobottles, description: 'Eco Bottles @Little Seeds Preschool' }
    ],
  },
  {
    id: 3,
    title: 'Environmental Rangers Club',
    description:
      'Executive member of the Environmental Rangers Club in Ngee Ann Polytechnic, leading initiatives to promote environmental awareness and sustainability on campus.',
    images: [
      { image: ercorientation, description: 'ERC Orientation Day' },
      { image: workshop, description: 'Student-Led Environmental Workshops' },
      { image: commserve, description: 'Student-Led Community Service Events' },
      { image: beach, description: 'Beach Clean-ups' },
      { image: adopt, description: 'MOE Adopt-A-Block initiative' }
    ],
  },
  {
    id: 4,
    title: 'Hackathons',
    description:
      'Participated in various hackathons, collaborating with teams to develop innovative solutions to real-world problems.',
    images: [
      { image: ncs, description: 'NCS SustAIn4Change Ideathon 2024' },
      { image: mapletree, description: 'Mapletree X NP Hack 2025 - Fourth Place' }
    ],
  },

  {
    id: 4,
    title: 'ICT Society',
    description:
      'Member of the ICT Society in Ngee Ann Polytechnic, volunteering for events and workshops to bring students together for fun and memorable experiences during their studies.',
    images: [
      { image: fop, description: 'Freshman Orientation Programme - Game Master' },
      { image: BusArrival, description: 'Red Camp - Student Ambassador' },
      { image: worldskills, description: 'Worldskills - Student Ambassador' }
    ],
  },

];