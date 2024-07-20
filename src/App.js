
import NavBar from './navbar'
import Home from './Home'
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() { // it has to start by a capital letter
  return ( // this is not html, this is jsx
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/"> {/**it macthes without adding the exact, so / exists inside /create, thus it shows the home page, so we add the exact */}
              <Home />
            </Route>  
            <Route path="/create"> 
              <Create />
            </Route>  
            <Route path="/blogs/:id"> 
              <BlogDetails/>
            </Route>  
            <Route path="*"> 
              <NotFound/>
            </Route> 
          </Switch>
        </div> 
      </div>
    </Router>
    
  );
}

export default App; // exporting the component, so we can use it in another files 
