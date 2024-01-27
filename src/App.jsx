import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Portfolio,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Portfolio/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
