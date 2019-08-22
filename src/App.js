import React from 'react';
import DrumMachine from './components/DrumMachine';

class App extends React.Component {
  state={
    keyCode:''
  }
  /* componentDidMount(){
    window.addEventListener('keydown',this.eventFun)
  }
  componentWillUnmount(){
    window.removeEventListener('keydown',this.eventFun)
  }
  eventFun=e=>{
    console.log(e);
    this.setState({
      keyCode:e.keyCode
    })
  } */
  render(){
    return (
      <div className="App">
        <DrumMachine keyCode={this.state.keyCode}/>
      </div>
    );
  }
}

export default App;
