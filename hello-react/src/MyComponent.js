import React from 'react';
import PropTypes from 'prop-types'; //필수 props지정 || props 타입 지정에 사용됨

//함수형 컴포넌트
const MyComponent = ({name,favoriteNumber,children}) => {
    return (
        <div>
            안녕하세요. 제 이름은 {name}입니다. <br/>
            children 값은 {children}입니다. <br/>
            제가 좋아하는 숫자는 {favoriteNumber}입니다.
        </div>
    );
};

//props 기본값 설정
MyComponent.defaultProps ={
    name : '기본이름'
};

// props 타입 지정
MyComponent.propTypes ={
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired //isRequired : 경고 메세지 띄우기
};

export default MyComponent;