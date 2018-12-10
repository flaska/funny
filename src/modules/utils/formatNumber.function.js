import numeral from "numeral";

export function formatNumber(n){
    if (n>1000) return numeral(n).format('0.0a');
    else return n;
}