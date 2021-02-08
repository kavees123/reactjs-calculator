
import { Component } from 'react';
import './App.css';

class App extends Component {
  state= {
    entry: "",
    result: 0,
    
  }

  numberupdate= (value) => {
    let str = this.state.entry
     if(value == "div"){
        str = str + " / ";
     }
     else if(value == "multi"){
       str = str + " * ";
     }
     else if(value == "sub"){
       str = str + " - ";
     }
     else if(value == "add"){
       str = str + " + ";
     }
     else{
       str = str + value;
     }
      this.setState({entry: str});
  
  }

  resultupdate = () => {
    console.log("Result is clicked");
    var input = this.state.entry;
    input = input.replace(/\s+/g, '');
    console.log("The trimmed input is " + input);
    var arr = [];
    var arr_input = "";
    for(var i =0; i< input.length; i++){
      if(input[i] == "+"){
        arr.push(arr_input);
        arr.push("+");
        arr_input = "";
      }
      else if(input[i] == "-"){
        arr.push(arr_input);
        arr.push("-");
        arr_input = "";
      }
      else if(input[i] == "*"){
        arr.push(arr_input);
        arr.push("*");
        arr_input = "";
      }
      else if(input[i] == "/"){
        arr.push(arr_input);
        arr.push("/");
        arr_input = "";
      }
      else{
        arr_input = arr_input + input[i];
      }
    }
    if(arr_input != ""){
    arr.push(arr_input);
    }

    for(var i =0; i< arr.length; i++){
        if(arr[i] == "-"){
          var input = -Math.abs(parseInt(arr[i+1]));
          arr[i+1] = input;
          arr.splice(i,1);
        }
    }



    while(arr.includes("/")){
      for(var i =0; i< arr.length; i++){
   
        if(arr[i] == '/'){
          var add_result = parseInt(arr[i-1]) / parseInt(arr[i+1]);
          arr[i-1] = add_result;
            arr.splice(i,2);
        }
      }
    }

    

    while(arr.includes("*")){
      for(var i =0; i< arr.length; i++){
   
        if(arr[i] == '*'){
          var add_result = parseInt(arr[i-1]) * parseInt(arr[i+1]);
          arr[i-1] = add_result;
            arr.splice(i,2);
        }
      }
    }
    
    
    while(arr.includes("+")){
    for(var i =0; i< arr.length; i++){
  
      if(arr[i] == '+'){
        var add_result = parseInt(arr[i-1]) + parseInt(arr[i+1]);
        arr[i-1] = add_result;
          arr.splice(i,2);
      }
    }
  }
 

  
    for(var i =0; i< arr.length; i++){
 
      if(arr[i] == '-'){
        var add_result = parseInt(arr[i-1]) - parseInt(arr[i+1]);
        arr[i-1] = add_result;
      }
      else{
        arr[i-1] = arr[i-1] + arr[i];
      }
    }
  
    

 
  
    
    this.setState({result: parseInt(arr[0])});

  }

  render(){
  return (
    <div className="App">
     <p> {this.state.entry}</p>
     <p> {this.state.result} </p>
      <table style={{marginLeft: "auto", marginRight:"auto"}}>
        <tr>
          <td><button onClick={() => this.numberupdate(9)}>9</button></td>
          <td><button onClick={() => this.numberupdate(8)}>8</button></td>
          <td><button onClick={() => this.numberupdate(7)}>7</button></td>
          <td><button onClick={() => this.numberupdate("div")}>Div</button></td>
        </tr>
        <tr>
          <td><button onClick={() => this.numberupdate(6)}>6</button></td>
          <td><button onClick={() => this.numberupdate(5)}>5</button></td>
          <td><button onClick={() => this.numberupdate(4)}>4</button></td>
          <td><button onClick={() => this.numberupdate("multi")}>Multi</button></td>
        </tr>
        <tr>
          <td><button onClick={() => this.numberupdate(3)}>3</button></td>
          <td><button onClick={() => this.numberupdate(2)}>2</button></td>
          <td><button onClick={() => this.numberupdate(1)}>1</button></td>
          <td><button onClick={() => this.numberupdate("sub")}>Sub</button></td>
        </tr>
        <tr>
          <td><button onClick={() => this.resultupdate()}>=</button></td>
          <td><button>.</button></td>
          <td><button>0</button></td>
          <td><button onClick={() => this.numberupdate("add")}>Add</button></td>
        </tr>
      </table>
    </div>
  );
  }
}

export default App;
