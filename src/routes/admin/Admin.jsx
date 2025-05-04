import Button from '../../components/button/Button';
import Hyperlink from '../../components/hyperlink/Hyperlink';
import Textbox from '../../components/textbox/Textbox';

import './Admin.css';

const Admin = () => {
    return (
        <>
            <div className="loginContainer">
                <h2 className="highlight">LOGIN-ADMIN</h2>
                <Textbox type="text" legend="Email" />
                <Textbox type="Password" legend="Key" />
                <Hyperlink href="/forgot-password" value="Forgot Password?" />
                <Button value="Login" />
            </div>
        </>
    );
};
export default Admin;
