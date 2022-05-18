import React, { useState } from "react";
import PropTypes from 'prop-types';

export function AddCategory({setCategoria}) {
  const [inputValue, setInputValue] = useState('');

  //funcion que captura los datos ingresador en el input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    //para prevenir la actualizacion del formulario copmpleto
      e.preventDefault();
      //console.log('Sigo en el formulario');

    //se valida que los valores sean mayores a 2 campos
    if (inputValue.trim().length>2) {
      //se ejecuta la funcion setCAtegoria
      setCategoria(lista => [ inputValue,...lista]);
      //se iniccializa el setInputValue en vacio
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
          <input
              value={inputValue}
              onChange={handleInputChange} />
      
    </form>
  );
}


//proptypes permite que se valida que necesita una funcion requerida
AddCategory.propTypes = {
  setCategoria:PropTypes.func.isRequired
}