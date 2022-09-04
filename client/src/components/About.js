import React from "react";
import { Container, Row, Col, Table ,Image} from "react-bootstrap";
import { ImMobile } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";

const About = () => {
  return (
    <Container style={{ marginTop: "50px" }} className="text-center ">
      <Row>
        <Col md={6}>
          <h5 className="text-center">Info Imposter - poster hub</h5>
          <p className="my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ipsum
            id dolorem quas, placeat tempora sint quibusdam numquam corporis
            quia amet. Hic consequatur quasi soluta ea atque blanditiis quis qui
            ex repudiandae obcaecati ipsa sapiente, quidem laudantium aliquid,
            inventore quisquam! Accusamus quis odio vel provident at adipisci
            nihil labore, molestiae placeat rem voluptas omnis qui nulla
            voluptatem sed facilis ducimus optio impedit fuga possimus neque
            totam hic obcaecati earum? Possimus placeat pariatur repudiandae
            sint, cupiditate voluptatibus eveniet doloribus asperiores, eius qui
            labore, reiciendis animi amet quo vitae eligendi fugit porro
            deserunt. Quis provident qui saepe. Omnis sint dolores nulla id.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit aperiam ex laboriosam sed similique ut officia?
            Inventore qui molestias quae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            iusto modi illo aperiam omnis. Consectetur esse eos ad adipisci,
            nobis odit, quisquam voluptatem similique quam ipsam veniam fuga.
            Voluptates delectus aspernatur minima iusto eligendi velit adipisci
            exercitationem, iure pariatur tenetur?
          </p>
          <Table striped bordered hover className="text-center my-5">
            <thead>
              <tr>
                <th className="bg-warning " colspan="3">
                  ---Cotact Details---
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ImMobile />
                </td>
                <td>Mobile</td>
                <td>1234-4567</td>
              </tr>
              <tr>
                <td>
                <AiOutlinePhone /> 
                </td>
                <td>Telphone</td>
                <td>1234-4567</td>
              </tr>
              <tr>
                <td>
                   <HiOutlineMail />
                </td>
                <td>Email</td>
                <td>abc@def.com</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md ={6}>
            <Image  src= "images/Messi.jpg" style ={{width:"70%", height: "90%"}}/>      
            </Col>
      </Row>
    </Container>
  );
};

export default About;
