export function formatNumber(n){
    if (n<1000) return n;
    return Math.floor(Math.round(n * 0.01))/10 + 'k';
}