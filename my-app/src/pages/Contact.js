    import React from 'react';
    
    class Contact extends React.Component {
      constructor(props) {
        super(props);
         this.state = {
             newEmail: "",
             newMessage: "",
             email: "",
             message: "",
             sent: false,
        };
        this.viewMessage = this.viewMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        this.setState({email: this.state.newEmail});
        this.setState({newEmail:""});
        event.preventDefault();
        
        this.setState({message: this.state.newMessage});
        this.setState({newMessage:""});
        event.preventDefault();
        
        this.setState({sent: true});
        
      }
      
      handleChange(event) {
        this.setState({newEmail: event.target.value});
      }
      
      handleChange1(event) {
        this.setState({newMessage: event.target.value});
      }
      
      viewMessage() {
          const message = this.state.message;
          return(
              <div>
                <p>{message}</p>
              </div>
            )
      }
      
      render() {
        if(this.state.sent == true){
          return (
            <div className="thanks">
              <h1 className="tHeading">Thank you for your input!</h1>
              <h5>If your message requires a response, we will be in contact shortly.</h5>
            </div>
            )
        }
        else{
          return (
              <div class="c-container">
                <div className="c-input">
                  <form className="inputForm">
                    <p class="cHeading"> Email </p>
                    <label>
                      <input type="text" value={this.state.newEmail} onChange={this.handleChange} />
                    </label>
                    
                    <p class="cHeading"> Message </p>
                    <label>
                      <input className="mBox" type="text" value={this.state.newMessage} onChange={this.handleChange1}/>
                    </label>
                    
                  </form>
                </div>
                
                <button className="cBtn" onClick={this.handleSubmit}>Contact</button>
                
              </div>
              );
            }
         }
        
    }

export default Contact;