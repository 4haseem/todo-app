import React from "react";
import styled from "styled-components";

export default function ListInput({todo, setTodo, addTodo}) {
    return(
        <Wrapper>
            <Input 
                type="text"
                name="todo"
                value={todo}
                placeholder="create new"
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
            />

            <AddButton onClick={addTodo}>
                Add
            </AddButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border: 1px solid #607e8a;
`;

const Input = styled.input`
    font-size: 20px;
    padding: 5px;
    color: white;
    border: none;
    border-right: 1px solid #60738a;
    background: none;

    &:focus{
        outline: none;
    }
`;
    
const AddButton = styled.button`
    font-size: 16px;
    padding-left: 25px;
    padding-right: 25px;
    border: none;
    background: none;
    color: #4ab59c;

    &:hover{
        cursor: pointer;
    }

`;