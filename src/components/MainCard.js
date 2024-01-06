import { Col, Row } from "react-bootstrap";

function MainCard({justify = "row" , image, progress = {}, profile = {}, TextBoxStyle ={}, BoxStyle={}}) {
     if(justify === ""){
          justify = 'row'
     }

     const progressKey = Object.keys(progress);
     return ( 
          <>
          {/* <div className="rounded-circle">
               <img src="/profile.jpg" className="rounded-circle" width={250} />
          </div> */}
          <div className="border p-3 rounded my-3">
          <Row>
               {justify === "row" ?
               <Col sm={12} md={6} className="p-1" style={BoxStyle.main}>
                    {
                         image ?   
                        
                         <img src={"/"+image} className="rounded-circle" style={BoxStyle.image} width={250} />
                          : 
                          progressKey.length > 0 ? 
                          <div>
                          {progressKey.map((value,key)=>
                          <div key={key} className="border my-2 p-2">

                          <span>{value.toUpperCase()}</span>
                          <div className="text-light p-1 rounded" style={{backgroundColor : progress[value].color,width:progress[value].percent+"%"}}>
                          {progress[value].percent}
                          </div>

                          </div>
                          )}
                         </div>
                           :
                            ''
                    }
               </Col> : ''}

               <Col sm={12} md={6} style={TextBoxStyle.main}>
                    {/* title */}
               <h4 style={TextBoxStyle.title}>
               {profile.title ?  profile.title : " {title}"}
               </h4>
                    {/* title */}

                    {/* muteContent */}
               <div className="text-muted my-3" style={TextBoxStyle.muteContent}>
               {
                    profile.muteContent ? profile.muteContent.map((mute,index)=><span key={index} className="me-2 rounded p-2 text-light d-inline-block mt-2" style={{backgroundColor:"gray"}}>{mute}</span>) : "{muteContent}"
               }
               </div>
                    {/* muteContent */}

               <div style={TextBoxStyle.description}>
                    {
                         profile.description ? <p>{profile.description}</p> : '{Description}'
                    }
               </div>
               </Col>

               {justify === "reverse" ?
               <Col sm={12} md={6} className="p-3" style={BoxStyle.main}>
                    {
                         image ?   
                        
                         <img src={"/"+image} className="rounded-circle" style={BoxStyle.image} width={250} />
                          : 
                          progressKey.length > 0 ? 
                          <div>
                          {progressKey.map((value,key)=>
                          <div key={key} className="border my-2">

                          <span>{value.toUpperCase()}</span>
                          <div className="text-light" style={{backgroundColor : progress[value].color}}>
                          {progress[value].percent}
                          </div>

                          </div>
                          )}
                         </div>
                           :
                            ''
                    }
               </Col> : ''}
          </Row>
          </div>
        
          </>
      );
}

export default MainCard
