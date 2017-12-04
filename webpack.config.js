const path=require('path');
module.exports={
    entry:{
        entry: './src/entry.js',
        entry2: './src/entry2.js'
    },
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module:{},
    plugins:[],
    devServer:{
        contentBase:path.resolve(__dirname, 'dist'),
        host:'192.168.31.220',
        compress:true,
        port:1717
    }
}