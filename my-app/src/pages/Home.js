import React from 'react';
import './home.css';
/*global styles*/
function HomeP(props) {
    return (
      <h1>{props.message}</h1>
    );
  }
  
function Home() {
  return (
      <div class="headings">
        <div class="h1">
          <HomeP message="Habit Builder" />
        </div>
        <div class="h2">
          <HomeP message="Form Habits to Achieve Your Goals" />
        </div>
        <form action="/goals">
          <button class="gs-btn">Get Started</button>
        </form>
        <div className="gitLink">
          <a className="gitLink" href="https://github.com/mckennalee790/CProject3">GitHub Link</a>
        </div>
      </div>
  );
}

export default Home;