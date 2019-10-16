import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage.component'

// const HomePage = (props) => {
//   console.log(props)
//   return(
//       <div>
//           <button onClick={() => props.history.push('/topics')}>Topics</button>
//           <h1>Home Page</h1>
//       </div>
//   )
// }

// const TopicsList = (props) => {
//   console.log(props)
//   return(
//       <div>
//           <h1>Topics List</h1>
//           <Link to={`${props.match.url}/:13`}>To Topic 13</Link>
//           <Link to={`${props.match.url}/:17`}>To Topic 17</Link>
//           <Link to={`${props.match.url}/:21`}>To Topic 21</Link>
//       </div>
//   )
// }

// const TopicDetail = (props) => {
//   console.log(props)
//   return(
//       <div>
//           <h1>Topics Detail Page {props.match.params.topicId}</h1>
//       </div>
//   )
// }

// function App(){
//   return(
//       <div>
//           <Route exact path='/' component={ HomePage }/>
//           <Route exact path='/blog1/something/topics' component={ TopicsList }/>
//           <Route path='/blog1/something/topics/:topicId' component={ TopicDetail }/>
//           <Route exact path='/blog2/something/topics' component={ TopicsList }/>
//           <Route path='/blog2/something/topics/:topicId' component={ TopicDetail }/>
//       </div>
//   );
// }

const HatsPage = (props) => {
  console.log(props)
  return(
      <div>
          <h1>This is the HATS Page</h1>
      </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/hats' component={ HatsPage } />
      </Switch>
    </div>
  );
}

export default App;
