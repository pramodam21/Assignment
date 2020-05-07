import React, { Fragment } from 'react';
import Content from './Components/Organism/Content';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StoreInfo from './Components/Organism/StoreInfo';

/**
 * Root componet for all
 * @returns - Components based on Route
 */
function App() {
  return (
    <Router>
    <Fragment>
      <Route exact strict path="/" component={Content} />
      <Route exact strict path="/storeInfo" component={StoreInfo} />
    </Fragment>
    </Router>
  );
}

export default App;
