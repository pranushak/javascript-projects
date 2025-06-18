function characterOccurences(str){
    let count ={};
    for(let c of str){
        if(c != ' '){
            count[c] = (count[c] || 0) +1;

        }
    }
    return count;

}

console.log(characterOccurences("hello"))