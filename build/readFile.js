const fs=require('fs');
const path=require('path');

const basePath=path.resolve(__dirname,'..','dist');

let outStr='';

function readFileNames(filepath){
	let files=fs.readdirSync(filepath);
	files.forEach(function(file){
		let stats=fs.statSync(filepath+'/'+file);
		if(stats.isDirectory()){
			readFileNames(filepath+'/'+file);
		}else if(stats.isFile()){
			outStr+=file+'\n';
		}
	})
}

module.exports={
	recordStaticFiles:function(){
        readFileNames(basePath);
        fs.writeFile(basePath+'/files.txt',  outStr,  function  (err)  {
            if  (err)  {
                throw  err;
            }
        });
	}
}
