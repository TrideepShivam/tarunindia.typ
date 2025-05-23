import { useContext, useState } from 'react';
import { Context } from '../../ContextAPI';
import Button from '../button/Button';

import './Accordion.css';

const Accordion = ({ head, details }) => {
    const [openSection, setOpenSection] = useState(false);
    const { lightMode } = useContext(Context);
    let imgurl = !lightMode
        ? 'https://img.icons8.com/ios-glyphs/30/ffffff/forward.png'
        : 'https://img.icons8.com/ios-glyphs/30/000000/forward.png';

    return (
        <div className="accordionContainer" onClick={() => setOpenSection(!openSection)}>
            <div className="accordionHead">
                <p>{head}</p>
                <Button
                    style={{ width: '1.5em' }}
                    transparancy={true}
                    value={
                        <img
                            style={{ transition: '.5s all ease', transform: openSection && 'rotate(90deg)' }}
                            src={imgurl}
                        />
                    }
                />
            </div>
            {openSection && (
                <div className="accordionDetails">
                    <p>{details}</p>
                </div>
            )}
        </div>
    );
};

export default Accordion;
