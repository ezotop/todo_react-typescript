import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
    todos: ITodo[],
    onToggle(id: number): void, // Это два способа задавать функции
    onRemove: (id: number) => void // Это два способа задавать функции
}

export const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onRemove}) => {
    if (todos.length === 0) {
        return <p className="center">No todos yet</p>
    }

    const removeHandler = (e: React.MouseEvent, id: number) => {
        e.preventDefault();
        onRemove(id);
    };

    return (
        <ul>
            {

                todos.map(item => {
                    const classes = ['todo'];
                    if (item.completed) {
                        classes.push('completed');
                    }

                    return (
                        <li 
                            // className={item.completed ? "todo completed" : "todo"}
                            className={classes.join(' ')}
                            key={item.id}
                        >
                            <label>
                                <input type="checkbox" checked={item.completed} onChange={() => onToggle(item.id)} />
                                <span>{item.title}</span>
                                <i className="material-icons red-text" onClick={(e) =>removeHandler(e, item.id)}>delete</i>
                            </label>
                        </li>
                    )
                })
            }
        </ul>
    );
};