import Accordion from 'react-bootstrap/Accordion';
import Button   from 'react-bootstrap/Button';


const ShowQuestion=({Data})=>{

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
               <div> {e.Answer}</div>
              <Button variant="dark">حذف</Button>
      
              </Accordion.Body>
            </Accordion.Item>
      
           
          </Accordion>
          } )
        }
       
        
        </>
    )
}

export default ShowQuestion

