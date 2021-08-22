import React from 'react'

import { Link } from 'react-router-dom';

export default function navBar() {
    let search = '';

    // const [search, setSearch] = useState('');
    const setSearch = (e) => {
      search = e;
      console.log(search);
    }
  
    const submitHandler = (e) => {
      e.preventDefault();
    }
    
    return (
        <div className="row center">
            <div>
              <Link to="/">
                <img src="../Logo_ML.png" alt="Mercado Libre"></img>
              </Link>
            </div>
            <div>
              <form className="search" onSubmit={submitHandler}>
                <div className="row">
                  <input className="primary" type="text" name="q" id="q" onChange={(e) => setSearch(e.target.value)} placeholder="Nunca dejes de buscar"></input>
                  <button type="submit">
                    <img src="../ic_Search.png" alt="search"></img>
                  </button>
                </div>
              </form>
            </div>
        </div>
    )
}
