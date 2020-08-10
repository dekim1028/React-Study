import React, {Component} from 'react';

class EventPracticeClass extends Component{

    state ={
        message:'',
        message2:'',
        username:''
    }

    /*
    // 1. 임의 메서드 만들기
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({
            message2:e.target.value
        });
    }

    handleClick(e){
        alert(this.state.message2);
        this.setState({
            message2:''
        });
    }
    */

    // 2. 바벨의 transform-class-properties 문법
    handleChange = (e) =>{
        this.setState({
            //message2:e.target.value
            [e.target.name]:e.target.value
        });
    }

    handleClick = () =>{
        alert(this.state.username +" : "+this.state.message2);
        this.setState({
            message2:'',
            username:''
        });
    }

    handleKeyPress = (e) =>{
        if(e.key==='Enter'){
            this.handleClick();
        }
    }


    render(){
        return(
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name="message" placeholder="아무거나 입력해 보세요" value={this.state.message} onChange={(e)=>{this.setState({message:e.target.value});}}/>
            <button onClick={
                ()=>{
                    alert(this.state.message);
                    this.setState({message:''});
                    }
                }>확인</button>
            
            <br/>

            <input type="text" name="username" placeholder="사용자명" value={this.state.username} onChange={this.handleChange}/>
            <input type="text" name="message2" placeholder="아무거나 입력해 보세요" value={this.state.message2} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
            <button onClick={this.handleClick}>확인</button>
        </div>
        );
    }
}

export default EventPracticeClass;