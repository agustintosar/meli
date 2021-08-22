
import { BrowserRouter, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ItemDetailsScreen from './screens/ItemDetailsScreen';
import ItemsScreen from './screens/ItemsScreen';

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
            <Route path="/items/:id" component={ItemDetailsScreen}></Route>
            <Route path="/items/" component={ItemsScreen} exact></Route>
            <Route path="/" component={HomeScreen} exact></Route>
          </main>
          <footer>

          </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
