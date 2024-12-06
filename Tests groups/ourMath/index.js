let str = 'Hello myA A expensive family my name is Ayman ezz and my car is red my';


function findPattern(str, pattern){
  let index = -1
  for(let i = 0; i < str.length; i++){
    index = str.indexOf(pattern,i)
    if(index == -1) break;
    i = index
    console.log(index);
  }
}

findPattern(str,'A')

