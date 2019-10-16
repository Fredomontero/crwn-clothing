import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'

import './App.css';
// import HomePage from './pages/homepage/homepage.component'

const HomePage = (props) => {
  console.log(props)
  return(
      <div>
          <button onClick={() => props.history.push('/topics')}>Topics</button>
          <h1>Home Page</h1>
      </div>
  )
}

const TopicsList = () => {
  return(
      <div>
          <h1>Topics List</h1>
      </div>
  )
}

const TopicDetail = (props) => {
  console.log(props)
  return(
      <div>
          <h1>Topics Detail Page: {props.match.params.topicId}</h1>
      </div>
  )
}

function App(){
  return(
      <div>
          <Route exact path='/' component={ HomePage }/>
          <Route exact path='/topics' component={ TopicsList }/>
          <Route path='/topics/:topicId' component={ TopicDetail }/>
      </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Switch>
//         <Route exact path='/' component={ HomePage } />
//       </Switch>
//     </div>
//   );
// }

export default App;
