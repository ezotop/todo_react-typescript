import React, { useEffect, useState } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';

declare var confirm: (quest: string) => boolean; // Чтобы не писать window.confirm просто декларируем что такое есть

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]); // Если данный state был измененб то будет выполняться

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        // setTodos([newTodo, ...todos]);
        setTodos(prev => [newTodo, ...prev]); // Такая запись гарантирует, что новый state будет основываться на предыдущем state
    };

    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(item => {
            if (item.id === id) {
                console.log('toggle');
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }));
    };

    const removeHandler = (id: number) => {
        const shouldRemove = confirm('Are you sure?');
        if (shouldRemove) {
            setTodos(prev => prev.filter(item => item.id !== id));
        }
    };
    return (
        <>
            <TodoForm onAdd={addHandler} />
            <TodoList
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}
            />
        </>
    );
};