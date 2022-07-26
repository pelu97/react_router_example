import { Route, Switch, Redirect } from "react-router-dom";

// pages
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

// dummy data
// import { DUMMY_QUOTES } from "./data/DUMMY_QUOTES";

// import Welcome from "./pages/Welcome";
// import Products from "./pages/Products";
// import MainHeader from "./components/MainHeader";
// import ProductDetail from "./pages/ProductDetail";

// all quotes, quote detailed, add new quote

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/quotes"/>
                </Route>
                <Route path="/quotes" exact>
                    <AllQuotes/>
                </Route>
                <Route path="/quotes/detail/:id">
                    <QuoteDetail/>
                </Route>
                <Route path="/quotes/new">
                    <NewQuote/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
