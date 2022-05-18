import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export default function GifExpertApp() {
  //const categorias = ["One Punch", "Samurai X", "Dragon Ball"];
  //se crea un hook use state
  const [categoria, setCategoria] = useState(['Guku']);
  // const [list, setList] = useState([...categoria]);

  // const handleAdd = () => {
  //   //setList([...list, categoria]);
  //   //setCategoria("");
  //   //setCategoria([...categoria, categoria]);
  // };
  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategoria={setCategoria} />
      <hr />
      {/* se agrega un boton y una caja de etxto para agregar una nueva categoria */}
      {/* <p>Agregar nueva categoria </p> */}
      {/* en el input capturo el dato ingresado */}
      {/* <input type={"text"} onChange={(e) => setCategoria(e.target.value)} /> */}
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {/* se habre llaves para ejecutar codigo javascript */}
        {
          //se recorre el array con map y se aigna categoria
          categoria.map((category) => (
            //aqui recorre el array en cada item y y retorna li con cada item del array
            //el li tiene una Key que va a ser categoria
            // return <li key={categoria}>{categoria}</li>;
            <GifGrid key={category} category={category} />
          ))
        }
      </ol>
    </>
  );
}
