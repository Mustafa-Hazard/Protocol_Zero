import { Link } from 'react-router-dom';
import { Container, Navbar as BsNavbar, Nav } from 'react-bootstrap';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
    return (
        <BsNavbar
            sticky="top"
            className="py-2 game-navbar"
            style={{
                backdropFilter: 'blur(10px)',
                background: 'rgba(1, 4, 9, 0.8)'
            }}
        >
            <Container fluid className="px-4">
                {/* Brand Identity */}
                <BsNavbar.Brand
                    as={Link}
                    to="/"
                    className="navbar-brand-custom d-flex align-items-center gap-2"
                    style={{
                        textShadow: '0 0 15px rgba(31, 111, 235, 0.4)',
                        letterSpacing: '0.5px'
                    }}
                >
                    <span style={{ color: '#1f6feb', fontSize: '20px' }}>◈</span>
                    <span style={{ fontWeight: 800 }}>Protocol Zero</span>
                </BsNavbar.Brand>

                {/* Central Search Section */}
                <Nav className="mx-auto" style={{ width: '45%', maxWidth: '600px' }}>
                    <div className="w-100 px-3">
                        <SearchBar />
                    </div>
                </Nav>

                {/* Right Side Controls */}
                <Nav className="ms-auto align-items-center gap-4">
                    <Nav.Link
                        as={Link}
                        to="/"
                        className="navbar-link-custom p-0"
                        style={{
                            fontSize: '14px',
                            fontWeight: 600,
                            transition: '0.3s'
                        }}
                    >
                        Home
                    </Nav.Link>

                    {/* Vertical Divider */}
                    <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)' }} />

                    <ThemeToggle />
                </Nav>
            </Container>
        </BsNavbar>
    );
};

export default Navbar;