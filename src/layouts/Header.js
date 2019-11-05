import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import { purple, social, elevation, fixed, serif } from '../utilities';

const Header = ({ className }) => {
    return (
        <div>
            <header className={className}>
                <img src={logo} alt="logo" className="logo" />
                {/* Hello */}
            </header>
        </div>
    )
}

export default styled(Header)`
    background: ${social.facebook};
    padding: 10px 5%;
    ${serif};
    ${fixed()};
    ${elevation[2]};
    .logo {
        width: 60px;
    }
`;

// export default Header
