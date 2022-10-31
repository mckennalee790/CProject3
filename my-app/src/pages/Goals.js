import React from 'react';
import ReactDOM from 'react-dom/client';
//import View from './ViewGoals';
import BootstrapNavbar from '../BootstrapNavbar'
import './goals.css';
let globalGoals = [];
    
    class Goals extends React.Component {
      constructor(props) {
        super(props);
         this.state = {
            formgoal: '',
            formstep: '',
            goals: '',
            steps:[],
            allGoals:[],
            path: true,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStepChange = this.handleStepChange.bind(this);
        this.handleStepSubmit = this.handleStepSubmit.bind(this);
        this.storeGoal = this.storeGoal.bind(this);
        this.viewGoals = this.viewGoals.bind(this);
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

          printSteps : function() {
            for(let i = 0; i < this.steps.size; i++){
              console.log(this.steps[i]);
            }
          }
        };
        globalGoals.push(newGoal);
        console.log({newGoal});
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

        console.log(goalsList);
        alert("Your Goal has been saved! Go to the 'View Goals' tab to see your current goals.");
      }
      
      printSteps(){
        let listSteps = [];
        for(let i = 0; i < this.state.steps.length; i++){
          listSteps.push(<li>{this.state.steps[i]}</li>);
        }
        return listSteps;
      }
      
      printGoal() {
        let output = [];
        let goals = [];
          for(let i = 0; i < this.state.allGoals.length; i++){
            goals.push(<li className="GOAL">{this.state.allGoals[i].goal}</li>);
            for(let j = 0; j < this.state.allGoals[i].steps.length; j++){
              goals.push(<li>{this.state.allGoals[i].steps[j]}</li>);
            }
            output.push(<div className="gContainer">goals[i]</div>);
          }
        
        return goals;
      }
      
      viewGoals(){
        this.setState({path:false});
  
        console.log("viewGoals has been called");
        console.log("global: " + globalGoals);
      }
        
      render() {
        const goal = this.state.goals;
        const listSteps = this.printSteps();
        const goals = this.printGoal();
        const view = true;
        
        if(this.state.path === true){
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
              
              <div>
                <p>List of Goals:</p>
                <div className="goalViews">
                  <ul>{goals}</ul>
                </div>
              </div>
            </div>);
        //}
        //if (this.state.path === true) {
          //return (
            // <div>
            //   <p>List of Goals:</p>
            //   <p>allGoals[0].goal</p>
            //   <p>allGoals[0].steps</p>
            // </div>
            //);
        }
        
      }
    }
    
    // class View extends React.Component {
    //   constructor(props) {
    //     super(props);
    //   }
        
    //     render() {
    //       this.viewGoals();
    //       // const { allGoals } = this.props;
    //       // console.log({allGoals});
    //       // const { path } = false;
    //       return(
    //           <div>
    //               <p>
    //                   ViewGoals return
    //               </p>
    //           </div>
    //       );

    //     }
    // }
   
    export default Goals;
    

    