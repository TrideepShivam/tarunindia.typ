import { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../api';
import { Context } from '../ContextAPI';

const useAuthInterceptor = () => {
    const { setUserLocal, setPurchaseBoxOpen, setMsg, connected } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (connected) {
            const requestInterceptor = api.interceptors.request.use((config) => {
                const token = JSON.parse(localStorage.getItem('USER_DETAILS'));
                config.headers.Authorization = `Bearer ${token && token.access_token}`;
                return config;
            });
            const responseInterceptor = api.interceptors.response.use(
                (response) => {
                    return response;
                },
                (error) => {
                    try {
                        if (error.response.status == 401) {
                            localStorage.removeItem('USER_DETAILS');
                            setUserLocal('');
                            setMsg({
                                status: 'Error',
                                message: error.response.data.message,
                            });
                        } else if (error.response.status === 500) {
                            setMsg({
                                status: 'Error',
                                message: 'Internal server Error.',
                            });
                        } else if (error.response.status === 404) {
                            setMsg({
                                status: 'Error',
                                message: '404: Page not found.',
                            });
                        } else if (error.response.status === 403) {
                            setPurchaseBoxOpen(true);
                        } else if (error.response.status === 422) {
                            return error.response;
                        }
                        return Promise.reject(error);
                    } catch (error) {
                        console.log(error);
                    }
                },
            );

            return () => {
                api.interceptors.request.eject(requestInterceptor); // remove interceptor on dismount/auth change
                api.interceptors.response.eject(responseInterceptor); // remove interceptor on dismount/auth change
            };
        } else {
            navigate('/error', {
                state: {
                    from: location.pathname,
                    message: 'Connection lost',
                },
            });
        }
    }, []);
};

export default useAuthInterceptor;
