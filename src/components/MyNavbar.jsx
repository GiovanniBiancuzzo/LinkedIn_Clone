import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaHome } from "react-icons/fa";
import { BsPeopleFill, BsGrid3X3GapFill } from "react-icons/bs";
import { MdWork, MdNotifications } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Image } from "react-bootstrap";

function MyNavbar() {
    const profile = useSelector((state) => state.profile.actualProfile);

    return (
        <Navbar collapseOnSelect bg="#fff" className="navbar">
            <Navbar.Brand href="#home" xs={5}>
                React-Bootstrap
            </Navbar.Brand>
            <Container xs={7} className="ms-auto" id="Container">
                <section className="ml-auto">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link
                                href="#features"
                                id="link"
                                path="/home"
                                className="ms-3 mt-1"
                            >
                                <FaHome id="icona" size={30} /> <p>home</p>
                            </Link>
                            <Link
                                href="#pricing"
                                id="link"
                                path="/home"
                                className="ms-3 mt-1"
                            >
                                {" "}
                                <BsPeopleFill id="icona" size={30} />{" "}
                                <p>Rete</p>
                            </Link>

                            <Link
                                href="#deets"
                                id="link"
                                path="/home"
                                className="ms-3 mt-1"
                            >
                                {" "}
                                <MdWork id="icona" size={30} /> <p>Lavoro</p>
                            </Link>
                            <Link
                                id="link"
                                href="#memes"
                                path="/home"
                                className="ms-3 mt-1"
                            >
                                {" "}
                                <AiFillMessage id="icona" size={30} />{" "}
                                <p>Messaggistica</p>
                            </Link>
                            <Link path="/home" id="link" className="ms-3 mt-1">
                                <MdNotifications id="icona" size={30} />{" "}
                                <p>Notifiche</p>
                            </Link>

                            <div className="IconTu">
                                <Image
                                    src={profile.image}
                                    roundedCircle
                                    width={"30px"}
                                />
                                {/* <CgProfile id="icona" size={30} /> */}
                                <NavDropdown
                                    title={profile.name}
                                    id="collasible-nav-dropdown"
                                >
                                    <NavDropdown.Item href="#action/3.0">
                                        Prova premium gratis
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">
                                        Impostazioni e privacy
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Guida
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        Lingua
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Esci
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>

                            <div className="iconLavoro">
                                <BsGrid3X3GapFill id="icona" size={30} />
                                <NavDropdown
                                    title="Lavoro"
                                    id="collasible-nav-dropdown"
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        Action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        Something
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Esci
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </section>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
