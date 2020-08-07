import React, { Component } from 'react';
import PropTypes from 'prop-types';

//클래스형 컴포넌트
class MyComponentClass extends Component{
    //props 기본값 설정
    static defaultProps ={
        name : '기본이름'
    };

    // props 타입 지정
    static propTypes ={
        name : PropTypes.string,
        favoriteNumber : PropTypes.number.isRequired //isRequired : 경고 메세지 띄우기
    };

    render(){
        const {name,favoriteNumber,children} = this.props;
        return(
            <div>
                안녕하세요. 제 이름은 {name}입니다. <br/>
                children 값은 {children}입니다. <br/>
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    }
}

export default MyComponentClass;