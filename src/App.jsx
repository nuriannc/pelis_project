import { useState } from "react";
import { Buscador } from "./Buscador";
import GridGifs from "./GridGifs";

function App() {
  const [valorInput, setValorInput] = useState('');
  const [gifs, setGifs] = useState([])
  const apiKey=import.meta.env.VITE_API_KEY_GIFS
  console.log(apiKey)

  const onChange = (evento) => {
    const valor = evento.target.value;
    setValorInput(valor);
  }

  const getGifs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data.data;
  }

  const onSubmit = async (evento) => {
    evento.preventDefault()
    const gifs = await getGifs(valorInput)
    setGifs(gifs)

  }

  return (
    <div className="App">

      <Buscador
        valorInput={valorInput}
        onChange={onChange}
        onSubmit={onSubmit}
      />

      <GridGifs gifs={gifs} />
    </div>
  )
}

export default App
