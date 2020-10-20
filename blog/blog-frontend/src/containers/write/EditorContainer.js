import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { changeField, initialize } from '../../modules/write';
import { useEffect } from 'react';
import Editor from '../../components/write/Editor';

const EditorContainer = () => {
    const dispatch = useDispatch();

    const {title, body} = useSelector(({write})=>({
        title:write.title,
        body:write.body,
    }));

    const onChangeField = useCallback(payload=>dispatch(changeField(payload)),[dispatch]);

    useEffect(()=>{
        dispatch(initialize());
    },[dispatch]);

    return (
        <Editor onChangeField={onChangeField} title={title} body={body}/>
    );
};

export default EditorContainer;