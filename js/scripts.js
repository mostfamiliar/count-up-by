var cryptoSquare = function(str) {
  str = str.replace(/[!,;.]/g,"").toLowerCase().replace(/\s+/g, "");
  var numofarrays = Math.ceil(Math.sqrt(str.length))
  var i = 0
  var x = i + numofarrays
    while (i < numofarrays) {
      eval("var array" + i + "= new Array();").push(str[0,5])
      i++;
    }

   console.log(array1, array2, array3, array4, array0)


  // while ()
  // while the str[i] is less than or equal to the numofarrays, push that str[i] into that array. when it reaches that point, it will go into a new array



 array = array + i



};
