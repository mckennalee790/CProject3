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
          <HomeP message="Daily Habits" />
        </div>
        <div class="h2">
          <HomeP message="Set Goals and Build Good Habits" />
        </div>
        <form action="/goals">
          <button class="gs-btn">Get Started</button>
        </form>
      </div>
  );
}

export default Home;