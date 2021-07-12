import './App.css';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Posts from './components/posts/Posts';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
        <Main />
        <Posts />
        <Features />
        <Footer />
    </div>
  );
}

export default App;
