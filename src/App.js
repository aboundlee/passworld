import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Selection from './Selection';
import styled from "styled-components";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const App = () => {


  return (

    <Wrapper>
        <Router>
            <Routes>
              <Route path='/' exact element={
			  	<h1>Home</h1>
			  }/>

              <Route path='/selection' 
			  	element={<Selection/>}
			  />
          </Routes>
        </Router>
    </Wrapper>
  );
}

export default App;


