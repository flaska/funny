var ogs = require('open-graph-scraper');

exports.getImage = (url)=>{
    return ogs({url: url, timeout: 30000, followAllRedirects: true, maxRedirects: 30}).then((result)=>{
        if (!Array.isArray(result.data.ogImage)) return result.data.ogImage.url;
        else return result.data.ogImage[0].url;
    }).catch((err)=>{
        console.error(err);
    });
};