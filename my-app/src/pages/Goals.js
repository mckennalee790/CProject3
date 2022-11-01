import React from 'react';
import ReactDOM from 'react-dom/client';
//import View from './ViewGoals';
import BootstrapNavbar from '../BootstrapNavbar'
import './goals.css';
let globalGoals = [];
    
    export default class Goals extends React.Component {
      constructor(props) {
        super(props);
         this.state = {
            formgoal: '',
            formstep: '',
            goals: '',
            steps:[],
            allGoals:[],
            path: props.view,
            gGoals: globalGoals,
            display: false,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStepChange = this.handleStepChange.bind(this);
        this.handleStepSubmit = this.handleStepSubmit.bind(this);
        this.storeGoal = this.storeGoal.bind(this);
        this.printGoal = this.printGoal.bind(this);
        this.printDaily = this.printDaily.bind(this);
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({display: true});
      }
    
      handleStepChange(event) {
        this.setState({formstep: event.target.value});
      }
    
      handleStepSubmit(event) {
        this.setState({steps:[...this.state.steps, 
            this.state.formstep]
        });
        this.setState({formstep:""});
        event.preventDefault();
      }
      
      handleChange(event) {
        this.setState({formgoal: event.target.value});
      }
    
      handleSubmit(event) {
        this.setState({goals:this.state.formgoal});
        this.setState({formgoal:""});
        event.preventDefault();
      }
      
      addNewGoal() {
        let newGoal = {
          goal: this.state.goals,
          steps: this.state.steps,
        };
        
        for(let i = 0; i < newGoal.steps.length; i++){
          globalGoals.push(newGoal.steps[i]);
        }
        return newGoal;
      }
      
      storeGoal() {
        let newGoal = this.addNewGoal();
        this.setState({allGoals:[...this.state.allGoals,
          newGoal]
        });
        this.setState({goals:""});
        this.setState({steps:""});
        
        let goalsList = this.state.allGoals;

        alert("Your Goal has been saved! Click 'View Goals' to see your current goals.");
      }
      
      printSteps(){
        let listSteps = [];
        for(let i = 0; i < this.state.steps.length; i++){
          listSteps.push(<li>{this.state.steps[i]}</li>);
        }
        return listSteps;
      }
      
      printGoal() {
        let goals = [];
          for(let i = 0; i < this.state.allGoals.length; i++){
            goals.push(<li className="GOAL">{this.state.allGoals[i].goal}</li>);
            for(let j = 0; j < this.state.allGoals[i].steps.length; j++){
              goals.push(<li>{this.state.allGoals[i].steps[j]}</li>);
            }
          }
        return goals;
      }
      
      printDaily() {
        let steps = [];
          for(let i = 0; i < this.state.gGoals.length; i++){
            steps.push(<li className="dSteps">{this.state.gGoals[i]}</li>);
          }
        return steps;
      }
        
      render() {
        const goal = this.state.goals;
        const listSteps = this.printSteps();
        const goals = this.printGoal();
        const steps = this.printDaily();
        
        if(this.state.display == false) {
        return (
            <div class="goals">
              <div className="inputGoals">
                <h1 class="goalheading"> My Goal: </h1>
                <form onSubmit={this.handleSubmit} onKeyUp={this.handleChange}>
                  <label>
                    <input type="text" value={this.state.formgoal} onChange={this.handleChange} />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
                <h1 class="goalheading"> Daily Steps: </h1>
                <form onSubmit={this.handleStepSubmit} onKeyUp={this.handleStepChange}>
                  <label>
                    <input type="text" value={this.state.formstep} onChange={this.handleStepChange} />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </div>
              
              <div className="outputGoals">
                <p className="cGoal">{goal}</p>
                <ul className="cSteps" id="stepList">{listSteps}</ul>
              </div>
              
              <button className="cBtn" onClick={this.storeGoal}>Submit Goal</button>
              <button className="cBtn" onClick={this.toggle}>View Goals</button>
           
            </div> )}
            if(this.state.display == true){
            return ( 
            <div className="displayContainer">
             <div className="goalsList">
                <h1 className="tHeading">My Goals:</h1>
                 <div className="goalViews">
                   <ul>{goals}</ul>
                 </div>
              </div>
              
              <div className="todoList">
                <h1 className="dHeading">Daily To Do List:</h1>
                <div className="dToDo">
                  <ul>{steps}</ul>
                </div>
              </div>
            </div>)
      }
    }
    
  }