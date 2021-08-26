import React from 'react'

import { Link, useHistory } from 'react-router-dom';

export default function SearchBar() {
    let history = useHistory();
    let search = '';

    const setSearch = (e) => {
      search = e;
    }
  
    const submitHandler = (e) => {
      e.preventDefault();
      history.push({
        pathname: '/items',
        search: `?search=${search}`,
        state: { q: search }
      });
    }
    
    return (
        <div className="row center">
            <div className="logo">
              <Link to="/">
                <img src="../Logo_ML.png" alt="Mercado Libre"></img>
              </Link>
            </div>
            <div>
              <form className="search" onSubmit={submitHandler}>
                <div className="row">
                  <input 
                    className="primary" 
                    type="text" 
                    name="q" 
                    id="q" 
                    onChange={(e) => setSearch(e.target.value)} 
                    placeholder="Nunca dejes de buscar">
                  </input>
                  <button type="submit">
                    <img src="../ic_Search.png" alt="search"></img>
                  </button>
                </div>
              </form>
            </div>
        </div>
    )
}
