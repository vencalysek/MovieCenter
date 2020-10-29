import './sass/App.scss'
import MoviesPopular from './components/MoviesPopular'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainSection from './components/MainSection'

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="content">
                <Sidebar />
                <MainSection />
            </div>
            
        </div>
    )
}

export default App

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