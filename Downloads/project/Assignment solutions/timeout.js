function display() {
  setTimeout(function() {

    console.log('Check..1..2..3');

    display();
  }, 3000);
};

display();//objective f