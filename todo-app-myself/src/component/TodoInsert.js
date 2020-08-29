import React,{useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(
        e=>{
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert,value]
    )

    return (
        <form className="TodoInput" onSubmit={onSubmit}>
            <input className="inputBox" type="text" value={value} onChange={onChange} placeholder="할 일을 입력해주세요."/>
            <button className="addBtn" type="submit"><MdAdd/></button>
        </form>
    );
};

export default TodoInsert;