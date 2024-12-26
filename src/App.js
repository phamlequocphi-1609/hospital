import Header from "./component/layout/Header";
import "./assets/css/style.css";
import Footer from "./component/layout/Footer";
import Home from "./component/home/Home";
function App() {
  return (
    <div className="">
      <Header />
        <Home/>
      <Footer/>
    </div>
  );
}

export default App;
