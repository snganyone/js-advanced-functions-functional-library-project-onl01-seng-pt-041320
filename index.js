const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      // for(let x = 0; x < collection.length; x++){
      //   console.log(collection[x]);
      //   callback(collection.values);
      // }
      // return collection;
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
      for(const key in collection){
        let x = callback(collection[key]);
        acc += x;
      }
      return acc;
    },

    find: function(collection, predicate){
      return predicate.every(function(x){
        return x[collection];
      })
    },

    filter: function(collection, predicate){
      for(const key in collection){
        if(key == predicate){
          return key;
        }
      }
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
        for(let x = 0; x <= n; x++){
          return array[x];
        }
      } else{
        return array[0];
      }
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
