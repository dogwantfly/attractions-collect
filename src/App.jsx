import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Login from './Login';
import Dashboard from './Dashboard';
import Attractions from './Attractions';
import Attraction from './Attraction';
import AdminAttraction from './AdminAttraction';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/login' element={<Login />}></Route>
          <Route index element={<Attractions />}></Route>
          <Route path='/attraction/:id' element={<Attraction />}></Route>
          <Route path='/admin'>
            <Route index element={<Dashboard />}></Route>
            <Route path='attraction' element={<AdminAttraction />}></Route>
          </Route>
        </Route>
      </Routes>
    </HashRouter>

  )
}

export default App
