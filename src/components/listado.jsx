import { Personas } from "./personas";
import {
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

export const Listado = ({ personas }) => {

  console.log(personas);

  return (
    <div>

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



