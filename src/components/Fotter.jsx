import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../Styles/Footer.css';

const Fotter = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(prevSection => (prevSection === section ? null : section));
    };

    return (
        <div   style={{ width: "100%", display: "flex", justifyContent: "center" , overflow:"hidden"}}>
            <div className="footer ">
                <div className="footer-section align-items-sm-center " onClick={() => toggleSection('account')}>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }} >
                        <h4 className=' mx-sm-auto' >Account</h4>
                        <div className='dnone'>{
                            openSection === 'account' ? '-' : '+'
                        }
                        </div>
                    </div>
                    <ul className={`footer-list ${openSection === 'account' ? 'open' : ''}`}>
                        <li>Login</li>
                        <li>Sign Up</li>
                    </ul>

                </div>
                <div className="footer-section align-items-sm-center" onClick={() => toggleSection('company')}>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }} >
                        <h4 className='mx-sm-auto' >Company</h4>
                        <div className='dnone'>{
                            openSection === 'account' ? '-' : '+'
                        }
                        </div>
                    </div>
                    <ul className={`footer-list ${openSection === 'company' ? 'open' : ''}`}>
                        <li>About Us</li>
                        <li>Bulk Orders</li>
                    </ul>
                </div>
                <div className="footer-section align-items-sm-center" onClick={() => toggleSection('getHelp')}>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }} >
                        <h4 className='mx-sm-auto' >Get Help</h4>
                        <div className='dnone'>{
                            openSection === 'account' ? '-' : '+'
                        }
                        </div>
                    </div>
                    <ul className={`footer-list ${openSection === 'getHelp' ? 'open' : ''}`}>
                        
                        <Link to="/privacyolicy"><li>Privacy Policy</li></Link> 
                        <Link to="/termsandconditions"><li>Terms of Service</li></Link>
                    </ul>
                </div>
                <div className="footer-section  align-items-sm-center" onClick={() => toggleSection('connect')}>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }} >
                        <h4  className='mx-sm-auto'>Connect</h4>
                        <div className='dnone'>{
                            openSection === 'account' ? '-' : '+'
                        }
                        </div>
                    </div>
                    <ul className={`footer-list ${openSection === 'connect' ? 'open' : ''}`}>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Fotter;
