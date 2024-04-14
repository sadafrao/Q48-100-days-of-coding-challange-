    // Q48    compainig Array with spread operators with spread operators suppose u are comapring price of two different
    //sets of laptop used this spread operator to combine this array into singlke array  sorted
    //use sort((a , b) => a - b)in acending order 
    let priceset1 = [1200,1500,1100];
     let priceset2 = [1000,1300,1600];
    let combinedprices = [...priceset1,...priceset2].sort((a,b) => a - b );


console.log(combinedprices);
