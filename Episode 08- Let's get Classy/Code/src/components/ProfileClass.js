import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);

        //whenever we load a class , constructor is called first
        //this is the best place to create state variables
        this.state = {
            count:0,
            count2:0,
            userInfo:{
                id:0,
                avatar_url:"null",
                followers:0,
                following:0
            },
        }
        console.log("Child class - constructor "+ this.props.name);
    }
    async componentDidMount(){
        //if my page/component is changing - Interval does not stop automatically
        //also if we are revisiting page/component it is created again
        //hence we have to remove interval while compoenet in unmounting

        this.timer = setInterval(()=>{
            console.log("Child class - setInterval "+ this.props.name)
        },1000)

        const data = await fetch("https://api.github.com/users/yashashri18");
        const jsondata = await data.json();
        this.setState(
            {
                userInfo:jsondata,
            }
        )
        console.log("user info is ")
        console.log(this.state.userInfo)
        //api call
        console.log("Child class - componentDidMount "+ this.props.name);
    }

    // componentDidUpdate(){
    //     console.log("Child class - componentDidUpdate "+ this.props.name);
    // }

    //if we want to call it only after my state changes 
    componentDidUpdate(prevProps, prevState){
        //for one dependent state - count1 
        if(this.state.count !== prevState.count){
            //do something
        }
        //if we want multiple dependent states 
        if(
            this.state.count !== prevState.count || 
            this.state.count2 !== prevState.count2 
        ){
             //do something
        }
        //for one dependent state - count2 
        if(this.state.count2 !== prevState.count2 ){
             //do something
        }

        console.log("Child class - componentDidUpdate "+ this.props.name);
    }
    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("Child class - componentWillUnmount "+ this.props.name);
    }
    render(){
        console.log("Child class - render "+this.props.name);
        return (
            <div style={{ border:"1px solid black", margin:"10px",padding:"10px" }}>
                <h1>Profile Class Compoent</h1>
                <h3>Name:{this.props.name}</h3>
                <h3>City:{this.props.city}</h3>
                <h3>Count: {this.state.count}</h3>
                <h3>Count2: {this.state.count2}</h3>
                <button onClick={()=>(
                    //react never mutates states directly 
                    //never do this.state.count = 1
                    //in CBC it mutates state with the help of this.setState()
                    this.setState({
                        count:1,
                        count2:1
                    })
                )}>Update count</button>
                <div style={{ border:"1px solid black", margin:"10px",padding:"10px" }}>
                    <h2>User Deatils are - </h2>
                    <h4>User id is  : {this.state.userInfo.id}</h4>
                    <h4><img src={this.state.userInfo.avatar_url}/></h4>
                    <h4>Followers : {this.state.userInfo.followers}</h4>
                    <h4>Following : {this.state.userInfo.following}</h4>
                </div>
            </div>
        )
    }
}
export default Profile;