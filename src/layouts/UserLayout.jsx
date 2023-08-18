import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { routes } from "../routes";

const UserLayout = (props) => {
  console.log(props);
  return (
    <>
      <Container>
        <Row>
          <Col sm={3}>
            <Sidebar />
          </Col>
          <Col sm={9}>asd</Col>
        </Row>
      </Container>
    </>
  );
};
export default UserLayout;
