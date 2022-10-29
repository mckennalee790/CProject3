import React from 'react';
import ReactDOM from 'react-dom/client';
import './goals.css';
    
    class Goals extends React.Component {
      constructor(props) {
        super(props);
         this.state = {
            formgoal: '',
            formstep: '',
            goals: '',
            steps:[{"step":"","completed":false},{"step":"","completed":true}],
            allGoals:[]
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStepChange = this.handleStepChange.bind(this);
        this.handleStepSubmit = this.handleStepSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.storeGoal = this.storeGoal.bind(this);
      }
    
      handleStepChange(event) {
        this.setState({formstep: event.target.value});
      }
    
      handleStepSubmit(event) {
        this.setState({steps:[...this.state.steps, 
            {"step":this.state.formstep,"completed":false}]
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
      
      handleToggle(event, index)  {
        const element = event.target;
        var target = this.state.steps[index];
        if(target.completed) {
            target.completed = false;
        } else {
            target.completed = false;
        }
        console.log(this.state.steps);
        element.classList.toggle("strike");
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

        console.log({newGoal});
        return newGoal;
      }
      
      storeGoal() {
        this.setState({allGoals:[...this.state.allGoals,
          this.addNewGoal()]
        });
        this.setState({goals:""});
        this.setState({steps:""});
        
        let goalsList = this.state.allGoals;

        console.log(goalsList);
        alert("Your Goal has been saved! Go to the 'View Goals' tab to see your current goals.");
        
      }
      
      printGoal() {
        return (
          <div>
            
          </div>
          )
      }
    
      render() {
        const goal = this.state.goals;
        const listSteps = this.state.steps.map((thisstep, index) => 
          <li 
            key={thisstep.step}>{thisstep.step}</li>
        );
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
                <ul className="cSteps">{listSteps}</ul>
              </div>
              
              <button className="sBtn" onClick={this.storeGoal}>Submit Goal</button>
              
            </div>
        );
      }
    }
   
    export default Goals;