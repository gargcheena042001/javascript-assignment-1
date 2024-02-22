const arr=[1,2,999,56,"Mithu",1234,"pw"];
for(let i=0;i<=arr.length-1;i++){
    if( typeof arr[i]==="string"){
        console.log("found the first string:",arr[i]);
        return;
    }
   
}