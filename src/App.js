import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [personagens, setPersonagens] = useState([]);
  useEffect(
    () => {
      const listaDePersonagens = async () => {
        try{
          const  resposta = await axios.get("https://api.disneyapi.dev/character");
          setPersonagens(resposta.data.data);
        }catch(error){
        console.log(error);
      }
    }
    listaDePersonagens();
  }, []
  );
  return(
    <>
    <main>
      <h1>API DA DISNEY</h1>
    </main>
     {personagens.map((objeto) => (
        <li>
           <h3>{objeto.name}</h3>
           <img src={objeto.imageUrl}/>
        </li> 
     ))}
    </>
  );
}
export default App;
