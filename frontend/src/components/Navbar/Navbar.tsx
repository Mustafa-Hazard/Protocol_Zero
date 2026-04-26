import { Link } from 'react-router-dom';
import { Container, Navbar as BsNavbar, Nav } from 'react-bootstrap';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
    return (
        <BsNavbar sticky="top" className="py-2 game-navbar">
            <Container fluid>
                <BsNavbar.Brand as={Link} to="/" className="navbar-brand-custom">
                    🎮 Protocol Zero
                </BsNavbar.Brand>
                <Nav className="mx-auto" style={{ width: '40%' }}>
                    <SearchBar />
                </Nav>
                <Nav className="ms-auto align-items-center gap-3">
                    <Nav.Link as={Link} to="/" className="navbar-link-custom">Home</Nav.Link>
                    <ThemeToggle />
                </Nav>
            </Container>
        </BsNavbar>
    );
};

export default Navbar;