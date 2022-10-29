import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand>CrtFilm</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#movie">Movie</Nav.Link>
                        <Nav.Link href="#tv">TV Series</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar

