import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import ListInput from './components/todoInput';
import Display from './components/todoList';

function App() {
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);

    function addTodo() {
      if (todo !== "") {
        setList([...list, todo]);
        setTodo("");
      }
    }
    
    function removeTodo(addtext) {
        const newList = list.filter((todo) => {
        return todo !== addtext; 
      });
      setList(newList);
    }

  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <Heading>TODO LIST</Heading>
            <ListInput todo={todo} setTodo={setTodo} addTodo={addTodo}/>
            <Display lists={list} remove={removeTodo} />
        </Wrapper>
      </header>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 0 30%;
  background-color: #3c5159;
`;

const Heading = styled.p`
  font-size: 35px;
`;

export default App;
