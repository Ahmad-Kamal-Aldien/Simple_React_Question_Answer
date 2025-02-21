import { Data } from '../Data/Data';
import Button from 'react-bootstrap/Button';


const DeleteAllQuestions=({Delete})=>{


  const DeleteAllItems=()=>{

    Data.splice(0,Data.length);
    Delete();
  }
    return(
        <>
      <Button onClick={DeleteAllItems} variant="danger">  حذف الكل</Button>

        </>
    )
}

export default DeleteAllQuestions;