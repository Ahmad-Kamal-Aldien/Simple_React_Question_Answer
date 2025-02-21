import Accordion from 'react-bootstrap/Accordion';
import Button   from 'react-bootstrap/Button';


const ShowQuestion=({Data,OnDeleteSelected})=>{

  const DeleteSelected=(e)=>{

    const GetID=Data.findIndex( (i)=>i.id===e );
    Data.splice(GetID,1);
 
    OnDeleteSelected(Data);
 
  }
    return(
        <>
        {
          Data.map( (e)=>{
            return  <Accordion key={e.id}>
            <Accordion.Item eventKey={e.id}>
            
              <Accordion.Header>
                <div className='m-auto'>
               {e.Question}
                </div>
             
                </Accordion.Header>
              <Accordion.Body className='text-end'>
               <div> {e.Answer}
              <Button onClick={ ()=>DeleteSelected(e.id)} variant="dark" >حذف</Button>
              </div>
              </Accordion.Body>
            </Accordion.Item>
      
           
          </Accordion>
          } )
        }
       
        
        </>
    )
}

export default ShowQuestion

