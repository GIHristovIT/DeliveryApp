
import './styles/MainSettings.scss';
import { useState } from 'react';
import Header from './component/HeaderFiles/HeaderWrapper';
import ModalWrapper from './component/Modals/ModalWrapper';
import { Routes, Route } from "react-router-dom";
import WholeContent from './component/WholeContent';

function App() {
  // container to keep all of the selected items information
  const [selectedItems, setSelectedItems] = useState([])
  // used to trigger modal state on of
  const [displayModal, setDisplayModal] = useState(false)
  // points out which modal is suppose to render - (true=success)
  const [isSuccess, setIsSuccess] = useState(false)
  return (<>
    <div id="headerMainContainer">
      <Header />
    </div>
    <Routes>
    <Route path="/" element={<WholeContent title="Welcome to DreamShot" 
     selectedItems={selectedItems}
     setSelectedItems={setSelectedItems}
     displayModal={displayModal}
     setDisplayModal={setDisplayModal}
     isSuccess={isSuccess}
     setIsSuccess={setIsSuccess}
     />}>
          <Route path="/" element={ <ModalWrapper setDisplayModal={setDisplayModal}
        isSuccess={isSuccess}
        setSelectedItems={setSelectedItems}
        selectedItems={selectedItems}
        setIsSuccess={setIsSuccess} 
     />}>            
          </Route>
     </Route> 
    <Route 
          path="*"
          element={<h1 style={{display:'flex', position:'relative',justifyContent:'center', top:'250px'}}>404 Page Not Found</h1>}
        />
    </Routes>
  </>
  );
}

export default App;
