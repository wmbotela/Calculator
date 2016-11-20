// Business logic
// addition function
var add = function(number1, number2) {
        return number1+ number2;
      };
// Subtraction function
var subtract = function(number1,number2){
              return number1-number2;
};

// Multiplication Function
var multiply = function(number1,number2){
              return number1*number2;
};
// Division function
var divide = function(number1,number2){
              return number1/number2;
};

    // User interface

      // var number1 = parseInt(prompt("Enter a number:"));
      // var number2 = parseInt(prompt("Enter another number:"));
      //
      // var result = add(number1, number2);
      // alert(result);

      $(document).ready(function () {
        $("form#add").submit(function(event){
          event.preventDefult();
          var number1 = parseInt($("#add1").val());
          var number2 = parseInt($("#add2").val());
          var result = add(number1,number2);
          $("#output").text(result);

        });
      });
