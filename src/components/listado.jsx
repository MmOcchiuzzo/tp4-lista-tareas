import { Personas } from "./personas";
import {
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

export const Listado = ({ personas }) => {

  console.log(personas);

  return (
    <div>
      <h2 className="font-black text-3xl text-center">Listado de tareas</h2>
      <p className="text-xl mt-5 mb-10 text-center text-green-600 font-bold">Administra tus Tareas</p>

      <UnorderedList>
        {personas.map(persona => (
          <ListItem key={persona.proyecto}> {}
            <Personas 
              personas={persona} 
            />
          </ListItem>
        ))}
      </UnorderedList>
    </div>
  );
};



