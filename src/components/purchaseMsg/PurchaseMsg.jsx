import { useContext } from 'react';
import './PurchaseMsg.css';
import PopUpContainer from '../popUpContainer/PopUpContainer';
import Hyperlink from '../hyperlink/Hyperlink';
import { Context } from '../../ContextAPI';
import Button from '../button/Button';

const PurchaseMsg = () => {
    const { setPurchaseBoxOpen } = useContext(Context);

    return (
        <PopUpContainer>
            <div className="purchaseMsgContainer">
                <h1 className="highlight">Oops...</h1>
                <p>You have no Access to use this feature</p>
                <p>Purchase a plan to get full Access accordingly</p>
                <div style={{ display: 'flex' }}>
                    <Hyperlink
                        style={{ fontSize: '1.5em' }}
                        type="bordered-theme"
                        href="/pricing"
                        value="View Plans"
                        onClick={() => setPurchaseBoxOpen(false)}
                    />
                    <Button
                        style={{ width: '5em' }}
                        transparancy={true}
                        value="Leave"
                        onClick={() => setPurchaseBoxOpen(false)}
                    />
                </div>
            </div>
        </PopUpContainer>
    );
};

export default PurchaseMsg;
