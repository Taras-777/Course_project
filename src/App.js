import { GlobalProvider } from "./context/GlobalState";
import { Route, Switch } from "react-router-dom";
import AddStartup from "./pages/AddStartup";
import EditStartup from "./pages/EditStartup";
import Catalogue from "./pages/Catalog";
import Home from "./pages/Home";
import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import StartupDetails from "./pages/StartupDetails";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/catalog" component={Catalogue} exact />
        <Route path="/catalog/:id" component={StartupDetails} exact />
        <Route path="/add" component={AddStartup} exact />
        <Route path="/edit/:id" component={EditStartup} exact />
        <Route path="/checkout" component={Checkout} exact />
        <Route path="/success" component={Success} exact />
      </Switch>
      <Footer />
    </GlobalProvider>
  );
}

export default App;
