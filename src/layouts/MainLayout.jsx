import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { routes } from "../routes";

const MainLayout = (props) => {
  console.log(props);
  return (
    <>
      <Container>
        <Row>
          <Col sm={2}>
            <Sidebar />
          </Col>
          <Col sm={10}>asdass</Col>
        </Row>
      </Container>
    </>
  );
};
export default MainLayout;
