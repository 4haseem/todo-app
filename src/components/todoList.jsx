import React from "react";
import styled from "styled-components";

export default function Display({lists, remove}) {
    return(
        <>
            {lists?.length > 0 ? (
                <ul>
                    {lists.map((entry, id) => (
                        <ShowList>
                            <List key={id}>
                                {entry}
                            </List>
                            <RemoveButton
                                onClick={() => {
                                    remove(entry);
                                }}
                            >
                                delete
                            </RemoveButton>
                        </ShowList>
                    ))}
                </ul>
            ): (
                <Taskbar>
                    add tasks
                </Taskbar>
            )
            }
        </>
    )
}

const ShowList = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    list-style: none;
    gap: 20px;
    border: 1px solid #607e8a;
`;

const List = styled.li`
    padding: 5px;
    color: #c1b4cc;
`;

const RemoveButton = styled.button`
    font-size: 16px;
    padding-left: 15px;
    padding-right: 20px;
    border: none;
    border-left: 1px solid #60738a;
    background: none;
    color: #4ab59c;

    &:hover{
        cursor: pointer;
    }
`;

const Taskbar = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;
