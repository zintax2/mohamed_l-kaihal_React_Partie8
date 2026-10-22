import { Component } from "react";
export default class Message extends Component {
  constructor(){
    super();
    this.state = {msg:"Bien venu visiteur", btnMsg:"Inscription"};
  }
  inscription(){
    this.setState({msg:"Votre inscription est effectuée", btnMsg:"Merci"});
  }
  render() {
    return(
      <div>
        <h2>{this.state.msg}</h2>
        <button onClick={()=> this.inscription()} >
          {this.state.btnMsg}
        </button>
      </div>
    );
  }
}