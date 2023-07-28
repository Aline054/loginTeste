import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Menu from '../../teste/src/components/Menu'

function RoutesApp(){
    return(
        <BrowserRouter>
          <Routes>
            <Route  path="/" element={ <Home/> }/>
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/Menu' element={<Menu/>} />
          </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;