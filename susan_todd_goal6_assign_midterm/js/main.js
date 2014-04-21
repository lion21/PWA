/*
	* Mid Terms for PWA-1
	Susan Todd
	4-18-14
*/

//self-executing function
(function(){

//console.log("ready");//returns the same//check

//GLOBAL VAR SET UP
var button =  document.querySelector(".buttonred");//buttonred is a class
var i = 0;//counter keeps track of number of student records 

//Declare array of 3 objects to access
var students = [

    	{name:'James Bond',
         address:{street:'3300 University Blvd' ,
                  city:  'Winter Park' ,
                  state: 'Fl'        } , 
         gpa:[2.5,3.5,4.0], //10/3 = 3.33 
         date:new Date('06/05/1950')//yr,month,day
        }, 

    	{name:'Taz Devil',
         address:{street:'1010 TimeOut Highway' ,
                  city: 'Big Cage Park' , 
                  state: 'FL'         } ,
        gpa:[2.9,2.5,4.0], //9.4/3= 3.13
        date: new Date( '1960 ,11, 11')
        }

    	//{name:'Bugs Bunny', address:{street:'5300 Universal Studios Blvd' ,city: 'Orlando' , state: 'FL'} , gpa:[4.0,2.5,4.0] }//10.5/3 =3.5

    ];//close array objects

    //Testing students array
    //testing the objects in the array, all come back correctly
    //console.log(students[0].name,students[1].address);
    //console.log(students[2]);
    //console.log(students[1].address.street);


//CONSOLE.LOG ALL STUDENT RECORDS
var consoleData = function(){  

    for (var i=0, j=students.length; i<j; i++){

              console.log("Name:"    +":" + students[i].name);
              console.log("Address:" +":" + students[i].address.street +" :" + students[0].address.city +":" + students[0].address.state);
              console.log("GPA:" + ":"+ students[i].gpa);
              console.log("Date:" + students[i].date.getMonth() + "/" + students[i].date.getDay()  + "/"  + students[i].date.getFullYear()   );//end object
              
    };//end loop

    return false;

};//end consoleDat fn

//FN FOR ADDING NEW STUDENTS TO THE ARRAY 
var addData = function(newname,newstreet,newcity,newstate,newgpa,newdate){

        //push new student to the array students
      /*  var stu = {name:'Buggs Bunny',
                   address:{street:'5300 Universal Studios Blvd' ,
                           city:  'Orlando',
                           state: 'FL' },
                    gpa:[4.0,2.5,4.0] ,
                    date:new Date(1955, 01, 12) };

        students.push(stu)  ;     */     

        //var name =newname:'Buggs Bunny';

        //var address=newaddress; {street:'5300 Universal Studios Blvd' , city:'Orlando', state:'FL' };

      //  var gpa= newgpa[4.0,2.5,4.0] ;

       // var newdate= date:new Date(1955, 01, 12)

        students.push( {   name:'Buggs Bunny',
                           address:{ street:'5300 Universal Studios Blvd', city:'Orlando', state:'FL' },
                           gpa:[4.0,2.5,4.0],
                           date:new Date(1955, 01, 12)  

                    }  );//close newobject

    };//end add new student fn

console.log("Num students in array:"+ " "+students.length);//testing what is in the array, it wont push?????
   

//FOR FINDING THE GRADE POINT AVERAGE
var gpaAvg = function(myAry){
    console.log(myAry.length);

    var gradeAvg = 0;//holds the running count
    //var myAry = students[i].gpa;

    for(var i=0, max = myAry.length; i < max; i++){

        gradeAvg = gradeAvg + myAry[i];//adding all the grades in the array for that student

    };//end loop

var num = gradeAvg/max;
console.log(num);
return num.toFixed(2);//return the avg to 2 decimal pts

};//end avgerages fn
console.log(students[0].gpa);//testing the avg fn


//DISPLAY HTML OF STUDENT INFO
var displayData = function(){

    //define items to be diplayed on screen
    var innerName    =document.querySelector("#name");
    var innerAddress =document.querySelector("#address");
    var innerGpa     =document.querySelector("#gpa");
    var innerDate    =document.querySelector("#date");
    var innerAvgGpa  =document.querySelector("#gpaavg");//gpaAvg

    //DO NOT DISPLAY IF NUM ITEMS LEFT IS NOT EQUAL TO THE MAX+1, DISPLAY NEXT RECORD
    //if student record not same as max + 1
    if(i !== max+1){
        innerName.innerHTML='Name:'+ students[i].name;
        innerAddress.innerHTML='Address:'+ students[i].address.street + ':' + students[i].address.city + ':' +students[i].state;
        innerGpa.innerHTML='GPA:'+ students[i].gpa;
        
        //add date info after getting all this working
        innerDate.innerHTML ='Date:'+students[i].date.getMonth()+"/"+students[i].date.getDate()+"/"+students[i].date.getFullYear();
        console.log(students[i].gpa);
        //THIS IS CALLING THE gpaAvg 
        var avg = gpaAvg(students[i].gpa);//LOCAL VAR FOR STUDENT AVG


        //DISPLAY THE AVG GPA ON SCREEN
        innerAvgGpa.innerHTML = 'Avg GPA:' + " " + avg;
        console.log(students[i].gpa.length);//TESTING

        //ELSE CHANGE BTN TEXT TO DONE
    }else{
        //WHEN DONE WITH ARRAY CANCEL DEFAULT ACTIONON BTN AND CHANGE TEXT ON BTN
        button.onclick = "return false";
        document.querySelector('.buttonred').innerHTML = "DONE!";

    };//end else 


    i++;//start next record
    return false;
     
};//close fn

var max = students.length;//traking how many records(students) are in the array
//CLICK THE BTN TO SHOW A NEW STUDENT RECORD
button.onclick = displayData;

//Print TO CONSOLE LOG
console.log('**********Below are the original objects*******************');  
console.log(consoleData());              
console.log(addData()); 
console.log(''); 
console.log('*************Below shows new object added to new object*********'); 
console.log(displayData()); 
 

})();//close doc