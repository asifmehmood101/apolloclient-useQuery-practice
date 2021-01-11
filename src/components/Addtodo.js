//Executing a mutation
//useMutation Return
/*
-A mutate function that you can call at any time to execute the mutation
-An object with fields that represent the current status of the mutation's execution
*/

import { gql, useMutation } from '@apollo/client';

//define mutation
const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;
function Addtodo() {
  let input; // the input variable which will hold reference to the input element

  //addTodo mutate function and object with current mutation state
  const [addTodo, { data }] = useMutation(ADD_TODO);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //call mutate function
          addTodo({ variables: { type: input.value } });
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node; // assign the node reference to the input variable
          }}
        />
        <button type='submit'>Add todo</button>
      </form>
    </div>
  );
}

export default Addtodo;
