import { useState, useEffect } from "react";
import { Botao } from "./components/Characters/styles";
import "./App.css";
import Characters from "./components/Characters";
import Global from "./styles/global";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);

  function addButton() {
    setPage(page + 1);
  }

  function subButton() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <>
      <Global />
      <Botao onClick={addButton}>Proxima Página</Botao>
      <Botao onClick={subButton}>Página Anterior</Botao>
      <Characters characterList={characterList} />
    </>
  );
}

export default App;
