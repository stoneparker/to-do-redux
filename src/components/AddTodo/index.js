import React, { useState } from 'react';

// import { Container } from './styles';

function AddTodo() {
   const [todo, setTodo] = useState('');

   return (
      <div>
         <input 
            type="text" 
            value={todo}
            onChange={text => setTodo(text.target.value)}
         />
         <button type="submit">Add Todo</button>
      </div>
   );
}

export default AddTodo;