export default function getFeedNameFromUrl(){
    let tag = window.location.pathname.replace('/f/','');
    if (tag=='/') tag = 'funny';
    return tag;
}