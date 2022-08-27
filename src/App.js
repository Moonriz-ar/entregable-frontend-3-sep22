import { useState } from 'react';

import Listado from './components/Listado';

// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {
  const [itemsCount, setItemsCount] = useState();

  function onAddItemToCart() {
    console.log('add item clicked');
  }

  return (
    <div className="App">
      {/* <Cabecera /> */}
      <Listado onAddItemToCart={onAddItemToCart} />
    </div>
  );
}

export default App;
