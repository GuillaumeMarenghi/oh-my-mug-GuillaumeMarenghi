tweets = []

moyenne (){
    let total;
    tweets.forEach(elm => {
    total += elm.nbRT
})

    return total / tweets.lenght;

;}