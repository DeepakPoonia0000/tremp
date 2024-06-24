import React, { useState } from 'react';
// import '../Styles/Footer.css';

const Fotter = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(prevSection => (prevSection === section ? null : section));
    };

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" , overflow:"hidden"}}>
            <div className="footer">
                <div className="footer-section" onClick={() => toggleSection('account')}>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }} >
                        <h4 >Account</h4>
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
                <div className="footer-section" onClick={() => toggleSection('company')}>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }} >
                        <h4 >Account</h4>
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
                <div className="footer-section" onClick={() => toggleSection('getHelp')}>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }} >
                        <h4 >Account</h4>
                        <div className='dnone'>{
                            openSection === 'account' ? '-' : '+'
                        }
                        </div>
                    </div>
                    <ul className={`footer-list ${openSection === 'getHelp' ? 'open' : ''}`}>
                        <li>Return Policy</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Refund Policy</li>
                    </ul>
                </div>
                <div className="footer-section" onClick={() => toggleSection('connect')}>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }} >
                        <h4 >Account</h4>
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
