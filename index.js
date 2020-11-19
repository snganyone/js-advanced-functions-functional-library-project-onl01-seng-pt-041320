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
      for(let x = 0; x < collection.length; x++){
        let y = callback(collection[x]);
        //console.log(y);
        arr.push(y);
      }
      return arr;
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
