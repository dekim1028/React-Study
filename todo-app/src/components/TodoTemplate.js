import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplete">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    );
};
export default TodoTemplate;