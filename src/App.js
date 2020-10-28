import './sass/App.scss'
import PopularMovies from './components/PopularMovies'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainSection from './components/MainSection'

const App = () => {
    return (
        <div className="app">
            <Header />
            {/* <PopularMovies /> */}
            <div className="content">
                <Sidebar />
                <MainSection />
            </div>
            
        </div>
    )
}

export default App
