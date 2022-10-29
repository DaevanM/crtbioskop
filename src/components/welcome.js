import {Col, Container, Row, Button} from "react-bootstrap"

const Welcome = () => {
    return (
        <div className="wlcm">
            <Container className="text-white d-flex text-center justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className="title">WELCOME TO</div>
                        <div className="title">Crt Film List</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Welcome