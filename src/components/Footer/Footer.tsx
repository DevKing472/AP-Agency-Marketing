import React from 'react';
import './_footer.scss';
import logo from 'assets/images/logo.png'
import IconsReactjs from 'icons-reactjs';
// import { FaPhone, FaEnvelope} from 'react-icons/fa'

// const buttonStyle = {
//     margin: '5px',
//     fontsize: '1rem',
//     color: 'orange'
// };

export const Footer: React.FC = () => {

    return (
        <footer className="footer__container">
            <div className="footer">
                <div className="footer__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="footer__info">
                    <div className="social-row">
                        {/* <FaPhone style={buttonStyle} /> */}
                        <IconsReactjs
                            icon={'phone-circled'}
                            fontSize={'2rem'}
                            color={'orange'}
                        />
                        <p>(906) 123-4567</p>
                    </div>
                    <div className="social-row">
                        {/* <FaEnvelope style={buttonStyle} /> */}
                        <IconsReactjs
                            icon={'mail-circled'}
                            fontSize={'2rem'}
                            color={'orange'}
                        />
                        <p>info@apagency.ca</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}