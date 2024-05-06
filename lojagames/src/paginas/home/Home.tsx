import React from 'react';
import './Home.css';

interface minhaProps {
    title: string;
    description: string;
  }

function Home(props:minhaProps){
    return (
        <>
            <h1 className="titulo">Home</h1>
            <img src="https://i.imgur.com/H88yIo2.png" alt="Imagem Tela Inicial" className="img"/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </>
    );
}

export default Home;