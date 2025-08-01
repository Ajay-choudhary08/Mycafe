import './App.css';

 import image from './assets/image.png' // Make sure this image exists

function App() {
  return (
     
    <div className="app">
      <header className="header">
        <div className="container">
          <a href="logo.html" className="logo">MyShop</a>
          <nav>
            <ul className="nav-list">
              <li><a href="home.html">HOME</a></li>
              <li><a href="menu.html">MENU</a></li>
              <li><a href="about.html">ABOUT US</a></li>
              <li><a href="login.html">LOGIN</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="content">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG"
          alt="Cappuccino"
        />
        <p>
          A cappuccino is an espresso-based coffee drink that originated in Italy,
          and is traditionally prepared with steamed milk foam (microfoam).
          Variations of the drink involve the use of cream instead of milk,
          and flavoring with cinnamon or chocolate powder. It is typically smaller
          in volume than a latte, and has a thicker layer of microfoam.
        </p>
        <img src={image} alt="sample" className="main-img" />
        

      </main>
   
    </div>

    
  );
}

export default App;