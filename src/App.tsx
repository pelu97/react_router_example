import { Route, Routes, Navigate, Link } from "react-router-dom";

// pages
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";

import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";

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
            <Routes>
                <Route path="/" element={<Navigate replace to="/quotes"/>} />
                <Route path="/quotes" element={<AllQuotes/>} />
                <Route path="/quotes/detail/:id" element={<QuoteDetail/>}>
                    <Route path="comments" element={<Comments/>} />
                    <Route path={""} element={
                        <div className="centered">
                            <Link className="btn" to={"comments"}>Comments</Link>
                        </div>
                    } />
                </Route>
                <Route path="/quotes/new" element={<NewQuote/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Layout>
    );
}

export default App;
