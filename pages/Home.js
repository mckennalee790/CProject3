import React from 'react';
import ReactDOM from 'react-dom/client';

function Home(props) {
    return (
      <h1>{props.message}</h1>
    );
  }
  
function Homepage() {
  return (
      <div class="headings">
        <div class="h1">
          <Home message="Heading 1" />
        </div>
        <div class="h2">
          <Home message="SubHeading" />
        </div>
        <form action="/public/list.html">
          <button class="gs-btn" href="">Get Started</button>
        </form>
      </div>
  );
}

export default Home;