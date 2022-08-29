import {Container, Row, Table,Col,Nav,Form} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
// import store, {changeName, increase} from './store.js'
import { addCount, sortName } from './store.js'
import { Button } from 'react-bootstrap'
import { useState } from 'react';
import './Cart.css';

import { useEffect } from "react";

import styled from 'styled-components'





function Cart(){

    let state = useSelector((state) => state) 
    // console.log(state.cart[0].name);

    // dispatch는  store.js 로 요청보내주는 함수
    let dispatch = useDispatch()

    let [tap, setTap] = useState(0);   

    let [fade2, setFade2] = useState('')
    useEffect(()=>{
      setFade2('end')
      return ()=>{
        setFade2('')
      }
    },[])


    
let Box = styled.div`

color : gray;
`;


let YellowBtn = styled.button`

color : white;
font-size:30px;
width:100%;
height:100px;
padding : 100px 100px;
border:1px solid #ccc;
background-image:url("../img/middle6.jpg");
background-size:cover;
background-position:center;
margin-top:20px;
`;



   return(
     <>

     <Container style={{width:'60%',marginTop:'40px'}}>

        <Row>
            <Col>

            <h5 style={{fontFamily:'Maven Pro',fontWeight:'600'}}>{state.user.name} {state.user.age}'s Cart</h5> 
       {/* <button onClick={()=>{ dispatch(increase())}}>나이+</button>


       <button onClick={()=>{ dispatch(increase(100))}}>나이+</button> */}

       <hr style={{fontWeight:'bold'}}/>

       
       <Table style={{fontFamily:'Maven Pro',marginTop:'50px'}}>
       
        <tbody>

        <tr>
            <th >id</th>
            <th>Product name</th>
            <th>Quantity</th>
            <th>add</th>
            </tr>
      
            {
                state.cart.map((a, i)=>

                <tr key={i}>

                    <td>{state.cart[i].id}</td>
                    <td>{state.cart[i].name}</td>
                    <td>{state.cart[i].count}</td>
                    <td><button onClick={()=>{
                         dispatch(addCount(state.cart[i].id))
                    }}  
                    style={{border:'none',borderRadius:'50px',width:'25px'}}
                    >+</button></td>

                </tr>
                )
            }

        </tbody>
       </Table> 
       <Button  style={{backgroundColor:'#ccc',border:'1px solid #ccc'}} onClick={()=>{
         dispatch(sortName(state.cart.Name))
       }}>Sort By Name</Button>{' '}


            
            
            
            
            </Col>

        </Row>


   
       


     </Container>





     <Container style={{width:'40%',marginTop:'40px'}}>

   

       <Row>
          <Col>
          

          
        {/* <h5 style={{fontFamily:'Maven Pro',fontWeight:'600',backgroundColor:'#ccc'}}>If you are not a member, I recommend you to sign up.</h5>  */}



        
<Nav fill variant="tabs"  defaultActiveKey="link0" style={{marginTop:'30px',height:'50px'}}>
        <Nav.Item >
        <Nav.Link  onClick={()=>{ setTap(0) }} eventKey="link0" style={{color:'black',height:'50px',fontFamily:'Maven Pro',fontWeight:'600'}} >
          Memeber login
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link onClick={()=>{ setTap(1) }} eventKey="link1" style={{color:'black',height:'50px',fontFamily:'Maven Pro',fontWeight:'600'}}>
          Non-member order inquery
          </Nav.Link>
        </Nav.Item>
      
      
    </Nav>

    <TabContent tap={tap}/>

          </Col>

       </Row>


       <Box>
        <YellowBtn ><p style={{marginTop:'-10px',fontFamily:'Maven Pro',fontWeight:'600',fontSize:'18px'}}>
        If you sign up now, you'll get a <span style={{color:'#f5634b'}}>10%</span> discount coupon</p></YellowBtn>
     </Box>

     </Container>






      
     </>

   )

}



function TabContent({tap}){
  let [fade, setFade] = useState('')
  useEffect( ()=>{
   setTimeout(()=>{ setFade('end')},10)
   return ()=>{
       setFade('')
   }
  } ,[tap])


  return [ 
  
  
  // 멤버인 경우 로그인
  <div style={{width:'70%',margin:'30px auto'}}>
    
    <Form>
      <Form.Group  controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="id" placeholder="id"  style={{margin:"0px auto"}}/>
        <Form.Control type="password" placeholder="Password"  style={{margin:"10px auto"}} />
      </Form.Group>

    
      <Form.Group controlId="formBasicCheckbox">

        <Form.Check type="checkbox" label="save ID" style={{display:'flex' }}/> 


      </Form.Group>

    
    </Form>

    <>
            <div className="mb-2" >
            <Button style=
            {{border:'1px solid #64a862',backgroundColor:'white',color:'#64a862',fontFamily:'Maven Pro',fontWeight:'600',width:'120px'}}>
            login
            </Button>{' '}
            <Button  style={{border:'1px solid #A5705B',backgroundColor:'#A5705B',color:'white',fontFamily:'Maven Pro',fontWeight:'600',width:'120px'}}>
            join us
            </Button>
            </div>

            </>

    



  </div>
  
  , 
  
  
  
  // 멤버가 아닌경우
  
  
  <div style={{width:'70%',margin:'30px auto'}}>
    
  <Form>
    <Form.Group  controlId="formBasicEmail">
      <Form.Label></Form.Label>
      <Form.Control type="id" placeholder="Orderer's name"  style={{margin:"0px auto"}}/>
      <Form.Control type="password" placeholder="Order Number"  style={{margin:"10px auto"}} />
    </Form.Group>

  
    <Form.Text className="text-muted">
    <p style={{fontSize:'12px'}}>
    <i class="fa-solid fa-circle-exclamation" style={{marginRight:'5px'}}></i>
      If you have forgotten your order number and password, please contact customer service.</p>
        </Form.Text>
  
  </Form>

  <>
          <div className="mb-2" >
          <Button style=
          {{border:'1px solid #64a862',backgroundColor:'white',color:'#64a862',fontFamily:'Maven Pro',fontWeight:'600',width:'120px'}}>
          Confirm
          </Button>{' '}
          <Button  style={{border:'1px solid #A5705B',backgroundColor:'#A5705B',color:'white',fontFamily:'Maven Pro',fontWeight:'600',width:'120px'}}>
          sign up
          </Button>
          </div>

          </>

  



</div>

][tap]
}


const Log =()=>{

  return(
    <>
      <h3 style={{fontSize:'16px',fontFamily:'Maven Pro',fontWeight:'600',marginTop:'5px'}} >login</h3>
      
    </>
  );
}

const Sign =()=>{

  return(
    <>
     <h3 style={{fontSize:'16px',fontFamily:'Maven Pro',fontWeight:'600',marginTop:'5px'}} >Sign up </h3>
      
    </>
  );
}

const Confirm =()=>{

  return(
    <>
      <h3 style={{fontSize:'16px',fontFamily:'Maven Pro',fontWeight:'600',marginTop:'5px'}} >confirm</h3>
      
    </>
  );
}






export default Cart