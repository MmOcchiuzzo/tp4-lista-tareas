import { useState } from 'react';
import { Formulario } from './components/formulario';
import { Listado } from './components/listado';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  // Inicialización de personas como array vacío
  const [personas, setPersonas] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <ChakraProvider>
        <Formulario 
          personas={personas}
          setPersonas={setPersonas}
        />
        <Listado
          personas={personas}
        />
      </ChakraProvider>
    </div>
  );
}

export default App;