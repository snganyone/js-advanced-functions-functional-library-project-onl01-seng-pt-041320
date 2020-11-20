const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(const key in collection){
        callback(collection[key]);
      }
      return collection;
    },

    map: function(collection, callback) {
      let arr = [];
      for(const key in collection){
        let y = callback(collection[key]);
        arr.push(y);
      }
      return arr;
    },

    reduce: function(collection, callback, acc) {
      let i;
      if(acc){
        i = 0;
      } else{
        i = 1;
        acc = collection[0];
      }
      for(i; i < collection.length; i++){
        acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    find: function(collection, predicate){
      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          return collection[i];
        }
      }
    },

    filter: function(collection, predicate){
      let arr = [];
      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          arr.push(collection[i]);
        }
      }
      return arr;
    },

    size: function(collection){
      let size = 0;
      for(const key in collection){
        if(collection.hasOwnProperty(key)){
          size++;
        }
      }
      return size;
    },

    first: function(array, n){
      if(n){
        return array.slice(0, n);
      } else{
        return array[0];
      }
    },

    last: function(array, n){
      if(n){
        return array.slice(-n);
      }
      return array[array.length - 1];
    },

    compact: function(array){
      let truearray = [];

      for(let i = 0; i < array.length; i++){
        let falsey = Boolean(array[i]);
        if(falsey === true){
          truearray.push(array[i]);
        }
      }
      return truearray;
    },

    sortBy: function(array, callback){
      let newarr = array.slice();

      let sort = newarr.sort((a, b) => callback(a) - callback(b));

      return sort;
    },

    flatten: function(array, shallow){
      //flatten 1 level
      let merge = [].concat.apply([], array);
      //flatten deeply nested array
      let flatten = (arr) => {
        return arr.reduce((acc, val) => acc.concat(Array.isArray(val)? flatten(val) : val), []);
      };

      if(shallow === true){
        return merge;
      } else{
        return flatten(array);
      }
    },

    uniq: function(array, isSorted, callback){
      let uniqChars = array.filter((x, idx) => {
        return array.indexOf(x) === idx;
      });

      if(callback){
        let arr = [];
        //let newarr = uniqChars.map(x => callback(x));
        for(let x = 0; x < uniqChars.length; x++){
          let add_item = true;
          for(const key in arr){
            let c = callback(arr[key]);
            let arr_call = callback(uniqChars[x]);
            if(c === arr_call){
              add_item = false;
            } 
          }
          if(add_item === true){
            arr.push(uniqChars[x]);
          }
        }
        return arr;        
      } else{
        return uniqChars;
      }
    },

    keys: function(obj){
      return Object.keys(obj);
    },

    values: function(obj){
      return Object.values(obj);
    },

    functions: function(fi) {
      return Object.getOwnPropertyNames(fi).filter(function(key){
        return fi[key] && (typeof fi[key] === "function");
      }).map(function(key){
        return fi[key];
      })
    },


  }
})()

fi.libraryMethod()
