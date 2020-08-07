import React, {Component} from 'react';

class Counter extends Component{
    /*
    // 생성자 메서드
    constructor(props){
        super(props);
        //state의 초기값 설정
        this.state ={
            number : 0,
            fixedNumber : 0
        };
    }
    */

    state = {
        number: 0,
        fixedNumber: 0
    };

    render(){
        const {number,fixedNumber}=this.state;
        return(
            <div>
                <h1>{number}</h1>
                <h1>바뀌지 않는 값{fixedNumber}</h1>
                <button
                    //onclick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
                    onClick={()=>{
                        //this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
                        this.setState({number:number+1});

                        //this.setState를 한번더 호출해도 숫자가 1씩 더해짐 => 비동기적으로 업데이트 되기 때문
                        this.setState({number:this.state.number+1});
                    }}
                >
                    +1
                </button>
                <button
                    onClick={()=>{
                        //this.setState 2번 실행하는 방법
                        this.setState(prevState=>{
                            return {
                                number: prevState.number+1
                            };
                        });

                        this.setState(prevState=>({number: prevState.number+1}));
                    }}
                >
                    +2
                </button>
                <button
                    onClick={()=>{
                        this.setState(
                            {
                                number:number+1
                            },
                            ()=>{
                                console.log('방금 setState가 실행되었습니다.');
                                console.log(this.state);
                            }
                        );
                    }}
                >
                    callback
                </button>
            </div>
        );
    }
}

export default Counter;