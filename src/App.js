import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store/index';
import { GlobalStyled } from './style.js';
import Header from './common/header/index.js';
import { IconFont } from './statics/iconfont/iconfont';

// import Home from './pages/home/index.js';
const Home = lazy(() => import('./pages/home/index.js'));
// import Detail from './pages/detail/index.js';
const Detail = lazy(() => import('./pages/detail/index.js'));

// import Login from './pages/login/index.js';
const Login = lazy(() => import('./pages/login/index.js'));

// import Write from './pages/write/index';
const Write = lazy(() => import('./pages/write/index'));

function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <IconFont />
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <Switch>

              {/* <div> */}
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              {/* </div> */}
            </Switch>

          </Suspense>
        </BrowserRouter>

      </Provider>
    </div>
  );
}

export default App;
