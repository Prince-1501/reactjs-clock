import React, {Component} from 'react';
import classes from './App.module.css';
import Logo from './bg-image.svg';
import grid from './assets/css/Grid.css';


class App extends Component {

  state= {
    showDay : false
  }

  showDayHandler = () =>{
    const day = this.state.showDay;
    this.setState({
      showDay: !day
    });
  }

  render(){
    let date = new Date();
    let time = date.toLocaleTimeString();

    let showDetail = false;
    let message = "Show Date";
    if(this.state.showDay){
      const day = date.toLocaleDateString();
      showDetail = (day);
      message = "Remove Date";
    }

    return (
      <div className={classes.App}>
          <h1 className={classes.h1}>Your Time is here </h1>
          <img  src={Logo} width="500" height="600"/>
          <div className={classes.time}>
            <div className={classes.showTime}>{time}</div>
            <div className={classes.showTime}>{showDetail}</div>
          </div>
          <button className={classes.btn} onClick={this.showDayHandler}> {message} </button>
      </div>
    );
  }
}

export default App;
