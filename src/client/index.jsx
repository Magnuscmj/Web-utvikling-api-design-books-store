import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';

function Application() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/books'}>
          <h1>List all the books</h1>
        </Route>

        <Route path={'/create'}>
          <h1>Create a new book</h1>
        </Route>
        
        <Route path={'/create'}>
          <h1>Create a new book</h1>
        </Route>

        <Route path={'/edit'}>
          <h1>Edit an existing book</h1>
        </Route>

        <Route path={'/'}>
          <h1>Book application home page</h1>
          <ul>
            <li>
              <Link to={'/books'}>List books</Link>
            </li>
            <li>
              <Link to={'/create'}>List books</Link>
            </li>
          </ul>
        </Route>

        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById('root'));
