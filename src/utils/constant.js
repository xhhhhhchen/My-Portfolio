// project images
import Project1 from '../assets/project-1.png';
import Project3 from '../assets/project-2.png';
import Project2 from '../assets/project-3.png';

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
    title: 'capstone project',
    description:
      " capstone project description here",
    image: Project1,
    stack: ['Data Analysis', 'Machine Learning', 'Streamlit'], 
    liveUrl: '#Airbnb',
    sourceUrl: 'https://www.google.com',
  },

  {
    id: 2,
    title: 'Deep Learning project here',
    description:
      "deepp learning description here",
    image: Project1,
    stack: ['some stack'], 
    liveUrl: '#Airbnb',
    sourceUrl: 'https://www.google.com',
  },

  {
    id: 3,
    title: 'Bus Prediction App',
    description:
      'Developed a data pipeline through Alteryx for real-time data streaming and created an end-user interface using Streamlit.',

    image: Project2,
    stack: ['Data Engineering', 'StreamLit'],
    liveUrl: 'https://www.google.com',
    sourceUrl: 'https://www.google.com',
  },


  {
    id: 4,
    title: 'ASEAN Poverty Pulse',
    description:
      'Conducted data analysis on ASEAN poverty and health issues, created dashboards that highlights key insights to support poverty reduction improving living conditions',
    image: Project3,
    stack: ['Data Analysis'],
    liveUrl: 'https://www.google.com',
    sourceUrl: 'https://www.google.com',
  },

  {
    id: 5,
    title: 'Airbnb Price Prediction',
    description:
      "Developed a pricing prediction model with Python and machine learning based on Singapore's Airbnb listings, and deploying it using Streamlit. ",
    image: Project1,
    stack: ['Data Analysis', 'Machine Learning', 'Streamlit'], 
    liveUrl: '#Airbnb',
    sourceUrl: 'https://www.google.com',
  },

  {
    id: 6,
    title: 'Major League Baseball database',
    description:
      'Developed a linear regression model to predict the win rate of teams in the Major League Baseball (MLB) using historical data and player statistics.',
    image: Project3,
    stack: ['Data Analysis','Machine learning'],
    liveUrl: 'https://www.google.com',
    sourceUrl: 'https://www.google.com',
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