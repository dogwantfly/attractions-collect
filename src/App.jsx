import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Login from './Login';
import Dashboard from './Dashboard';
import Attractions from './Attractions';
import Attraction from './Attraction';
import AdminAttraction from './AdminAttraction';
import SignUp from './SignUp';
import Collects from './Collects'
import Admin from './Admin';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/sign_up' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route index element={<Attractions />}></Route>
          <Route path='/attraction/:id' element={<Attraction />}></Route>
          <Route path="/collects" element={<Collects />}></Route>
        </Route>
        <Route path='/admin' element={<Admin />}>
          <Route index element={<Dashboard />}></Route>
          <Route path='attraction' element={<AdminAttraction />}></Route>
        </Route>
      </Routes>
    </HashRouter>

  )
}

export default App
