import React, {useState, useEffect} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    /* 1. 리액트 컴포넌트가 렌더링 될때마다 수행 ( componentDidMount + componentDidUpdate )
    useEffect(()=>{
        console.log("렌더링이 완료되었습니다.");
        console.log({
            name,
            nickname
        })
    });
    */

    /* 2. 컴포넌트가 처음 렌더링 될때만 수행 ( componentDidMount )
    useEffect(()=>{
        console.log("마운트될 때만 실행됩니다.")
    },[]);
    */

    /* 3. 특정 값이 변경 될때만 수행 ( componentDidUpdate )
    useEffect(()=>{
        console.log("업데이트될 때만 실행됩니다.")
    },[name]);
    */

    /* 4. component가 언마운트 되기 전 or 업데이트 직전 수행시 */
    useEffect(()=>{
        console.log("effect");
        console.log(name);

        return()=>{
            console.log('cleanup');
            console.log(name);
        }

    },[name]);

    const onChangeName = (e) =>{
        setName(e.target.value);
    }

    const onChangeNickname = (e) =>{
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름 : </b>{name}
                    <b>닉네임 : </b>{nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;