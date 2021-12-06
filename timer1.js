const { argv } = process;
if(typeof argv == 'number' && argv > 0){
    for (let i = 2; i< argv.length; i++){
        setTimeout(() => process.stdout.write('\x07') , argv[i] * 1000);
    } 
} 