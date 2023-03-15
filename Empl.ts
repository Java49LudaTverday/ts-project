function counter() {
    var count = 0;
    return function() {
      console.log(count++);
    }
  }
  var count = counter();
  count();
  count();
  count();