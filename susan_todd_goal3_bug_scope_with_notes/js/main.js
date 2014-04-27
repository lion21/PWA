/*
	PWA1 Goal 3
	Susan Todd
	JavaScript Debugging & Scope
*/


(function(){

/*
	===================================================================
	Goal 2 Recap
*/

console.log('------ Recap from the previous lecture ----------');

/*******************************************
 STUDENT ACTIVITY 1:

 We are starting the review with an assessment to test your comprehension of
 some of the course materials from Goal 2

     1.  an array of students is provided for you
     2.  console.log the number of items in the array
     3.  create a for loop
         - console.log the index number
         - console.log the student name in the array that pertains to the index
             number of the loop (i.e. if the loop is on index 1 then the student's
             name of 'Bob' should be console.logged
 ********************************************/

// Array - For Loop
    var students1 = ['Bob','Christine','Sally','Jim'];
    console.log("The number of items in this array:" + " " + students1.length);


    //var count =0;
    for(var i=0, s=students1.length; i< s; i++){

    	console.log("INDEX NUMBER#" , [i]);//this will log the index as the array loops
    	
    	console.log( "Student Name:"   +  " "  + i + " = " , students1[i] );
    	
    };//close loop
     
/*
	===============================================
	ERROR TYPES: syntax, runtime, logic
*/
/*
	===============================================
	Debugging Techniques
		
	Syntax Errors:
		- Occur during parsing (when the script is being read by the browser)
		- Usually the result of missing a comma, or closing characters (quotes, brackets, parens)
		- One error will display at a time in your browsers console.log
        - Multiple syntax errors can occur but will display one at a time
	
	Runtime Errors:
		- Occur during runtime (when the script is in execution)
		- Usually caused by misspelled variable names, undefined variables, or bad function declarations
		- Only 1 runtime error will occur one at a time, fix & refresh
		
	Logic Errors:
		- Does not throw an actual error
		- This is what we call code that works but doesn't work correctly, there's a 'BUG'
		- The issue with these errors occur between your keyboard and the chair you are sitting in, Ha...
		- Infinite loops fall in this category	

    -----------------------------------------------

    - use a good text editor or IDE
    - use multiple browsers (they display different error messages)
    - keep the browsers console open at all times
    - use console.log EXTENSIVELY!!!!!!!
    - write JavaScript in external files
    - take a break!

*/

console.log('------ Debugging ----------');

/***********************
     For each of the examples below you will have to un-comment the code so the
     error in the code displays in the console.log.  You will want to determine
     the answer to what is incorrect about the code.

     Purpose is to display the error messages so you can see what the error messages
     display.  You may want to see the error messages in Chrome and Firefox.
 ***********************/

 
	//Example1
	var name   = 'james', 
		course =  'PWA1', 
		month  = 3;//fixed this entire object
		//fixed spellining , fixed concantionation of sentence
	console.log ("name:" , name + " " + "course:" ,course +" " + "month:" ,month );//added semi colon to end 


    //Example2:
	//string w/ escape charaters and mixed single/double quotes

	var phrase =( "he\'s in" + " " + " " + "PWA1" );//fixed quotes and escaped the apostrophe

	console.log("phase 4 using escape characters: " , phrase);


    //Example3:
	//nested conditional statement
	  
	//fixed the a and b, by adding quotes to them and making them strings
	if ("a" === "a"){    //1st IF statement

		//execute this block of code if a is equal to a
		
		if ("b" === "b"){  //nested IF statement : 2nd IF statement

   			//execute this block of code if b is equal to b
   			console.log("In Nested if-else / b === b: True");
   			//console.log();


		}else{       //nested ELSE statement
			//execute block of code if the matching “IF” statement returns false

			};

	}else{//fixed curly brace
		//execute this block of code if the 1st “IF” statement returns false
		console.log("nested conditional:" + " " + "1st IF returned false");//fixed this string
		};


    //Example4:
	var value1 = 'Sunny';
	var value2 = 10;
	
	var mood = function(weather, waves){//added the curly brace

		if(weather === "Sunny"){//added the ===
			if(waves === 10){

				Mood = 'PUMPED';

			}else if ((wave < 9) && (waves >= 5)){

				Mood = 'mellow';	

			}else{

				Mood = 'bummed';
			};	
	
		}else if(weather === 'Overcast'){

			if((wave <= 10) || (waves >= 7)){//fixed the or operator

				Mood = "JACKED UP";

			}else if((waves <= 6) && (waves >= 3)){

				Mood = 'totally bummed';	

			}else{//changed ) to curly brace

				Mood = 'not happy';
			};

		}else{
			Mood = 'sad';//added semi colon
		};

		return Mood;//fixed spellining of Mood
	};

	var moodType = mood(value1, value2);
	console.log('mood: ', moodType);


    //Example5:
    //error type is logical
    var myNums = [1, 2, 3, 4, 5];
    console.log(myNums);//i get the array

    //for (var i=10, j=myNums.length; i < j; i++){
    for (var i=0, j=myNums.length; i < j; i++){

        console.log("i: " + i);
        //console.log("j: " + j);//j is  always 5

        if (i === 3) {
            console.log("testing out the break and it broke");
            continue;//move continue to here so that the loop will keep running
            //now the out put is giving the correct indexes per loop begining with 0 zero
        };

        //continue;why is this here?
        console.log('What is at index ' + " "  + i + ' = ', myNums[i] );
    };
//fixed the missing comment slash
//*****************

/*
	===============================================
	TRY, CATCH, THROW

	- This technique will catch RUNTIME ERRORS only.
	- The primary purpose is in production use vs development mode
	- The TRY statement allows you to define a block of code to be tested for errors 
		while it is being executed.
	- The CATCH statement allows you to define a block of code to be executed, if an 
		error occurs in the try block.
	- The THROW allow us to create custom errors.	

	Syntax:
	try
  		{
  			//Run some code here
  		}
	catch(err)
  		{
  			//Handle errors here
  		}

    console.log('------ Try Catch ----------');
////////Example////////////////////////////////
*/
	//var return10 = function(){
		//return 1;//try changing the 1 out with 2, 15, and num
	//};
	//try{
		//if(num==="")throw "empty";//nothing
		//if(is NaN num)throw "empty";//NaN
		//if(num>10)throw "empty";//greater
		//if(num<10)throw "empty";//less
		

	//}
	//catch(err){

		//console.log(err);
	//};

//use with forms, 

	//===================================================================
/*

	Scope & Context

	- scope controls the visibility and lifetime of variables and parameters 
		- it defines where the variable is created, & where it can be accessed
	
	- javascript uses lexical scoping
		1.  a “scope level” will check parent levels for variables, and
		2.  a new “scope level” in javascript can only be made with a function

	- if a variable doesn’t exist in the current scope, through lexical scoping
		it will try to find the variable in a parent block	
		
	- local variables override higher scoped variables
	
	
	- all variables defined in a code block using {...} are not visible from 
		outside of the block - the code block is normally defined in a function
	-	variables defined in the code block are released when execution of the 
		block is finished
	- 	each function has it's own scope	

		var globalVar = “jamesBond”;
		function functionName(){
            var localVar = “maryBond”;   //only available within the function
			//you can use globalVar in this function
		}                
 			//you can use globalVar outside of the function


	- the 1st num is a global variable & will live for the life of the program
  	- the 2nd num is a local variable & will last only as long as the function
		
		var num = 1;       //this is the 1st num                 

		function myCounter ( ) {
			var num = 50;  //this is the 2nd num                            
		};


	More Examples:
	function functionName(var1){
		//you can use var1 in this function
	}                
		//you cannot use var1 after the function	


	function functionName(){
		var localVar = “jameBond”;
			//you can use localVar in this function
		}                
			//you cannot use localVar after the function

	function functionName(){
		shouldBeLocalVar = “jamesBond”;

			//without the var, this is actually a Global variable!
			//you can use shouldBeLocalVar in this function
	}                
		//you can use shouldBeLocalVar outside of the function

*/
console.log("---------- Scope & Context ----------------");

/*
	===================================================================
	Closure

	- Whenever you see the function keyword within another function, the inner function 
		has access to variables of the outer function.
*/

    console.log("---------- Closure ----------------");



    /*
    Definition:  Closure:
          1.  a snapshot of the functions outer environment at the time the closure is
              created
          2.  a closure is created at the moment when you assign a function
              reference and a copy of it's environment into memory by putting
              it inside of a variable, like we have done with the "fullName" variable

              -  so we have taken a snap shot of the function "closureFN"
              -  as well as any data ("firstName", "lastName", and "name") that was
                  available to it at the time we was created our closure or "snapshot"
                  "var fullName = nameFN(fname);"  including any fn parameters

         3.  so closure is a special type of object that combines a function and
              "the environment" in which that function was created.

              - "the environment" consist of any fn input parameters that are passed
                  to the "closureFN" function and variables at the time the closure
                  was created (the 3 variables inside of nameFN.

          4.  another way to look at this is that you are binding some information
                 to a variable so you can use it later " fullName();" , in your application

          5.  NOTE:  a function doesn't have to return something in order to be
                  called a closure.  Simply accessing variables outside of its
                  immediate lexical scope creates a closure.
    */

})(); // end wrapper