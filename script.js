function stringChop(str, size) {
  // your code here
	const chunk =[];
  let i=0;
  while(i< str.length){
    chunk.push(str.substring(i, i+size));
    i += size;
  }
  return chunk;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
