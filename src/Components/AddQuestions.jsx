import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Data } from '../Data/Data';
const AddQuestions=({ChangeData})=>{

    const [Answer,SetAnswer]=useState('')
    const [Question,SetQuestion]=useState('')
    const SaveData=()=>{
       Data.push( {id:Math.random(),Question:SetQuestion,Answer:SetAnswer} );
    

        
        ChangeData();
        SetQuestion('')
        SetAnswer('')
    }

    
    return(
        <>
        <div className='d-flex mb-4 gap-4'>
         <Form.Control value={Question} 
          onChange={(e)=>SetQuestion(e.target.value)}
       
          type="text" placeholder="السؤال" required />
          <Form.Control value={Answer}  
         onChange={(e)=>SetAnswer(e.target.value)} 
         
          type="text" placeholder="الاجابه" required />
          <Button onClick={SaveData} variant="primary" className='p-2'>اضافه</Button>
        </div>
        

        
        </>
    )
}

export default AddQuestions