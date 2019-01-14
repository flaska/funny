exports.register = function(name){
    const serviceName = name;
    setInterval(function(){
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log(`Service ${serviceName} using ${Math.round(used * 100) / 100} MB memory.`);
    });
};