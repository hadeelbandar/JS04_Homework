
console.log('Lyrics of the song 99 Bottles of Beer')
    for (var num = 99 ; num >= 0; num -- ){
     if(num <= 99 && num >= 2)
      {
        console.log(num , 'bottles of beer on the wall,' ,num ,'bottles of beer.Take one down and pass it around,'
       , num -1 ,'bottles of beer on the wall.');
       }

        else if (num == 1){
            console.log(num , 'bottle of beer on the wall,' ,num,' bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.');
        }
    
    else {
    console.log('No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, ' ,num +99,' bottles of beer on the wall.'); 
    }
    
    }



