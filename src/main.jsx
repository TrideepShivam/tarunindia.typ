import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import ContextAPI from './ContextAPI';
import Router from './Router';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextAPI>
        <RouterProvider router={Router} />
    </ContextAPI>,
);
