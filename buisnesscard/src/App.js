import "./App.css";
import Profile from "./components/Profile";
import Description from "./components/Description";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Profile />
        <Description />
        <Footer />
      </div>
    </div>
  );
}
