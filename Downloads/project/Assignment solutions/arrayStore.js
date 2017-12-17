
var hobby=["Reading Novels", "Music"];

var pushArray = function(add){
	hobby.push(add);
	var x="Badminton"
	hobby.push(x); // Pushing variable in the array
	var check = function(){
    return "PS4"
    };
	hobby.push(check()); //Pushing function in the array
};
pushArray("Cricket");
console.log('Hobby: ',hobby);
// Objective b