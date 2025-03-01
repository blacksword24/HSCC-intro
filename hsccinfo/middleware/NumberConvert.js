module.exports={

// create deciml to binary conversion function
ConvertDecToBin:function(decimal){
if (process.env.CONSOLE_DEBUG=="true"){
console.log(decimal)
} // End if console.debug


var runningdec=decimal;
var binString='';

while (runningdec > 0){
var newbit= runningdec % 2
binString=newbit.toString()+binString;
runningdec = Math.floor(runningdec/2);
} return binString; } 
}

// End convertDecToBin function