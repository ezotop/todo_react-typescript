import React, { useRef } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
};

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null);
    // const [title, setTitle] = useState<string>('');

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            props.onAdd(ref.current!.value); // In case useRef
            ref.current!.value = '';

            // console.log(title); // In case useState
            // setTitle('');
        }
    };

    return (
        <div className="input-field mt2">
            <input
                ref={ref}
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                onKeyPress={(e) => keyPressHandler(e)}
                // value={title}
                placeholder="Write down a task"
                id="title" type="text"
                className="todo-input"
            />
            <label htmlFor="title" className="active">What do you want to do?</label>
        </div>
    )
} ;