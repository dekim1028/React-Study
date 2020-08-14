import React, {useState} from 'react';

const IterationSample = () => {
    const [names,setNames] = useState([
        {id:1,text:'눈사람'},
        {id:2,text:'얼음'},
        {id:3,text:'눈'},
        {id:4,text:'바람'},
    ]);

    const [inputText,setinputText]=useState('');
    const [nextId,setNextId] = useState('5');

    const onChange = (e) =>{
        setinputText(e.target.value);
    };

    const onClick = () =>{
        const nextNames = names.concat({
            id:nextId,
            text:inputText
        });
        setNextId(nextId+1);
        setNames(nextNames);
        setinputText('');
    };

    const onRemove = id =>{
        const nextNames = names.filter(name=>name.id!==id);
        setNames(nextNames);
    }

    const nameList = names.map((name,index)=><li key={name.id} onDoubleClick={()=>onRemove(name.id)}>{name.text}</li>);

    return (
        <>
            <input type="text" value={inputText} onChange={onChange}></input>
            <button onClick={onClick}>추가</button>
            <ul>
                {nameList}        
            </ul>
        </>
    );
};

export default IterationSample;