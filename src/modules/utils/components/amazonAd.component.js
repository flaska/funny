import React from 'react';

function pickRandomAd() {
    let r = Math.floor(Math.random() * 11);
    switch (r) {
        case 0: return /* firestick */ "category=amzn_firetv_decembertpr&banner=1RGY50AZXV9P03PBXYR2&linkID=9f7c67ba1d391e8ef622082508e3352b";
        case 1: return /* unlimited grocery */ "category=amazonfresh&banner=1K1JWN715544X0YYW302&linkID=e15ed5df9582724801a5d2f93b9f56da";
        case 2: return /* echo */ 'category=echo_feb_deals_2019&banner=0D21RQXX3ZM79HA34VG2&linkID=f5cde518dab6228f8a2cdeb041d6f49e';
        case 3: return /* fire hd8 */ 'category=tab_lnch_kar_0906&banner=0GW8BN14AMRDE6QM3TR2&linkID=0ef2c8dd125b350cd34ac183e4736125&t=4slack-20';
        case 4: return /* 25 off fire */ 'category=tab_lnch_tradein_0810&banner=0107T58BJMV3C1M9TVG2&f=ifr&lc=pf4&linkID=2608fa195e89911e840b0f94daa992a6';
        case 5: return /* deep discounts - comp */ 'category=warehouse&banner=1TWJ5AN61PASAJA07KR2&f=ifr&lc=pf4&linkID=a777b66ecd00f82cbdb5dee27587fc4d';
        case 6: return /* deep discounts - phone */ 'category=warehouse&banner=1ER1MDBDMZ0DPV03XWR2&f=ifr&lc=pf4&linkID=4a24946b16f358872d55c71cdc8f7a57';
        case 7: return /* outlets */ 'category=outlet&banner=1QEJAD834MD6KBYFD902&f=ifr&lc=pf4&linkID=ae56ef88185c326f28fe8e9884913fb3';

        case 8: return /* deep discounts - comp */ 'category=warehouse&banner=1TWJ5AN61PASAJA07KR2&f=ifr&lc=pf4&linkID=a777b66ecd00f82cbdb5dee27587fc4d';
        case 9: return /* deep discounts - phone */ 'category=warehouse&banner=1ER1MDBDMZ0DPV03XWR2&f=ifr&lc=pf4&linkID=4a24946b16f358872d55c71cdc8f7a57';
        case 10: return /* outlets */ 'category=outlet&banner=1QEJAD834MD6KBYFD902&f=ifr&lc=pf4&linkID=ae56ef88185c326f28fe8e9884913fb3';
    }
}

export default function AmazonAd(){
    const styles = {
        main: {textAlign: 'center'},
    };
    let bannerId = pickRandomAd();
    // return (
    //     <div style={styles.main}>
    //         <iframe
    //             src={`//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&f=ifr&lc=pf4&t=4slack-20&tracking_id=4slack-20&${bannerId}`}
    //             width="300"
    //             height="250"
    //             scrolling="no"
    //             border="0"
    //             marginWidth="0"
    //             frameBorder="0">
    //         </iframe>
    //
    //     </div>
    // );
    return (<div>
        {/*<div id="amzn-assoc-ad-7da69bb1-46b0-423d-8b74-99d954a32b2c"></div>*/}
    </div>)
}