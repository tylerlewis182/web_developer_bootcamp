var comments = {};
comments.data = ["Good Job!", "Bye", "Lame..."];
//console.log(comments.data);

// create a print funtion
comments.print = function(){
  this.data.forEach(function(item){
    console.log(item);
  }
)};

comments.print();
