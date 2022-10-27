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
            steps:[{"step":"","completed":false},{"step":"","completed":true}]
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStepChange = this.handleStepChange.bind(this);
        this.handleStepSubmit = this.handleStepSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
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
            target.completed = true;
        }
        console.log(this.state.steps);
        element.classList.toggle("strike");
      }
      
      handleFilter() {
        let filtered = this.state.steps.filter(step => {
          return !step.completed;
        });
        this.setState({steps:filtered});
        //event.preventDefault();
      }  
    
      render() {
        const goal = this.state.goals;
        const listItems = this.state.steps.map((thisstep, index) => 
          <li className={thisstep.completed ? "strike" : "steps"} 
            onClick={event => this.handleToggle(event, index)}
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
                <button onClick={this.handleFilter}>Submit Goal</button>
              </div>
              
              <div className="outputGoals">
                <p>{goal}</p>
                <ul>{listItems}</ul>
              </div>
              
            </div>
        );
      }
    }
   
    export default Goals;