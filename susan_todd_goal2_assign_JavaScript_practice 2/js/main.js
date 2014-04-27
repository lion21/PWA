/*Susan Todd
PWA-javascript practice
*/// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    /*create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function*/

    var numArray=[1,2,3,4,5];//array to avg
    //var sum=0;//counter this will hold the count
    var sum=0;
    var avgNumbers = function(numArray){

          for (var i=0; i< numArray.length; i++){ //loop to cycle through array
            sum = sum + numArray[i];//counting and adding
         }
         return sum/numArray.length;//math operation

    };
    avgNumbers(numArray);//function call and passing in the array
    console.log("the avg of the numArray is:" + " "+ sum/numArray.length );

    //--------------------------------------------------------
    console.log("2. concat first and last name");
    /*create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function*/

    var str1 = "James";//these variables will go into the fn as parameters var1 and var2
    var str2 = "Bond";

    var fullName = function(var1,var2){
        
               return [ var1, var2]; //using an array to hold the value of both names, it took me awhile to figure this out
   };

   var myName = fullName(str1 ,str2);//fullName(str1, str2) this is  the fn call / change it into a varible
   console.log(myName[0] + " " + myName[1]);  

    //console.log(fullName[0] , fullName[1]);

    //--------------------------------------------------------
    console.log("3. word count");
     /*create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function*/
    //I worked out he functions from first working out variables and math
    /* var ipsum = "this is test text that is being used as input to a function";
     var split = ipsum.split(" ", 13);//returns the first 13 splits/ the split is counted as " "
     console.log("the split:" + " " +split);//this out puts the entire string of text seperated by commas
     console.log("The number of words in the string ipsum is :" + "" + split.length);//by using split to make an array of strings seperated by a comma, then you can call the length property
    */
     //Function
     
     var ipsum = "this is test text that is being used as input to a function";
                         //var split =[];//holds the split array
                         //var result = ipsum.split(" " ,13);//store var so it can be logged outside of the function
                        // console.log(split.length);
     var wordCount = function(longWord){

        for(var n =0; n<ipsum.length;n++){
         split=ipsum.split(" ", 13);//returns the first 13 splits/ the split is counted as " "
         //console.log(split.length);//testing the split
         }
         return split.length; 
         //console.log(split.length)
     };
     //wordCount();
     var result = wordCount();
     console.log("The number of words in the function wordCount is" + " " + result);

    //console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

        /* 4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function*/
    //worked out the method for gettingthe value of numOfChars.length

     //var stringNumOfChars = "this is a long string of text to count";
     //use the var ipsum above, having issues keep getting 13 from problem above change all vars slightly
     //I know vars are not seen outside of thier functions but, when pushed to the edge,what choice is there?
    var ipsumAgain = "this is test text that is being used as input to a function";
    console.log("The number of characters in this string of text is:" +  " " + ipsumAgain.length + " " + "including the spaces.") //59 is the answer  
   
    var charCount = function(cnt){

            //for(var o =0; o<ipsumAgain.length; o ++){

                // split = ipsumAgain.split(" ");//returns the first 13 splits/ the split is counted as " "
                 //console.log(split.length);//testing the split
           // };
            return cnt.split("").length; //do not use a space between the quotes on this split, your counting each char/space
            //console.log(split.length)
    };
    var res = charCount(ipsumAgain);
    console.log("I know this is supposed to be 59, but I keep getting :" + " " + res);
    console.log("Yea, I finally got it!!!!!!!!")
    //console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

         /*5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function*/

   // var numVowels = "JavaScript";
/*
    var vowelsInWord = function(){
        //array of vowels to test for
    var vowels = [ "a", "e", "i", "o", "u", "y"];
  
             count = 0;//counter to store a's
                //use contex of this(current word(new parameter)) perform method toLowerCase(), then split()
             this.word = word.toLowerCase().split("");

             for(var k = 0, p=vowels.length; k<p; k++){
                for(var kk=0, pp= vowels.length; kk<pp; kk++){
                    //if this letter in javascript is the same as one of these vowels,
                if(this.word[k] === vowels[p]){
                        //then count the letter as a vowel
                    count++;
                };//close if
             };//close loop
           };//close first loop 
           return count;
    };//clsoe fn    

    I tried working this out but it kept throwing an error ,
    I thoughthe the due date was tomorrow not wed night,  
    */  
///////////////////////////////////////////////////////////////////
  var numVowels = "JavaScript";

  count= 0;

             position = numVowels.indexOf("a" );
             while(position != -1){ //while position is not equal to -1(-1 evaluates to a false position)
                count++;//count the a's
                position = numVowels.indexOf("a", position + 1);//numVowels.indexOf(looks for string a , at first position and keeps going)
            };
            count1=0;//nwe counter to count the i's in javascript
            position1 = numVowels.indexOf("i");
            if(position1 != -1){//documented above
               count1++;
               position1 = numVowels.indexOf("i", position1 +1);// the +1 keeps the conditional going
          
            };     
      console.log( "There are " + " " + count +" "+ "a\'s");//two a's
      console.log("There are " + " " + count1 + " " + "i\'s");//one i 
    //console.log(vowelsInWord('JavaScript'));
   // console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

 /*
    6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
    */

        var findNum = function(arr, even){
            var rArry=[];//use to return the even and odd nums after testing for a remainder
            var value;//temp var , is equql to the index currenlty being tested
            
            if( even === undefined || even ){

                for(var x = 0, z = arr.length; x<z; x++ ){

                    value = arr[x];

                    if(value % 2 === 0 ){//number modulus 2, if there is no remainder then the num is even

                        rArry.push(value);//push the even number into the  return arrary

                    };//close if
                };//close loop
            }else{
                    //if for odd nums
                for(var x= 0, z= arr.length; x<z ; x++){

                    value = arr[x];
                    if(value % 2 != 0){

                        rArry.push(value);

                    };//end if
                 };//close loop
             };//close else    

            return rArry;
        };//close fn       
        var resultsA = findNum([31,22,4,67,83,6,5,4]);
        console.log("These are the evens:" +  " " +resultsA);
        var resultsB = findNum([31,22,4,67,83,6,5,4], false);
        console.log("the odds:"+ " " + resultsB);

        console.log(findNum([31,22,4,67,83,6,5,4]));
        console.log(findNum([31,22,4,67,83,6,5,4], false));

})();