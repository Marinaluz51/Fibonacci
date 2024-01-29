function fibonacciGenerator (n) {
   
        
        var output = [];
         var n1 = 0;
        var n2 = 1 ; 
       
         while (n > 0) {
             output.push(n1);
             var next = n1 + n2;
              n1 = n2;
            n2 = next;
            n--;
    
             
         }
        
        
         console.log(output);
        
    }
console.log(fibonacciGenerator (100));