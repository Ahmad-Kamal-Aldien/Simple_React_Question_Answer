import logo from './logo.svg';
import './App.css';
import { Data } from './Data/Data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShowQuestion from './Components/ShowQuestion'
import AddQuestions from './Components/AddQuestions';
import DeleteAllQuestions from './Components/DeleteAllQuestions'
import { useState } from 'react';
function App() {

   const [GetData,SetData]=useState(Data);
   const ChangeData=()=>{
    SetData([...Data]);
   }
  return (
  <>
  <Container className='mt-5 font'>
      <Row className='d-flex font'>
        <Col>اسئله واجوبه شائعه</Col>
        <Col> <AddQuestions ChangeData={ChangeData}/></Col>
        </Row>
        <Row className='font'>
          {
                Data.length>0?<ShowQuestion  Data={Data}/>:
                <p className='text-center'>لا يوجد اسئله لعرضها</p>
          }
        
        </Row>
        
      <Row className='mt-3 font'>
        {
          Data.length>0?<DeleteAllQuestions/>:""

        }
     
      </Row>
    </Container>
  </>  
  );
}

export default App;
