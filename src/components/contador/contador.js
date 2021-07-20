import React, { useState } from "react";

export default function Contador() {

const manejarEstado = useState(0); // incializar en 0

let valorActual = manejarEstado[0]; // contiene el valor actual de estado
let actualizarEstado = manejarEstado[1]; // funcionalidad o mecanismo que nos permite actualizar el estado

const sumar = () => {
  let n = valorActual + 1;
  actualizarEstado(n);
}

const restar = () => {
  let n = valorActual - 1;
  actualizarEstado(n);
}

const multiplicar = () => {
  let n = (valorActual * 2);
  actualizarEstado(n);
}

const resetvalue = () => {
  actualizarEstado(0);
}

return (
  <div>
    <h1>Contador</h1>
    <p>El valor es  : {valorActual}</p>
    <button onClick={sumar}>(+)</button>
    <button onClick={restar}>(-)</button>
    <button onClick={multiplicar}>(*2)</button>
    <button onClick={resetvalue}>(reset)</button>
  </div>
);
}

