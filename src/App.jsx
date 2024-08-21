import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from "react";
import "./App.css";
import { Link, useRoutes } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import ViewCreator from "./pages/ViewCreator";
import AddCreator from "./pages/AddCreator";
import EditCreator from './pages/EditCreator';
import { supabase } from './client';

function App() {
  const [creatorData, setCreatorData] = useState([]);

  useEffect(() => {
    async function fetchCreator(){
      const {data, error} = await supabase
      .from('Creatorverse')
      .select()
      
      setCreatorData(data)
    }
    fetchCreator();
  }, []);

  let element = useRoutes([
    {
      path: "/",
      element: <Home creatorData={creatorData}/>,
    },
    {
      path: "/view-creator/:id",
      element: <ViewCreator data = {creatorData}/>,
    },
    {
      path: "/add-creator",
      element: <AddCreator />,
    },
    {
      path: "/edit-creator/:id",
      element: <EditCreator data = {creatorData}/>,
    },
  ]);

  return (
    <>
      <Header />
      <div className='d-flex align-item-center justify-content-evenly m-3'>{element}</div>      
    </>
  );
}

export default App;
