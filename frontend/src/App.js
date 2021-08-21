
import { BrowserRouter, Link, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

import SearchBar from './components/SearchBar';

function App() {
  return (
    // <html>
    //   <head>
    //     <link rel="stylesheet" href="index.css" />
    //     <title>Challenge Mercado Libre</title>
    //   </head>
    //   <body>

    //   </body>
    // </html>

    <BrowserRouter>
        <div className="grid-container">
          <header className="header-container">
            <Route component={SearchBar}></Route>
          </header>
          <main className="main-container">
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/search/" component={SearchScreen} exact></Route>
          </main>
          <footer>

          </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
