
function App() {
  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <html>
      <head>
        <link rel="stylesheet" href="index.css" />
        <title>Challenge Mercado Libre</title>
      </head>
      <body>
        <div className="grid-container">
          <header className="row header-container">
            <div>
              <a href="index.html">
                <img src="Logo_ML.png" alt="Mercado Libre"></img>
              </a>
            </div>
            <div>
              <form className="search" onSubmit={submitHandler}>
                <div clasName="row">
                  <input type="text" name="q" id="q" placeholder="Nunca dejes de buscar"></input>
                  <button clasName="primary" type="submit">
                    <img src="ic_Search.png" alt="search"></img>
                  </button>
                </div>
              </form>
            </div>
          </header>
          <main>

          </main>
          <footer>

          </footer>
        </div>
      </body>
    </html>
  );
}

export default App;
