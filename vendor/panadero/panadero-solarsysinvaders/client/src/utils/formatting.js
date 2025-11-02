export const formatNumber = (num, width) => {
    if (typeof num === 'number') {
        return num.toString().padStart(width, ' ');
    }
    return ''.padStart(width, ' ');
};

export const padString = (str, width) => {
    return (str || '').toString().padEnd(width, ' ');
}; 