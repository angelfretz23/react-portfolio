import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Resumes from "./pages/Resumes";
import Portfolios from "./pages/Portfolios";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
import ReactGA from 'react-ga';

/** Google Analytics */
const trackingID = 'ENTER TRACKER ID';

export const initGA = () => {
  ReactGA.initialize(trackingID);
};

export const GApageView = (page) => {
  ReactGA.pageview(page);
};

export const GAevent = (categoryName, eventName) => {
  ReactGA.event({       
      category: categoryName,  // Required
      action: eventName,       // Required
      label: 'labelName',       
      value: 10,       
      nonInteraction: false     
  });   
}
/** End of Google Analytics */

class App extends React.Component {

  componentDidMount() {
    initGA();
    GApageView('landing');
  }
  
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resumes} />
          <Route path="/portfolios" component={Portfolios} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
