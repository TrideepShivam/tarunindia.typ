export const istConverter = (time) => {
    const istDate = new Date(time).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    return istDate.split(' ');
};
