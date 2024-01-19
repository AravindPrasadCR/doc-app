import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEdit from './Components/AddEdit'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home'
import ViewDocs from './Pages/ViewDocs'

function App() {

  return (
    <div >
     <Header/>
     <Routes>
      <Route path={'/'} element={<Home/>} />       
      <Route path={'/view'} element={<ViewDocs/>} />
      <Route path={'/add'} element={<AddEdit/>} />
      <Route path="/edit/:id" element={<AddEdit edit/>} />      
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;