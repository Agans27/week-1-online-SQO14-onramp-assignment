function filterList(arr) {
    let filtered_array = arr.filter(function(element) {
                                return typeof element === "number"; 
                            });
    
    return filtered_array;
 }

  module.exports =filterList