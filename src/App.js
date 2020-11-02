import "./sass/App.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="content">
                <Router>
                    <Sidebar />
                    <MainSection />
                </Router>
            </div>
        </div>
    );
};

export default App;

// TODO
/********
 * upravit Movies elementy - vytvorit jeden component pro API call
 *
 * routing
 * movie details - MoviCard item
 * search api
 *
 *
 */
