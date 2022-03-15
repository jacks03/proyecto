//paso1 :importar useState
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer"

// El primer paso para definir un componente es el nombre
// El nombre de un componente siempre debe iniciar en mayuscula
// ahora el componente basicamente es una funcion, por ende podemos crearlo
// usando function o arrow function
const PrimerComponente = () => {
  //como usar una variable en un componente
  const edad = 99
  //react tiene una funcion llamada useState
  //useState es un afuncion interja de react la cual se encarga de 
  //maneja el estado de las variables
  //para poder usar useStates debemos importarla desde react


  //al usar useStates la forma en la cual creamos una variable cambia
  //porque debemos definir 2 cosas primero el nopmbre de la variable y segundo
  //la funcion que se encarga de cambiar el estado de la vqariable
  //count : Esla variable que usaremos para poder mostrar el valor 
  //setCount: Es la funcion que se encarga de poder asignarle un valor  a count
  //para poder definnir esta variable como parte de useState debemos inicializar el valor 
  //de esta variable usando dentro de useState
  //ojo el valor que va dentro de useState4 sera el valor inicial de la variable

  const [count, setCount] =useState(0)
  // esta funcion retornar una vista
  // en react usamos return () para inidicar que lo que este dentro de los
  // parentesis sera el objeto visual que vamos a retornar
  // algo importante es que react solo puede retornar un componente a la vez
  // retorna solo un div

  //vamos a crear 2 funciones una para sumar y otra para restar*/
  // estas 2 funciones esta cambiando el estado de la variable count
  const sumar =()=> setCount(count + 1)
  

  const restar =() =>setCount(count - 1)

  const parametros = (n1, n2)=> {
    setCount(n1 + n2)
  }

  return (
    <div>
      <Header></Header>
      <h1>Hola mundo</h1>
      <div>
        <h4>Hola desde el componente{count}</h4>
        {/*vamos a crear 2 botones uno para poder sumarle 1 count y otro para restarle */}
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>
        {/*si queremos usar parentesis al momento de llamar a una funcion debemos primera
        ejecutarla como un callback */}
        {/*ademas es la forma en el caso nuestra reciba algun parametro */}
        <button onClick={()=>parametros(10,20)}>restar</button>
      </div>
      <Footer></Footer>
    </div>
  );
};

// Luego de crear el componente debemos exportarlo
// Esto es como decir que este archivo unicamente esta exportando este componete
export default PrimerComponente;