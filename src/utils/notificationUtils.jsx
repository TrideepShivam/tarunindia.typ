export const handleNotification = (data, setMsg) => {
    const status = data.state;
    const message = data.message;

    if (typeof message === 'string') {
        setMsg({
            status: status,
            message: message,
        });
    } else if (typeof message === 'object' && message !== null) {
        Object.entries(message).forEach(([title, messages]) => {
            setMsg({
                status: status,
                message: `${title}: ${messages}`,
            });
        });
    }
};
