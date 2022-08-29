import { useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap'

import { useEffect } from "react";

// import data from './data';

import { addItem } from './store.js'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'
import './Detail.css';



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import Pagination from 'react-bootstrap/Pagination';


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';





let Box = styled.div`
padding : 20px;
color : gray;
`;


let YellowBtn = styled.button`

color : white;
font-size:30px;
width:100%;
padding : 100px 100px;
border:1px solid #ccc;
background-image:url("../img/middle3.jpg");
background-size:cover;
background-position:center;
margin-top:30px;
`;



let YellowBtn2 = styled.button`

color : white;
font-size:30px;
width:100%;
padding : 100px 100px;
border:1px solid #ccc;
background-image:url("../img/description.png");
background-size:cover;
background-position:center;
`;



function Detail(props) {
    let {id} = useParams();



    let [tap, setTap] = useState(0);   

    let [fade2, setFade2] = useState('')
    useEffect(()=>{
      setFade2('end')
      return ()=>{
        setFade2('')
      }
    },[])


    let selproduct  = props.shoes.find((x) => x.id == id )
    let dispatch = useDispatch()









    

    return (

      <>
        <div className={'container start ' + fade2} style={{marginTop:'30px'}}>

          
            <div className="row">

                <div className="col-md-6">

                <img src={'/'+selproduct.imgUrl} width="80%" />
                   
                </div>

                <div className="col-md-6" style={{padding:'40px'}}>
                   
                  


                        <Table    size="sm" >

                        <tbody >

                        <tr  >
                            <th  style={{textAlign:'left',border:'none'}}>
                              <h4 >{selproduct.title}</h4>
                              </th>
                        </tr>

                        <tr>
                            <th style={{textAlign:'left',marginBottom:'10px',border:'none'}}>
                              <h5 style={{fontSize:'14px'}}>{selproduct.content}</h5></th>
                          </tr>


                          <tr style={{borderBottom:'1px solid #ccc'}}>
                            <th style={{textAlign:'left',marginBottom:'10px'}}>
                              <h5 style={{fontSize:'14px'}}>★★★★★ (5.4)</h5>
                              </th>

                              <td colSpan={3} style={{textAlign:'left'}}><img src="../img/heart.png" className="heartshare" />
                              <img src="../img/share.png"  className="heartshare" /> </td>

                              
                          </tr>

                          <tr  >
                            <th  style={{textAlign:'left',border:'none'}}>
                              <h4 >${selproduct.price}.00   <del style={{color:'#f5634b',fontSize:'14px',marginLeft:'10px'}}>$30000.00</del></h4>
                              </th>
                        </tr>


                        <tr>
                            <th style={{textAlign:'left',marginBottom:'10px',border:'none'}}>
                              <h5 style={{fontSize:'14px'}}>Shipping information <i class="fa-solid fa-circle-question"></i></h5> 
                              
                              </th>
                          </tr>


                          <tr>
                            <th style={{textAlign:'left',marginBottom:'10px',border:'none'}}>
                              <h5 style={{fontSize:'14px'}}>30.0 dollars / Payment upon order (pre-payment)
                              </h5> 

                              
                              
                              </th>
                          </tr>

                          <tr >
                            <th style={{textAlign:'left',marginBottom:'10px',border:'none'}}>
                              <h5 style={{fontSize:'14px'}}>Quanity </h5> 
                              
                              </th>

                            
                          </tr>

                          <tr>

                          <th> 
                              <button style={{border:'1px solid #ccc',backgroundColor:'#ccc',float:'left'}}>-</button>
                              <button style={{border:'none',backgroundColor:'white',float:'left'}} >1</button>
                              <button style={{border:'1px solid #ccc',backgroundColor:'#ccc',float:'left'}}>+</button>
                            </th>
                          </tr>







                      
                        </tbody>
                      </Table>

                      <Row>

                        <>
                          <div style={{display:'flex',justifyContent:'space-around'}}>

                          <Button style={{width:'48%',height:'70px',fontSize:'20px',
                          fontFamily:'Maven Pro',backgroundColor:'#a5705b',border:'1px solid #a5705b'}}
                          
                          onClick={()=>{
                            //  dispatch(addItem(  {id : 2, name : 'Grey Yordan', count : 1}))
      
                            dispatch(addItem({
                              id : selproduct.id, 
                              name : selproduct.title,
                              count : 1,
                            }))
                          }}
                          
                          >
                            Add To Cart
                            </Button> 

                            <Button style={{width:'48%',height:'70px',fontSize:'20px',
                          fontFamily:'Maven Pro',backgroundColor:'#64a862',border:'1px solid #64a862'}}>
                           Buy It Now
                            </Button> 


                            
                      


                          </div>
                        
                        </>

                     

                      </Row>


                   



                </div>
                
            </div>



            <Box>
                <YellowBtn2 ></YellowBtn2>
            </Box>


                   


            <Nav fill variant="tabs"  defaultActiveKey="link0" style={{marginTop:'30px',height:'50px'}}>
                <Nav.Item >
                <Nav.Link  onClick={()=>{ setTap(0) }} eventKey="link0" style={{color:'black',height:'50px',fontFamily:'Maven Pro',fontWeight:'600'}} >Product Description</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{ setTap(1) }} eventKey="link1" style={{color:'black',height:'50px',fontFamily:'Maven Pro',fontWeight:'600'}}>Reviews</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link  onClick={()=>{ setTap(2) }} eventKey="link2" style={{color:'black',height:'50px',fontFamily:'Maven Pro',fontWeight:'600'}}>FAQ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link  onClick={()=>{ setTap(3) }} eventKey="link3" style={{color:'black',height:'50px',fontFamily:'Maven Pro',fontWeight:'600'}}>Product Inquery</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tap={tap}/>



          

          

        </div>

       

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
  
    return (
      <div className={'start ' + fade}>
        { [ 
        
        
        <div>
        

        <Box>
                <YellowBtn style={{fontFamily:'Cormorant Garamond'}}>Get Eco-food offline</YellowBtn>
            </Box>


            <Container>



          <Row>
            <Col ><h2 style={{textAlign:'left',fontFamily:'Maven Pro',fontWeight:'600'}}>We only give you freshness</h2></Col>
            

          </Row>

          <Row>
          
            <Col ><h5 style={{textAlign:'left', fontFamily:'Maven Pro',marginBottom:'20px'}}>Experience the surprise with early morning delivery. 
            Most importantly, we protect the freshness. If you order before 4pm, 
            it will be delivered to your door the next morning!
            Order today and how about a glass of fresh fruit juice tomorrow morning? 
            It will revitalize your daily life.</h5></Col>
            
          
          </Row>

          <Row>


          <Col><img src="../img/descrip1.jpg" style={{width:'100%'}}/></Col>


          </Row>

          

                


                  
            <Row>

              <Col ><h2 style={{textAlign:'left',fontFamily:'Maven Pro',fontWeight:'600',marginTop:'30px'}}>Take care of your health easily every morning!</h2></Col>
              

            </Row>

            <Row>
            
              <Col ><h5 style={{textAlign:'left', fontFamily:'Maven Pro',marginBottom:'20px'}}>Take care of your precious family health with freshgo!
               If it is difficult to order every day, we recommend using the subscription service.
                The longer the subscription period, the more benefits you will receive. In addition to discounts,
               we also offer kits that allow you to easily cut and cook fruits and vegetables.
               Salad contains various fat-soluble vitamins, which are as important as water-soluble vitamins. 
               Oil-based dressing helps to absorb fat-soluble vitamins in salads into the body without difficulty.
               </h5></Col>

            
            </Row>

            <Row>
            <Col><img src="../img/descrip2.jpg" style={{width:'100%'}}/></Col>
            </Row>

            
            <Row>

              <Col ><h2 style={{textAlign:'left',fontFamily:'Maven Pro',fontWeight:'600',marginTop:'30px'}}>Freshness unfolds before your eyes!</h2></Col>
              

            </Row>

              <Row>
              
                  <Col ><h5 style={{textAlign:'left', fontFamily:'Maven Pro',marginBottom:'20px'}}>
                  By boldly omitting the middle distribution process, 
                  you can purchase faster, fresher and cheaper. 
                  Choose if you want to enjoy healthy fruits and vegetables where freshness is life.</h5></Col>

              
              </Row>



              <Row>
                <Col sm={6}><img src="../img/descrip3.jpg" style={{width:'100%',marginTop:'20px'}}/></Col>
                <Col sm={6}><img src="../img/descrip4.jpg" style={{width:'100%',marginTop:'20px'}}/></Col>
              </Row>


              <Row>

                  <Col ><h5 style={{textAlign:'left', fontFamily:'Maven Pro',marginTop:'20PX'}}>
                  ＊ Experience the surprise with early morning delivery. 
                  Most importantly, we protect the freshness. If you order before 4pm, 
                  it will be delivered to your door the next morning!
                  Order today and how about a glass of fresh fruit juice tomorrow morning? 
                  It will revitalize your daily life.</h5></Col>


              </Row>


              <Row>

<Col ><h2 style={{textAlign:'left',fontFamily:'Maven Pro',fontWeight:'600',marginTop:'30px'}}>Precautions for purchase</h2></Col>


</Row>

<Row>

<Col ><h5 style={{textAlign:'left', fontFamily:'Maven Pro',marginBottom:'20px'}}>Experience the surprise with early morning delivery. 
Most importantly, we protect the freshness. If you order before 4pm, 
it will be delivered to your door the next morning!
Order today and how about a glass of fresh fruit juice tomorrow morning? 
It will revitalize your daily life.</h5></Col>


</Row>

<Row>
<Col><img src="../img/descrip5.jpg" style={{width:'100%'}}/></Col>
</Row>


              <Row>

              <Col ><h2 style={{textAlign:'left',fontFamily:'Maven Pro',fontWeight:'600',marginTop:'30px',marginBottom:'20px'}}>- Product required correction report</h2></Col>


              </Row>


              <Row>


              <Table  bordered hover size="sm" style={{width:'95%',margin:'0px auto'}}>
    
      <tbody>

        <tr>
          <td style={{textAlign:'left',paddingLeft:'25px',backgroundColor:'#dee2e6'}}>product status</td>
          <td  style={{width:'70%',textAlign:'left'}}>new product</td>
        </tr>

        <tr>
          <td style={{textAlign:'left',paddingLeft:'25px',backgroundColor:'#dee2e6'}}>Shipping method</td>
          <td style={{textAlign:'left'}}>parcel</td>
        </tr>

        <tr>
          <td style={{textAlign:'left',paddingLeft:'25px',backgroundColor:'#dee2e6'}}>issue a receipt</td>
          <td style={{textAlign:'left'}}>Online cash receipt issuance</td>
        </tr>

        <tr>
          <td style={{textAlign:'left',paddingLeft:'25px',backgroundColor:'#dee2e6'}}>Date of manufacture</td>
          <td style={{textAlign:'left'}}>Contact the seller</td>
        </tr>

        <tr>
          <td style={{textAlign:'left',paddingLeft:'25px',backgroundColor:'#dee2e6'}}>product number</td>
          <td style={{textAlign:'left'}}>4700298998</td>
        </tr>

        <tr>
          <td style={{textAlign:'left',paddingLeft:'25px',backgroundColor:'#dee2e6'}}>Delivery area</td>
          <td style={{textAlign:'left'}}>Nationwide</td>
        </tr>

      </tbody>
    </Table>

              </Row>

              <Row>

<Col ><h2 style={{textAlign:'left',fontFamily:'Maven Pro',fontWeight:'600',marginTop:'30px',fontSize:'16px'}}>Announcement of Closed Delivery Schedule for August 2022</h2></Col>


</Row>

<Row>
    <Col >
    <ul style={{textAlign:'left', fontFamily:'Maven Pro'}}>
      <li>* Regular subscribers will skip the parking if the shipping and receiving dates overlap with the shipping company's holiday.</li>
      <li>* Please refer to the regular delivery schedule notification message and SMS delivery schedule notification when sending in the first week.</li>
      <li>* The shipping date may vary depending on the order volume, so please check the production notification message sent on the day of shipping.</li>
      <li>* Customer center and chat counseling will be open until 8/12 (Fri), and customer center will be closed on 8/15 (Monday).</li>

      </ul>
      </Col>
</Row>





          


    </Container>














        </div>, 


          // 리뷰버튼시작
        
        <div className="reviewline">
          

                <h3>Best Reviews</h3>

                <hr/>


                <Container>
     
      <Row>
        <Col sm>
          <div>
          <div class='revtop'>
              <ul className="revbox"> 

                  <li>Won**</li>
                  <li>ㅣ</li>
                  <li>2022.07.21</li>
                  <li style={{color:'#64a862'}}>4 week subscription Salad 3 days a week </li>

              </ul>

          </div>

          <div className="revmini">

                <div>

                <h4 style={{fontSize:'18px',float:'left', fontWeight:600}}>thank you for a healthy meal!</h4>


                  <p style={{fontSize:'14px',textAlign:'left',float:'left'}}>Every lunch is served with a healthy and delicious pocket salad. I ordered the 4 week plan 3 times a week as it is a low calorie and high satiety type.

                  Chicken Breast Ball Salad Filled with Sesame Leaves (2 servings) and Bulgogi Salad (1 serving), it is delicious and reassuring with just the right amount of seasoning and abundant toppings. 

                  Putting it in a separate salad bowl gives it a new feeling, so it would be good to put it out at a party or gathering. 

                  The body feels lighter and the intestines feel more comfortable. Next time I'll have to order a variety of salads.

                  Thank you always.</p>

                  <h3 className='viewmore' style={{float:'left',fontSize:'14px',fontWeight:'600',marginTop:'10px'
                }}>
                  View more <i class="fa-solid fa-caret-down"></i></h3>

                      </div>
                

                <div className="revimg">

                  <img src="../img/revimg1.jpg"/>


                </div>

          </div>

        
          </div>
        
        
        </Col>




      </Row>


      <Row>
        <Col sm>
          <div>
          <div class='revtop'>
              <ul className="revbox"> 

                  <li>Kim**</li>
                  <li>ㅣ</li>
                  <li>2022.07.20</li>
                  <li style={{color:'#64a862'}}> 4 week subscription Salad 5 days a week </li>

              </ul>

          </div>

          <div className="revmini">

                <div>

                <h4 style={{fontSize:'18px',float:'left', fontWeight:600}}>Pocket salad is the best!!</h4>


                  <p style={{fontSize:'14px',textAlign:'left',float:'left'}}>Before the wedding photo shoot, I
                  applied for regular delivery of pocket salad with the goal of dieting and eating it~!
                  I haven't gotten tired of eating it for 4 weeks and I'm happily dieting with a delicious salad!!
                  I love it so much~! Haha.</p>

                  <h3 className='viewmore' style={{float:'left',fontSize:'14px',fontWeight:'600',marginTop:'10px'
                }}>
                  View more <i class="fa-solid fa-caret-down"></i></h3>

                      </div>
                

                <div className="revimg">

                  <img src="../img/revimg2.jpg"/>


                </div>

          </div>

        
          </div>
        
        
        </Col>




      </Row>


      <Row>
        <Col sm>
          <div>
          <div class='revtop'>
              <ul className="revbox"> 

                  <li>Lee**</li>
                  <li>ㅣ</li>
                  <li>2022.07.11</li>
                  <li style={{color:'#64a862'}}> Try 10 daily salads </li>

              </ul>

          </div>

          <div className="revmini">

                <div>

                <h4 style={{fontSize:'18px',float:'left', fontWeight:600}}>Salad is also a pocket salad🥗</h4>


                  <p style={{fontSize:'14px',textAlign:'left',float:'left'}}>Let's go into the review of repurchasing 10 kinds of salad🥗.🥗
                  First of all, the salad restaurant I settled in🏡 I love all the 'Pocket Salad'
                  products, but
                  among them, the 10 kinds of salad products consist
                  only of the flavors I like, so I keep buying them.

                  Why I Choose Pocket Salad
                  👍(First) It's
                  so delicious😃😃😃 Each sauce goes so well with the main menu that I sometimes feel like I
                  'm eating high-calorie food even though I'm eating the salad.
                  The taste is so good that people mistakenly think that they are eating while their acquaintances say it is delicious

                  ✌️ (Second)
                  Sweet potato cubes and quail eggs and each main menu (chicken breast Vienna sausage, bulgogi, charcoal-grilled chicken breast ball, sesame leaf chicken breast) Balls, creamy, cheese, etc.), vegetables, and nuts are plentiful, so it gives a really good feeling of satiety and the composition of the tandan jar is also good. I think it's comparable to the salads I eat at pasta restaurants with my friends

                    </p>

                  <h3 className='viewmore' style={{float:'left',fontSize:'14px',fontWeight:'600',
                  marginTop:'10px',marginBottom:'40px'
                }}>
                  View more <i class="fa-solid fa-caret-down"></i></h3>

                      </div>
                

                <div className="revimg">

                  <img src="../img/revimg3.jpg"/>


                </div>

          </div>

        
          </div>
        
        
        </Col>




      </Row>


      <Row>
        <Col sm>
          <div>
          <div class='revtop'>
              <ul className="revbox"> 

                  <li>Choi**</li>
                  <li>ㅣ</li>
                  <li>2022.06.26</li>
                  <li style={{color:'#64a862'}}>One meal a day as a salad for 5 days</li>

              </ul>

          </div>

          <div className="revmini">

                <div>

                <h4 style={{fontSize:'18px',float:'left', fontWeight:600}}>I ate salad for the first time as a meal replacement.</h4>


                  <p style={{fontSize:'14px',textAlign:'left',float:'left'}}>I ordered salad for the first time as a meal replacement. It's
                  summer, so it's hot to cook, so I ordered a salad to take care of my health. It's
                  delicious . I ordered
                  5 kinds and ate 4 of them.
                  Mexican blanched meat is delicious, and
                  the jalapeno in it is very tasty.
                  I like it salty, so I put all the sauce on it, but if you eat spicy, you can adjust it . The

                  last picture is when it was delivered.
                  I got a text message the day before and it's kind. I got it around 7 in the morning.</p>

                  <h3 className='viewmore' style={{float:'left',fontSize:'14px',fontWeight:'600',marginTop:'10px'
                }}>
                  View more <i class="fa-solid fa-caret-down"></i></h3>

                      </div>
                

                <div className="revimg">

                  <img src="../img/revimg4.jpg"/>


                </div>

          </div>

        
          </div>
        
        
        </Col>




      </Row>


      
    </Container>



    {/* 베스트 리뷰 맨밑 2dollar과  write a review버튼 */}

    <Container style={{marginTop:'20px'}}>
      <hr/>
      <Row>
        <Col sm={8}>

                <h4 style={{textAlign:'left',fontSize:'16px',fontFamily:'Maven Pro' ,fontWeight:'600'}}>

                  <span style={{color:'#64a862'}}>2 dollar for text reviews and 5 dollar</span> for photo reviews when entering 50 or more characters<br/>
                  Monthly bonus of <span style={{color:'#64a862'}}>10 dollar </span>when the best review is selected

                </h4>

        </Col>
        <Col sm={4} >
          
        <Button style={{float:'right',backgroundColor:'#64a862',border:'1px solid #64a862',fontFamily:'Maven Pro',padding:'15px',fontFamily:'Maven Pro'  }} >write a review</Button>

        </Col>
      </Row>
    
    </Container>


    {/* 48리뷰 제목 시작 */}


    <Container style={{marginTop:'50px'}}>

<Row>

<Col sm={8}>
                <h4 style={{textAlign:'left',fontSize:'25px',fontFamily:'Maven Pro' ,fontWeight:'600'}}>
                  48 reviews
                </h4></Col>
<Col sm={4}>

  <ul className="rev2top" style={{float:'right',listStyle:'none'}}>
    <li >latest order</li>
    <li style={{color:'#777777'}}>ㅣ</li>
    <li style={{color:'#777777'}}>ranking order</li>
  </ul>
  

 
</Col>

<hr/>

</Row>    

</Container>



{/* 전체/ 포토리뷰/ 보통배송리뷰 버튼들*/}

<Container className="rev48" style={{marginBottom:'40px'}}>
      <Row>
        <Col style={{border:'1px solid #cccccc',height:'50px',display:'flex',justifyContent:'center',alignItems:'center',color:'#64a862',fontFamily:'Maven Pro',fontWeight:'600'}}>All</Col>
        <Col style={{border:'1px solid #cccccc',height:'50px',display:'flex',justifyContent:'center',alignItems:'center',color:'#666666',fontFamily:'Maven Pro',fontWeight:'600'}}>Photo review</Col>
        <Col style={{border:'1px solid #cccccc',height:'50px',display:'flex',justifyContent:'center',alignItems:'center',color:'#666666',fontFamily:'Maven Pro',fontWeight:'600'}}>Regular delivery review</Col>
      </Row>
    </Container>


{/* 48reviews 일반리뷰시작 */}

<Container>

<Row>
      <Col sm>
          <div>
          <div class='revtop2'>
              <ul className="revbox2"> 

                  <li>Naver Pay buyers</li>
                  <li>ㅣ</li>
                  <li>2022.08.22</li>
                  <li style={{color:'#64a862'}}>Taste 5 Tasty Salads</li>

              </ul>

          </div>

          <div className="revmini2">

                <div>

                <h4 style={{fontSize:'18px', fontWeight:600,textAlign:'left'}}>I ate salad for the first time as a meal replacement.</h4>


                  <p style={{fontSize:'14px',textAlign:'left' ,marginBottom:'40px'}}>
                    it's delicious
It is delivered early in the morning, so you can eat it from the morning of the same day.
All 5 types are delicious.</p>

                

                      </div>
                

                

          </div>

        
          </div>
        
        
      </Col>




      </Row>





      <Row>
      <Col sm>
          <div>
          <div class='revtop2'>
              <ul className="revbox2"> 

                  <li>Kim**</li>
                  <li>ㅣ</li>
                  <li>2022.08.19</li>
                  <li style={{color:'#64a862'}}>Taste 5 Tasty Salads</li>

              </ul>

          </div>

          <div className="revmini2">

                <div>

                <h4 style={{fontSize:'18px', fontWeight:600,textAlign:'left'}}>I ate salad for the first time as a meal replacement.</h4>


                  <p style={{fontSize:'14px',textAlign:'left'}}>
                    it's delicious
It is delivered early in the morning, so you can eat it from the morning of the same day.
All 5 types are delicious.</p>

                

                      </div>
                

                <div className="revimg2" style={{marginBottom:'40px'}}>

                  <img src="../img/48rev1.jpg"/>


                </div>

          </div>

        
          </div>
        
        
      </Col>




      </Row>

      <Row>
      <Col sm>
          <div>
          <div class='revtop2'>
              <ul className="revbox2"> 

                  <li>Lee**</li>
                  <li>ㅣ</li>
                  <li>2022.08.09</li>
                  <li style={{color:'#64a862'}}>Taste 5 Tasty Salads</li>

              </ul>

          </div>

          <div className="revmini2">

                <div>

                <h4 style={{fontSize:'18px', fontWeight:600,textAlign:'left'}}>I'm already salivating..</h4>


                  <p style={{fontSize:'14px',textAlign:'left'}}>
                  I think I can understand why it's called Tasty Salad~ It looks so delicious and it's actually delicious~~ 
                  I can't wait to try the roast chicken and sliced ​​ham!</p>

                

                      </div>
                

                <div className="revimg2" style={{marginBottom:'40px'}}>

                  <img src="../img/48rev2.jpg"/>


                </div>

          </div>

        
          </div>
        
        
      </Col>




      </Row>

      <Row>
      <Col sm>
          <div>
          <div class='revtop2'>
              <ul className="revbox2"> 

                  <li>Naver Pay buyers </li>
                  <li>ㅣ</li>
                  <li>2022.08.05</li>
                  <li style={{color:'#64a862'}}>Taste 5 Tasty Salads</li>

              </ul>

          </div>

          <div className="revmini2">

                <div>

                <h4 style={{fontSize:'18px', fontWeight:600,textAlign:'left'}}>Delivery is fast and delicious</h4>


                  <p style={{fontSize:'14px',textAlign:'left',marginBottom:'40px'}}>
                  Delivery is fast and delicious</p>

                

                      </div>
                

           

          </div>

        
          </div>
        
        
      </Col>




      </Row>

      <Row>
      <Col sm>
          <div>
          <div class='revtop2'>
              <ul className="revbox2"> 

                  <li>Naver Pay buyer</li>
                  <li>ㅣ</li>
                  <li>2022.08.02</li>
                  <li style={{color:'#64a862'}}>Taste 5 Tasty Salads</li>

              </ul>

          </div>

          <div className="revmini2">

                <div>

                <h4 style={{fontSize:'18px', fontWeight:600,textAlign:'left'}}>salad</h4>


                  <p style={{fontSize:'14px',textAlign:'left',marginBottom:'40px'}}>
                  The amount of protein is a bit small, but in general it is ok for a single meal. I also like that they are individually packaged.</p>

                

                      </div>
                

           
          </div>

        
          </div>
        
        
      </Col>




      </Row>

      <Row>
      <Col sm>
          <div>
          <div class='revtop2'>
              <ul className="revbox2"> 

                  <li>Lee**</li>
                  <li>ㅣ</li>
                  <li>2022.07.08</li>
                  <li style={{color:'#64a862'}}>Taste 5 Tasty Salads</li>

              </ul>

          </div>

          <div className="revmini2">

                <div>

                <h4 style={{fontSize:'18px', fontWeight:600,textAlign:'left'}}>Tasty Salad Review</h4>


                  <p style={{fontSize:'14px',textAlign:'left'}}>
                  Let's move the review I wrote on the Naver blog!! I really enjoyed the Tasty Salad~ I wanted to post it earlier, but I can't write after a certain period of time after ordering, so I'm posting it now :)</p>

                

                      </div>
                

                <div className="revimg2" style={{marginBottom:'40px'}}>

                  <img src="../img/48rev3.jpeg"/>


                </div>

          </div>

        
          </div>
        
        
      </Col>




      </Row>

      <Row>
      <Col sm>
          <div>
          <div class='revtop2'>
              <ul className="revbox2"> 

                  <li>Naver Pay buyers</li>
                  <li>ㅣ</li>
                  <li>2022.07.03</li>
                  <li style={{color:'#64a862'}}>Taste 5 Tasty Salads</li>

              </ul>

          </div>

          <div className="revmini2">

                <div>

                <h4 style={{fontSize:'18px', fontWeight:600,textAlign:'left'}}>The packaging has changed and the bowl has gotten bigger so it's easier to eat. Delicious...</h4>


                  <p style={{fontSize:'14px',textAlign:'left',marginBottom:'40px'}}>
                  The packaging has changed and the bowl has gotten bigger so it's easier to eat. It's still delicious! New menus are good</p>

                

                      </div>
                

              

          </div>

        
          </div>
        
        
      </Col>




      </Row>


</Container>


{/* 48리뷰끝 */}


   {/* 숫자 페이지 여기부터시작 */}


  
   <div className="good" style={{margin:'0px auto',color:'black'}}>


<Pagination style={{justifyContent : 'center'}} className='page'> 
<Pagination.First />
<Pagination.Prev />
<Pagination.Item active>{1}</Pagination.Item>
<Pagination.Item>{2}</Pagination.Item>
<Pagination.Item>{3}</Pagination.Item>
<Pagination.Item >{4}</Pagination.Item>
<Pagination.Item>{5}</Pagination.Item>
<Pagination.Item >{6}</Pagination.Item>

<Pagination.Ellipsis />
<Pagination.Item>{20}</Pagination.Item>
<Pagination.Next />
<Pagination.Last />
</Pagination>


</div>





{/* 숫자 페이지 여기까지 */}




 {/* 베스트 리뷰 맨밑 2dollar과  write a review버튼 */}

 <Container style={{marginTop:'20px'}}>

      <Row>
        <Col sm={8}>

              

        </Col>
        <Col sm={4} >
          
        <Button style={{float:'right',backgroundColor:'#64a862',border:'1px solid #64a862',fontFamily:'Maven Pro',padding:'15px',fontFamily:'Maven Pro'  }} >
          See all product reviews</Button>

        </Col>
      </Row>
    
    </Container>


    






        </div>, 
        
            // FAQ 버튼 시작 
                 <div>
                          <>
                          <div>

                              <Container fluid="md">

                                    <Row>

                                    <Col>    

                                    <div className="faqline" style={{marginTop:'50px'}}>

                                      <h3>Shipping information</h3>

                                      <hr/>

                                      <ul>
                                          <li> <span className="faqdot">●</span>Shipping cost: 3,000 won (free for payment over 50,000 won) </li>
                                          <li> <span className="faqdot">●</span>Delivery period: 1-2 days (2-3 days between Jeju and islands)</li>
                                          <li> <span className="faqdot">●</span>Delivery information: </li>
                                          <li>- Delivery takes 2-3 days after payment is completed </li>
                                          <li className="faqred">- Delivery delays may occur if the order is shipped the day after Monday-Tuesday, holidays or holidays . </li>
                                          <li>-  For Jeju and remote islands, 3,000 won will be added to the fare.   </li>
                                          <li>-  Subscription holding period is up to 3 months from the date of order.</li>
                                          <li>- Delivery of fresh food is not possible on Mondays and the day after public holidays. </li>
                                          <li>- It will be delivered by Lotte Courier, and the invoice number will be sent via text message after the product is shipped. [After 5pm]  </li>
                                          <li>- Shipped in a Styrofoam box with ice packs. (However, in winter, ice packs are excluded.) </li>
                                          <li>- The product you order is manufactured and shipped on the same day it is shipped. </li>

                                      </ul>



                                    </div>

                                    
                                    <div className="faqline">

                                      <h3>Exchange and return information</h3>

                                      <hr/>

                                      <ul>
                                        
                                          <li>- 100% exchange/return/refund is possible in case of product defect or seller's mistake. </li>
                                          <li>-  Due to the nature of the food, product exchange or return is not possible due to a customer's simple change of mind, </li>
                                          <li style={{marginLeft:'10px'}}> and arbitrary return or refund after receiving the product is also not possible.   </li>
                                          <li>- In the case of subscription products, you can change the components after receiving the first delivery. Before that, you can cancel and re-order. </li>
                                          <li>- In the event of a product problem, please submit it to the customer center or the inquiry board within 6 days of receipt. </li>
                                          <li style={{marginLeft:'10px'}}> (Due to the nature of food delivery, it is difficult to check the product over the wire, so after checking the photograph, it will be reviewed and refunded or re-sent)</li>
                                          <li>- If there is a defect in the product, you must call the seller in advance immediately upon delivery of the product. </li>
                                          <li>- Returns/exchanges may be restricted for deterioration or damage that occurred during storage after receipt of the product. [After 5pm]  </li>
                                        

                                      </ul>



                                    </div>

                                   
                          
                                    </Col>


                                    </Row>




                              </Container>



                              

                              

                          </div>

                        
                        </>

        </div>, 
        
        
   
        
                    // Product Q&A 버튼 시작 
        <div>
                              <div className="faqline" style={{marginTop:'50px'}}>

                      <h3>Product Q&A</h3>

                      <hr/>

                      <Table striped>
                      
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td colSpan={7}> <img src="../img/lockicon.png" style={{marginRight:'5px',marginBottom:'5px'}}/> Please contact us </td>
                            <td>this**</td>
                            <td>2022.06.08</td>
                            <td>Answer complete</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td colSpan={7}> <img src="../img/lockicon.png" style={{marginRight:'5px',marginBottom:'5px'}}/> Please contact us </td>
                            <td>saturday*</td>
                            <td>2022.05.31</td>
                            <td>Answer complete</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td colSpan={7}> <img src="../img/lockicon.png" style={{marginRight:'5px',marginBottom:'5px'}}/> Please contact us </td>
                            <td>sheep**</td>
                            <td>2022.05.26</td>
                            <td>Answer complete</td>
                          </tr>

                          <tr>
                            <td>4</td>
                            <td colSpan={7}> <img src="../img/lockicon.png" style={{marginRight:'5px',marginBottom:'5px'}}/> Please contact us </td>
                            <td>this**</td>
                            <td>2022.05.20</td>
                            <td>Answer complete</td>
                          </tr>

                          <tr>
                            <td>5</td>
                            <td colSpan={7}> <img src="../img/lockicon.png"/> Please contact us </td>
                            <td>seaweed**</td>
                            <td>2022.05.15</td>
                            <td>Answer complete</td>
                          </tr>

                          

                          
                        </tbody>
                      </Table>

                      </div>



                      
    {/* 숫자 페이지 여기부터시작 */}


  
                  <div className="good" style={{margin:'0px auto',color:'black'}}>


                  <Pagination style={{justifyContent : 'center'}} className='page'> 
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Ellipsis />

                  <Pagination.Item>{10}</Pagination.Item>
                  <Pagination.Item>{11}</Pagination.Item>
                  <Pagination.Item active>{12}</Pagination.Item>
                  <Pagination.Item>{13}</Pagination.Item>
                  <Pagination.Item >{14}</Pagination.Item>

                  <Pagination.Ellipsis />
                  <Pagination.Item>{20}</Pagination.Item>
                  <Pagination.Next />
                  <Pagination.Last />
                  </Pagination>


                  </div>

            

  

    {/* 숫자 페이지 여기까지 */}

                      
      {/* 맨밑버튼 여기부터 시작 */}

        <>
            <div className="mb-2" style={{marginTop:'50px'}}>
            <Button style=
            {{border:'1px solid #64a862',backgroundColor:'white',color:'#64a862',fontFamily:'Maven Pro',fontWeight:'600'}}>
            View all product inquiries
            </Button>{' '}
            <Button  style={{border:'1px solid #A5705B',backgroundColor:'#A5705B',color:'white',fontFamily:'Maven Pro',fontWeight:'600'}}>
            Write product inquiry
            </Button>
            </div>

            </>

            {/* 맨밑버튼 여기부터 끝 */}

       </div>][tap] }
      </div>
    )
  }





export default Detail;