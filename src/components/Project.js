import { Col, Row } from "react-bootstrap";

function Project({project=[]}) {
     
     return ( 
          <div className="border p-2 rounded">
               {
                    project.length > 0 ?
                    <Row className="">
                    <h3 className="text-center">My Projects</h3>
                      {project.map((value,index)=>
                      <Col key={index} md={4} sm={12} className="my-2 p-3">
                      <div className=" border p-2 py-3 rounded shadow">
                      <div className="text-center">
                      <img src={"/"+value.image} width={250} className="rounded" />
                      </div>
                         <div className="text-center mt-2">
                         <a href={value.link} className="btn btn-danger text-light">Live Demo</a>
                         </div>

                      </div>

                      </Col>
                      )}
                    </Row>
                     : "There is no project for me, but I would like to try to have if give some chances."
               }
          </div>
      );
}

export default Project;