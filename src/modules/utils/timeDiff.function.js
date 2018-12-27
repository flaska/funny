export default function timeDiff(utcInt){
    let utc = new Date(utcInt);
    let now = new Date();
    let diffMil  = now - utc;
    let diffHr = diffMil / 1000 / 60 / 60;

    if (diffHr<0.15) return 'now';
    if (diffHr<0.25) return '15 minutes ago';
    if (diffHr<0.5) return 'half an hour ago';
    if (diffHr<1.2) return 'an hour ago';
    if (diffHr<22) return Math.round(diffHr) + ' hours ago';
    if (diffHr<48) return 'yesterday';
    return Math.round(diffHr/24) + ' days ago';
}