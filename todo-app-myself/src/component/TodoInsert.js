import React from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
    return (
        <div className="TodoInput">
            <input className="inputBox" type="text" placeholder="할 일을 입력해주세요."/>
            <button className="addBtn" type="submit"><MdAdd/></button>
        </div>
    );
};

export default TodoInsert;