
import './App.css';
import React from 'react';
import {Button, Navbar, Container, Nav,Row,Col,Carousel,Form,NavDropdown} from 'react-bootstrap'
import data from './data.js';
import { useState } from 'react';
import Detail from './Detail';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import nike from './nike';
import axios from 'axios'
import Cart from './Cart.js'

import styled from 'styled-components'

import { useEffect } from "react";

import Slider from 'react-slick';
import Slick from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";











function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [res1, setRes1] = useState([0,1,2,3,4,5,6,7,8]);
  let [nike10, setNike10] = useState(nike);
  let [count, setCount] = useState(1);

  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if(ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  }

  const handleTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);  // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  }

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow)
    }
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow)
    }
  })


  const settings = {
    arrow: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <div className="App">




{/* ------여기서부터 네비게이션-------- */}

    <>



    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid     >
        <Navbar.Brand href='#'> <img
          src="img/foodimg/logo.png"
          height="40"
          alt="Logo"
          loading="lazy"
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: 'auto' }}
            navbarScroll
          >
            <Nav.Link  onClick={()=>{ navigate('/')}} style={{ 
                  cursor:'pointer',
                  fontFamily: 'Maven Pro',
                  fontWeight:'600',
                  fontSize:'20px',
                  color:'#333333'
                }}>Home</Nav.Link>
            <Nav.Link  onClick={()=>{ navigate('/detail/0')}} style={{ 
                  cursor:'pointer',
                  fontFamily: 'Maven Pro',
                  fontWeight:'600',
                  fontSize:'20px',
                  color:'#333333'

                }}>shop</Nav.Link>
            
            <Nav.Link onClick={()=>{ navigate('/Cart')}} style={{ 
                  cursor:'pointer',
                  fontFamily: 'Maven Pro',
                  fontWeight:'600',
                  fontSize:'20px',
                  color:'#333333'
                }}>cart</Nav.Link>

            <NavDropdown title="about" id="navbarScrollingDropdown" className='navblack' onClick={()=>{ navigate('/About')}} style={{ 
                  cursor:'pointer',
                  fontFamily: 'Maven Pro',
                  fontWeight:'600',
                  fontSize:'20px'
                 
                }}>

              <NavDropdown.Item href="#company">company</NavDropdown.Item>
              <NavDropdown.Item href="#member">member</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#customer">
                Customer Service
              </NavDropdown.Item>
            </NavDropdown>


          </Nav>


          <Form className="d-flex" style={{ fontFamily: 'Maven Pro'}}>
            <Form.Control
              type="search"
              placeholder="Search delicious salad! "
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>


          <Nav.Link onClick={()=>{ navigate('/Cart')}} style={{ 
                  cursor:'pointer',
                  fontSize:'23px',
                  fontFamily: 'Crimson Text',
                  float:'right',
                  color:'#888888'
                }}><i class="fa-solid fa-sliders" style={{color:'#333333'}}></i>  
                   <i class="fa-solid fa-user" style={{marginLeft:'10px',color:'#333333'}}></i></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </>


 

{/* ------여기까지 네비게이션-------- */}


{/* 최상단으로 올라가는 버튼 */}

<div className="wrap">
      <button 
        className={BtnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
        onClick={handleTop}  // 버튼 클릭시 함수 호출
      >TOP</button>
    </div>

<Routes>

          {/* ------여기부터 메인페이지시작-------- */}
          <Route path="/" 
          element=
          {<div>
              <>
             
              

 {/* -----여기서부터 슬라이더------- */}

 <>
    <div >

    <Carousel  interval={2000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/slider11.png"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/slider22.png"
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/slider33.png"
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      
    </div>
 </>




 {/* -----여기까지 슬라이더------- */}

 


                  {/* 슬라이더 밑에 아이콘 4개들 */}
                    
                     <Sliderline/>

                  {/* 아이콘및에 글씨 */}

                       <Thirdline/>

                    

              <Title/> {/* 첫라인 문구 MOST POPULAR */}

              
                    {/* 여기부터 버튼들 시작 */}

                    <Button variant="outline-primary"  
                    style={{fontFamily: 'Maven Pro',fontWeight:'600',marginBottom:'10px'}}  onClick={()=>{
                    let copy3 = [...shoes].sort((a, b) =>
                      a.title > b.title ? 1 : -1,
                    );
              
                    setShoes(copy3);
                    shoes = copy3;
            
                    var res=[];
                    for(let i in shoes) {
                      res.push(shoes[i].id);
                    }
                    setRes1(res1=res);

                  }}>Sort by name</Button>{' '}

                  <Button variant="outline-secondary"  
                  style={{fontFamily: 'Maven Pro',fontWeight:'600',marginBottom:'10px'}} onClick={()=>{
                                    let copy4 = [...shoes].sort((a, b) =>
                                      a.price > b.price ? 1 : -1,
                                    );
                            
                                    setShoes(copy4);
                                    shoes = copy4;
                                    var res=[];
                                    for(let i in shoes) {
                                      res.push(shoes[i].id);
                                    }
                                    setRes1(res1=res);
                  
                                }}>Low Price</Button>{' '}

                                

                      <Button variant="outline-success" 
                      style={{fontFamily: 'Maven Pro',fontWeight:'600',marginBottom:'10px'}} onClick={()=>{
                              let copy5 = [...shoes].sort((a, b) =>
                                b.price > a.price ? 1 : -1,
                              );
                              setShoes(copy5);
                              shoes = copy5;
                              var res=[];
                              for(let i in shoes) {
                                res.push(shoes[i].id);
                              }
                              setRes1(res1=res);
                

              }}>High Price</Button>{' '}






                  {/* 여기부터 버튼들 끝 */}

   {/* -----여기부터 첫 상품들 most popular-------- */}


              
        
        <div className="container" style={{marginTop:'30px'}}>

            <div className="row" >
                  {
                    shoes.map((ele, i) => {
                    return (
                      <Product shoes={shoes[i]} res1={res1} i={i} />
                    )
                    })
                  }
            </div>


        </div>


              
 {/* -----여기까지 첫 상품들 most popular-------- */}




{/* 여기는 넣을까 말까 하는곳 */}
{/* <Row >
        <Col>

        <h1 style=
        {{marginBottom:'30px',marginTop:'30px', fontFamily:'Maven Pro',fontWeight:'600',
        width:'100%',
        height:'500px',
padding : '100px 100px',
border:'1px solid #ccc',
backgroundImage:'url("../img/middle4.jpg")',
backgroundSize:'cover',
backgroundPosition:'center'
        }}>
          
          
          What's different when you work with us?
          
          </h1>
        
        </Col>


  </Row> */}
   

                 <Title2/> {/* // ---HEALTHY DIET 두번째 라인----- */}

                  

                    {/* 여기부터 두번째 버튼 시작*/}

                    <Button variant="outline-success" style={{fontFamily: 'Maven Pro',fontWeight:'600'}} count = {count} onClick={()=>{

                      if(count==1){
                        axios.get('https://kimeunseongo.github.io/react_data2/nike2.json').then((result)=>{
                            let copy10 =[...nike10, ...result.data];
                            setNike10(copy10);
                            setCount(2);

                      })}else if(count==2){
                        axios.get('https://kimeunseongo.github.io/react_data2/nike3.json').then((result)=>{

                          let copy11 =[...nike10, ...result.data];
                          setNike10(copy11);
                          setCount(3);
                        })   
                      }


                      if(count===3){
                        alert("더이상 상품이 없습니다.");  
                      }


                      }}> <span style={{fontFamily: 'Maven Pro'}}>+</span> View 
                      <span style={{fontFamily: 'Maven Pro'}}> 3 </span>more products</Button>{' '} 

                      <div className="container" style={{marginTop:'30px'}}>
                      <div className="row">
                          {
                          nike10.map((ele, i) => {
                          return (
                          <Nike nike10={nike10[i]}  />

                          )
                          })
                          }
                      </div>
                      </div>   
                       

                     



                {/* 여기까지 두번째 버튼 음식들  */}

                   

                  {/* ----여기까지 다이어트 샐러드 볼---  */}

                  <Ship/>
                    
                

            </>
            </div>} />  {/* 이거 route path/닫은거 */}

          {/* ------여기까지 메인페이지 끝-------- */}





          {/* ------여기부터 상세페이지시작-------- */}


          <Route path="/detail/:id" element={<Detail shoes={shoes} />}  /> 

          <Route path="/cart" element={<Cart/>}/>

           {/* ------여기까지 상세페이지 끝-------- */}

        <Route path="/About" element={<About/>} >
          
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치</div>} />

        </Route>
</Routes>







<Under/>

<Footer/>




 


     
    </div>  // 이게 마지막 app /div 임
  
  );
}







const Sliderline =()=>{
 
  return(
    <>
   
    <Container style={{marginTop:'80px'}}>

      <Row>

     
        <Col xs className='icons' > <img
                src="img/foodimg/eco.svg"
                style={{ height:'auto',
                  weight:'auto',
                  cursor:'pointer'
                }}
                ></img>
                <h3 style={{
                    fontSize:'30px',
                    padding:'20px 0 0 0px',
                    fontFamily: 'Maven Pro',
                    fontWeight:'bold',
                    cursor:'pointer'
                }}>Eco</h3></Col>

   

        <Col xs={{ order: 12 }} className='icons'><img
                src="img/foodimg/islogical.svg"
                style={{ height:'auto',
                  weight:'auto',
                  cursor:'pointer'}}
                ></img>
                <h3 style={{
                    fontSize:'30px',
                    padding:'20px 0 0 0px',
                    fontFamily: 'Maven Pro',
                    fontWeight:'bold',
                    cursor:'pointer'
                }}>Is Logical</h3></Col>

        <Col xs={{ order: 1 }} className='icons'> <img
                src="img/foodimg/yummy.svg"
                style={{ height:'auto',
                  weight:'auto',
                  cursor:'pointer'}}
                ></img>
                <h3 style={{
                    fontSize:'30px',
                    padding:'20px 0 0 0px',
                    fontFamily: 'Maven Pro',
                    fontWeight:'bold',
                    cursor:'pointer'
                }}>Yummy</h3></Col>

        <Col xs={{ order: 1 }} className='icons'> <img
                src="img/foodimg/cheap.svg"
                style={{ height:'auto',
                  weight:'auto',
                  cursor:'pointer'}}
                ></img>
                <h3 style={{
                    fontSize:'30px',
                    padding:'20px 0 0 0px',
                    fontFamily: 'Maven Pro',
                    fontWeight:'bold',
                    cursor:'pointer'
                }}>Cheaply</h3></Col>

      </Row>

    </Container>
    
    
          </>
    
  );
}



const Thirdline =()=>{
  let csst5 = {
    fontSize:"35px",
    display:'flex',
    justifyContent:'center',
    fontFamily: 'Maven Pro', 
    fontWeight:'600',
    padding:'80px 0 0 0px'
  }
  let csst6 = {
    fontSize:"25px",
    display:'flex',
    justifyContent:'center',
    fontFamily: 'Maven Pro', 
    padding:'5px 0 50px 0px',
    color:'#888888'
  }
  return(
    <>
      <h3 style={csst5}>We are Glad to Surprise You</h3>
      <p style={csst6}> Do not wait for tomorrow - start a new life today!</p>
    </>
  );
}

// ---MOST POPULAR 첫 라인-----

const Title =()=>{
  let csst1 = {
    marginTop:"70px",
    textAlign:'center',
    fontFamily: 'Abril Fatface', 
    fontSize:'40px'
  }

  let hrst={
    width:'80%',
    color:'green',
    margin:'30px auto'
  }
  return(
    <>
    <hr style={hrst}></hr>
      <h3 style={csst1}>Most Popular  </h3>
      <p style={{textAlign:'center',fontFamily: 'Crimson Text', color:'#888888', fontSize:"25px"}}> Enjoy the most delicious dishes!</p>
    </>
  );
}


// ---밑에 첫 상품들----



function Product(props) {
  let navigate = useNavigate();

  let contentst = {
    fontSize:"15px",
    margin:'15px',
    fontFamily: 'Maven Pro',
    color:"#777777"
  }

  let foodti2 = {
    fontSize:"15px",
    color:'orange',
    marginTop:'-20px'
    
  }

  let foodti = {
    fontSize:"20px",
    fontFamily: 'Maven Pro',
    fontWeight:'600',
    marginTop:'10px'
  }

  let pricest = {
    fontSize:"20px",
    fontFamily: 'Maven Pro',
    fontWeight:600
  }

  let btnst = {
    fontSize:"18px",
    fontFamily: 'Maven Pro',
    fontWeight:600,
    backgroundColor:'#64a862',
    color:'white',
    border:'none',
    padding:'10px',
    margin:'0 0 50px 0px',
    borderRadius:'10px',
    width:'130px'
  }

  
  return (
    <div className="col-md-3">
       <Nav.Link onClick={() => {navigate('/detail/'+ props.res1[props.i]) }} className="c1" >
          <img src={props.shoes.imgUrl} width="100%" />
          <p style={contentst}>{props.shoes.content}</p>
          <h4 style={foodti2}>{props.shoes.title2}</h4>
          <h5 style={foodti}>{props.shoes.title}</h5>

          <p style={pricest}>${props.shoes.price}</p>
          <button style={btnst}>Add To Cart</button>
      </Nav.Link>
    </div>
  );

}

// ---HEALTHY DIET  두번째 라인-----

const Title2 =()=>{
  let csst1 = {
    marginTop:"70px",
    textAlign:'center',
    fontFamily: 'Abril Fatface', 
    fontSize:'40px'
  }

  let hrst={
    width:'80%',
    color:'green',
    margin:'70px auto'
  }
  return(
    <>
    <hr style={hrst}></hr>
      <h3 style={csst1}>Healthy Diet Supplement </h3>
      <p style={{textAlign:'center',fontFamily: 'Crimson Text', color:'#888888', 
      fontSize:"25px"}}> 
      Enjoy your diet while eating delicious food!</p>
    </>
  );
}

// ---HEALTHY DIET 두번째 라인-----


function Nike(props) {

  let contentst = {
    fontSize:"15px",
    margin:'15px',
    fontFamily: 'Maven Pro',
    fontFamily: 'Maven Pro',
    color:"#777777"
  }

  let foodti = {
    fontSize:"23px",
    fontFamily: 'Maven Pro',
    fontWeight:'600',
    marginTop:'10px'
  }

  let pricest = {
    fontSize:"20px",
    fontFamily: 'Maven Pro',
    fontWeight:600
  }


  return (
    <div className="col-md-4">
        <img src={props.nike10.imgUrl} width="80%" />
        <p style={contentst}>{props.nike10.content}</p>
        <h5 style={foodti}>{props.nike10.title}</h5>
        <p style={pricest}>${props.nike10.price}</p>
      
    </div>
  );
}


const Ship =()=>{

  
  let containerst = {

    marginTop:'80px'
  }



  let shipst = {

    fontFamily: 'Abril Fatface',
    fontSize:'80px',
    display:'flex',
    color:'#64a862'
  }

  let shipst2 = {


    fontSize:'40px',
    display:'flex',
    flexWrap:'wrap',
    marginLeft:'20px',
    color:'black'
  }

  
  
  return(
    <>
    <div>
    
        <Container style={containerst} className='containerst'>
          <Row>

            <Col style={shipst}><div> <i class="fa-solid fa-truck-fast"></i> </div>

            <div style={shipst2}>Free shipping 
            <p style={{fontSize:'20px',color:'#777777',fontFamily: 'Maven Pro'}}>
              Free shipping on all US order or order above $49</p></div></Col>

              <Col style={shipst}><div>  <i class="fa-solid fa-wallet"></i> </div>

<div style={shipst2}>Payment
<p style={{fontSize:'20px',color:'#777777',fontFamily: 'Maven Pro'}}>
Credit Card: Visa, MasterCard, Maestro, American Express.</p></div></Col>


           
          </Row>
        </Container>
    
    
    </div>
    </>
  );
}




const Under =()=>{
  
  return(
    <>
      <div className='underimg'>
      <img src='../img/foodimg/footerimg.png'/>
      </div>
    </>
  );
}



function Footer() {
  return (
      <div className='footer-container'>
          
          <div class='footer-links'>
              <div className='footer-link-wrapper'>
                  <div class='footer-link-items'>
                      <h2>About Us</h2>
                      <Link to='/sign-up'>How it works</Link>
                      <Link to='/'>Testimonials</Link>
                      <Link to='/'>Careers</Link>
                      <Link to='/'>Investors</Link>
                      <Link to='/'>Terms of Service</Link>
                  </div>
                  <div class='footer-link-items'>
                      <h2>Contact Us</h2>
                      <Link to='/'>Contact</Link>
                      <Link to='/'>Support</Link>
                      <Link to='/'>Destinations</Link>
                      <Link to='/'>Sponsorships</Link>
                  </div>
                 

                          <section className="footer-subscription">
                      <p className="footer-subscription-heading">
                      NEWSLETTER SIGNUP
                      </p>
                      
                      <p className="footer-subscription-text">
                      Sign up for our e-mail and be the first who know our special offers!
                      </p>
                      <div className="input-areas">
                          <form>
                              <input type="email" name = "email" placeholder = "Your Email" 
                              className="footer-input"/>
                              <Button  
                              style={{backgroundColor:'#64a862' ,
                              border:'4px solid #64a862'}}>
                                join us</Button>
                          </form>
                      </div>
                  </section>
                      </div>
                  </div>
                  <section className="social-media">
                      <div className="social-media-wrap">
                          <div className="footer-logo">
                              <Link to='/' className="social-logo">
                                  Ecofood <i className="fab fa-typo3"></i>
                              </Link>
                          </div>
                          <small className="website-rights">© Wokiee 2022. Made with  by HasThemes.</small>
                          <div className="social-icons">
                              <Link className="social-icon-link facebook" to="/"
                              target = "_blank"
                              aria-label="Facebook"
                              >
                                  <i className="fab fa-facebook-f"></i>
                              </Link>
                              <Link className="social-icon-link instagram" to="/"
                              target = "_blank"
                              aria-label="Instagram"
                              >
                                  <i className="fab fa-instagram"></i>
                              </Link>
                              <Link class='social-icon-link youtube'
                              to='/'
                              target='_blank'
                              aria-label='Youtube'
                              >
                              <i class='fab fa-youtube' />
                              </Link>
                              <Link
                              class='social-icon-link twitter'
                              to='/'
                              target='_blank'
                              aria-label='Twitter'
                              >
                              <i class='fab fa-twitter' />
                              </Link>
                              <Link
                              class='social-icon-link twitter'
                              to='/'
                              target='_blank'
                              aria-label='LinkedIn'
                              >
                              <i class='fab fa-linkedin' />
                              </Link>
                          </div>
                      </div>
                  </section>
                

      </div>
  )
}

// ---네비게이션 ABOUT이랑 MEMBER----






const Aboutline =()=>{
 
  return(
    <>
   
    <Container style={{marginTop:'30px',width:'80%'}}>

      <Row>

     
        <Col xs className='icons' > <i class="fa-solid fa-coins" style={{fontSize:'70px'}}></i>
                <h3 style={{
                    fontSize:'30px',
                    padding:'20px 0 0 0px',
                    fontFamily: 'Crimson Text',
                    cursor:'pointer'
                }}>Salary</h3></Col>

   

        <Col xs={{ order: 12 }} className='icons'><i class="fa-solid fa-heart-pulse" style={{fontSize:'70px'}}></i>
                <h3 style={{
                    fontSize:'30px',
                    padding:'20px 0 0 0px',
                    fontFamily: 'Crimson Text',
                    cursor:'pointer'
                }}>Education</h3></Col>

        <Col xs={{ order: 1 }} className='icons'> <i class="fa-solid fa-suitcase-rolling" style={{fontSize:'70px'}}></i>
                <h3 style={{
                    fontSize:'30px',
                    padding:'20px 0 0 0px',
                    fontFamily: 'Crimson Text',
                    cursor:'pointer'
                }}>Vacation</h3></Col>

        <Col xs={{ order: 1 }} className='icons'> <i class="fa-solid fa-seedling" style={{fontSize:'70px'}}></i>
                <h3 style={{
                    fontSize:'30px',
                    padding:'20px 0 0 0px',
                    fontFamily: 'Crimson Text',
                    cursor:'pointer'
                }}>Environment</h3></Col>

      </Row>

    </Container>
    
    
          </>
    
  );
}



function About(){


    
  let Box = styled.div`

  color : gray;
  `;
  
  
  let YellowBtn = styled.button`
  color : white;
  font-size:30px;
  width:100%;
  padding : 100px 100px;
  border:1px solid #ccc;
  background-image:url("../img/middle5.jpg");
  background-size:cover;
  background-position:center;
  `;
  



  return(
   <>
      <Box>

        <YellowBtn ><p style={{marginTop:'10px',fontFamily:'Cormorant Garamond',fontWeight:'600',fontSize:'50px'}}>
          About <span style={{color:'#64a862'}}>Eco</span><span style={{color:'#a5705b'}}>Food</span></p>
         
         
         <p style={{fontSize:'18px'}}>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
         <br/>Cras dignissim vehicula nisl vitae mattis. Ut pretium elit leo, a ullamcorper libero iaculis vitae. 
        
          
          </p>

         </YellowBtn>

        

     </Box>


     <ul id="nav2" class="nav justify-content-center bg-light"  >
            <li class="nav-item" >
                <a class="nav-link disabled " href="#" style={{fontSize:'20px', color:'#a5705b',fontFamily:'Cormorant Garamond',fontWeight:'600'}}>Who are we</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" style={{fontSize:'20px',color:'#0000008c',fontFamily:'Cormorant Garamond',fontWeight:'600'}}>Our senior staff</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" style={{fontSize:'20px',color:'#0000008c',fontFamily:'Cormorant Garamond',fontWeight:'600'}}>Our work</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" style={{fontSize:'20px',color:'#0000008c',fontFamily:'Cormorant Garamond',fontWeight:'600'}}>Working at EcoFood</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" style={{fontSize:'20px',color:'#0000008c',fontFamily:'Cormorant Garamond',fontWeight:'600'}}>Business service</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="#" style={{fontSize:'20px',color:'#0000008c',fontFamily:'Cormorant Garamond',fontWeight:'600'}}>Get in touch</a>
            </li>
           
          
        </ul>

     

       

        <Container >

        <h3 className='aboutwho'>Who are we</h3>

        <hr style={{marginBottom:'50px'}}/>

        
    
      <Row>
        <Col sm style={{height:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <>         
           <div style={{width:'100%',height:'100%',backgroundColor:'#eee'}}>


            <div style={{overflow:'hidden'}}>

          <img src='../img/work1.jpg' className='aboutimg' style={{width:'100%'}} />

          </div>


          <div style={{padding:'10px'}}>

                <h3 style={{textAlign:'left', fontFamily: 'Maven Pro'}}>History of EcoFood</h3>

                <p style={{textAlign:'left', fontFamily: 'Maven Pro'}}>
                Ecofood is a start-up that is hard to find in an industry that has grown through
                failures and successes of various business models in the e-commerce market 
                without a single investment since 2017. Currently,
                  it has secured over 1,300 customers by servicing the marketing agency 'StudioMX' and the review management solution 'Alphaview'. 

                </p>

                </div>
          
          </div>

          </>

        </Col>

        <Col sm >

        <>         
           <div style={{width:'100%',height:'100%',backgroundColor:'#eee'}}>

             <div style={{overflow:'hidden'}}>

          <img src='../img/work2.jpg' className='aboutimg' style={{width:'100%'}} />

          </div>

          <div style={{padding:'10px'}}>

                <h3 style={{textAlign:'left', fontFamily: 'Maven Pro'}}>Our commitment equality</h3>

                <p style={{textAlign:'left', fontFamily: 'Maven Pro'}}>
                The speed at delivering value to customers makes them the fastest team in the world.
                Moving fast means “prioritizing speed over prudence”. Because of uncertainty and lack of information,
                there is a risk that the intended objectives will not be achieved. But by being willing to take these small failures,
                you reject the bigger risk of being a loser in the competition. 
                And enjoy a virtuous cycle of the preemptive effect.

                </p>

                </div>
          
          </div>

          </>


          
          

        </Col>

        <Col sm >

        <>         
           <div style={{width:'100%',height:'100%',backgroundColor:'#eee'}}>

          <div style={{overflow:'hidden'}}>

          <img src='../img/work3.jpg' className='aboutimg' style={{width:'100%'}} />

          </div>

          <div style={{padding:'10px'}}>

                <h3 style={{textAlign:'left', fontFamily: 'Maven Pro'}}>Access to information</h3>

                <p style={{textAlign:'left', fontFamily: 'Maven Pro'}}>

                  We believe that anyone can grow, and we grow bigger by growing together.
                  As an individual crew member, I seek feedback first and use it as information for my growth.
                  At the same time, by providing active feedback,
                  we help our colleagues grow and the Salad Lab team succeed.

                </p>

                </div>
          
          </div>

          </>

          
        </Col>


      </Row>


      



      <Row>

        <Col>
        <div style={{marginTop:'80px'}}>

          <h1 style={{fontFamily:'Maven Pro',fontWeight:'600'}}>We support a stable life. </h1>

        
          <p>
             Horizontal organizational culture, no forced dinner party,<br/>
             no overtime work, free attire, free use of annual leave, nim/nick name culture, guaranteed leave from work<br/>
             Annual leave, congratulations and condolences leave, semi-annual leave, maternity leave, parental leave
             </p>

        

        </div>
        
        
        </Col>


      
       




      </Row>

        

<Aboutline />


     
<Button style={{width:'200px',height:'50px',marginTop:'50px',backgroundColor:'#a5705b',
border:'1px solid #a5705b'}}>Meet Our Team</Button>
     

      



    </Container>



    <div style={{backgroundColor:'#eee',marginTop:'100px'}}>


    <Row >
            <Col>

            <h1 style={{marginBottom:'30px',marginTop:'30px', fontFamily:'Maven Pro',fontWeight:'600'}}>What's different when you work with us?</h1>
            
            </Col>


      </Row>


      <Container>
        
        
              <Row>

          <Col sm >

            <div style={{}}>

                <p style={{textAlign:'left',fontFamily: 'Maven Pro'}}>We support a stable life.
                Health checkup, support for various congratulations and condolences, payment of health expenses
                I want to repay the enthusiasm of the employees.
                4 major insurance
                Our company's special welfare!
                Holiday gift/homecoming expenses, unlimited books, welcome kit
                We respect the self-development of our employees!</p>

                <p style={{textAlign:'left',fontFamily: 'Maven Pro'}}>

                Workshop, training for new employees , support for book purchases, support for education expenses, operation of in-house clubs, snacks, beverages (tea, coffee)
                We provide the best environment in which to work comfortably.
                conference room, air purifier
                We create an employee-centered organizational culture.


                </p>

                  <p style={{textAlign:'left',fontFamily: 'Maven Pro'}}>


                  Horizontal organizational culture, no forced dinner party, no overtime work, free attire, free use of annual leave, nim/nick name culture, guaranteed leave from work
                  We provide commuting and various working systems for the convenience of our employees!
                  40 hours per week
                  The best welfare is vacation!
                  Annual leave, congratulations and condolences leave, semi-annual leave, maternity leave, parental leave

                  </p>


                  </div>



          </Col>

          <Col sm>
            <ul className='aboutdiff'>

                  <li>the beginning of my career
                  It is a collection of companies whose size is a small business/startup.</li>
                  <li>Main Biz
                  It is a company certified as a main biz company through the Ministry of SMEs and Startups.</li>
                  <li>Don't pay attention to overtime
                  For a life in the evening! A company that does not force overtime</li>
                  <li>Take care of your health in Kosi Guk!
                  There is nothing more important than health! 'Health checkup' support company</li>
                  <li>Welcome kit payment company
                  This is a collection of companies that provide a welcome kit upon joining.</li>
                  <li>Holiday gift / homecoming gift
                  On the holidays, both hands are thick! Companies that support 'Holiday Gifts/Return to Homecoming'</li>
                  <li>Welfare company that provides snacks!
                  Company information and job postings that provide 'snacks' welfare</li>

            </ul>
          </Col>

      </Row>


    

      </Container>
      



    </div>


    <Container>
    <Row>

<Col>
  <div style={{marginTop:'80px'}}>

    <h1 style={{fontFamily:'Maven Pro',fontWeight:'600'}}>Our process </h1>

  
    <p>It is a company certified as a main biz company through the Ministry of SMEs and Startups.<br/>
    Welfare company that provides snacks!
Company information and job postings that provide 'snacks' welfare
    </p>
  


  </div>
  
  
  </Col>

</Row>


{/* 맨마지막 our process */}


 
<Row >

        <Col sm style={{height:'auto',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'80px'}}>
          <>         
           <div style={{width:'100%',height:'100%',backgroundColor:'#eee'}}>

 
            <div style={{backgroundColor:'#6b5248',height:'100px',display:'flex',justifyContent:'center',position:'relative'}}>

            <i class="fa-solid fa-pen-to-square" style={{backgroundColor:'white',fontSize:'50px',
             padding:'15px',border:'8px solid #64a862', borderRadius:'100%',position:'absolute',top:'-50px',left:'35.5%',color:'#6b5248'}}></i>

            <h4 style={{fontFamily: 'Maven Pro',color:'white',marginTop:'50px'}}>Project Initiation</h4>

          </div>


          <div style={{padding:'10px'}}>

              

               <ul className='ourpro'>
                <li style={{textAlign:'left'}} >Requirement gathering</li>
                <li>proposal</li>
                <li>project Plan</li>
                <li>Solution page</li>
               </ul>

                </div>
          
          </div>

          </>

        </Col>

        <Col sm style={{height:'auto',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'80px'}}>
          <>         
           <div style={{width:'100%',height:'100%',backgroundColor:'#eee'}}>

 
            <div style={{backgroundColor:'#6b5248',height:'100px',display:'flex',justifyContent:'center',position:'relative'}}>

            <i class="fa-solid fa-utensils" style={{backgroundColor:'white',fontSize:'50px',
             padding:'15px',border:'8px solid #64a862', borderRadius:'100%',position:'absolute',top:'-50px',left:'35.5%',color:'#6b5248'}}></i>




            <h4 style={{fontFamily: 'Maven Pro',color:'white',marginTop:'50px'}}>Food design</h4>

          </div>


          <div style={{padding:'10px'}}>

              

               <ul className='ourpro'>
                <li style={{textAlign:'left'}} >Concept/inspiration</li>
                <li>Branding</li>
                <li>Design/style guide</li>
                <li>Story boarding</li>
               </ul>

                </div>
          
          </div>

          </>

        </Col>

        <Col sm style={{height:'auto',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'80px'}}>
          <>         
           <div style={{width:'100%',height:'100%',backgroundColor:'#eee'}}>

 
            <div style={{backgroundColor:'#6b5248',height:'100px',display:'flex',justifyContent:'center',position:'relative'}}>

            <i class="fa-solid fa-feather" style={{backgroundColor:'white',fontSize:'50px',
             padding:'15px',border:'8px solid #64a862', borderRadius:'100%',position:'absolute',top:'-50px',left:'35.5%',color:'#6b5248'}}></i>




            <h4 style={{fontFamily: 'Maven Pro',color:'white',marginTop:'50px'}}>Development</h4>

          </div>


          <div style={{padding:'10px'}}>

              

               <ul className='ourpro'>
                <li style={{textAlign:'left'}} >food Development</li>
                <li>intergration</li>
                <li>development</li>
                <li>Quality assurance</li>
               </ul>

                </div>
          
          </div>

          </>

        </Col>


        <Col sm style={{height:'auto',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'80px'}}>
          <>         
           <div style={{width:'100%',height:'100%',backgroundColor:'#eee'}}>

 
            <div style={{backgroundColor:'#6b5248',height:'100px',display:'flex',justifyContent:'center',position:'relative'}}>

            <i class="fa-solid fa-hands-praying" style={{backgroundColor:'white',fontSize:'50px',
             padding:'15px',border:'8px solid #64a862', borderRadius:'100%',position:'absolute',top:'-50px',left:'33%',color:'#6b5248'}}></i>



            <h4 style={{fontFamily: 'Maven Pro',color:'white',marginTop:'50px'}}> develop Support</h4>

          </div>


          <div style={{padding:'10px'}}>

              

               <ul className='ourpro'>
                <li style={{textAlign:'left'}} >Analy</li>
                <li>Timely support</li>
                <li>Secrity scans</li>
                <li>Enhancement</li>
               </ul>

                </div>
          
          </div>

          </>

        </Col>


      </Row>



      <Button style={{width:'200px',height:'50px',marginTop:'50px',marginBottom:'60px',
       backgroundColor:'#6b5248',border:'1px solid #6b5248'}}>Learn more</Button>


       <p style={{color:'#ccc'}}>
       <i class="fa-solid fa-circle-question" style={{marginRight:'5px'}}></i>
        Company information is managed in the same way based on business registration number, and it is provided using NICE evaluation information, Incredible, Financial Supervisory Service (DART),
credit data (National Pension Service), and data directly entered by corporate members.
The above information is not real-time information and may differ from the current information.</p>

      





    </Container>

  


      


    



     <Outlet></Outlet>
   </>
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};







export default App;
