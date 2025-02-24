import logo from './logo.svg';
import './App.css';
import { Data } from './Data/Data';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShowQuestion from './Components/ShowQuestion'
import AddQuestions from './Components/AddQuestions';
import DeleteAllQuestions from './Components/DeleteAllQuestions'
import { useState,useEffect  } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const notify = (message,title) =>{
    if(title==="Error"){
      toast.error(message)
    }else if (title==="success"){
      toast.success(message)
    }
  };

  const GetDataCheck=localStorage.getItem("Items");
  if(GetDataCheck==null){
    localStorage.setItem("Items", JSON.stringify([]));

  }




   const [GetData,SetData]=useState(Data);
   const ChangeData=()=>{
    
    localStorage.setItem("Items",JSON.stringify([...Data]));
    SetData([...Data]);

  
    notify("تم الاضافه بنجاح ","success");

   }
   const Delete=()=>{
    // localStorage.removeItem("Items");
    localStorage.setItem("Items", JSON.stringify([]));
    SetData([...Data])
    
    notify("تم  حذف الكل بنجاح ","success");
    
   }
   const OnDeleteSelected=(item)=>{
    SetData([...item])
    localStorage.setItem("Items",JSON.stringify([...Data]));


    notify("تم الحذف بنجاح ","success");
   }
 
  return (
 
  <>
 
     <ToastContainer /> 
  <Container className='mt-5 font'>
      <Row className='d-flex font'>
        <Col>اسئله واجوبه شائعه</Col>
        <Col> <AddQuestions ChangeData={ChangeData}/></Col>
        </Row>
        <Row className='font'>
          {
                GetDataCheck.length>2?<ShowQuestion  Data={Data} OnDeleteSelected={OnDeleteSelected}/>:
                <p className='text-center'>لا يوجد اسئله لعرضها</p>
          }
        
        </Row>
        
      <Row className='mt-3 font'>
        {
          GetDataCheck.length>2?<DeleteAllQuestions 
         Delete={Delete}    />:""

        }
     
      </Row>
    </Container>
  </>  
  );
}

export default App;

