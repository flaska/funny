export function formatNumber(n){
    if (n<1000) return n;
    return Math.round(n * 0.01)*0.1 + 'k';
}