/*Susan Todd
4-28-14

     PWA1: Goal 7:  Course Material 7 (more.Objects - Constructors - Prototypes)

 */

// application scope (self-executing function)
(function(){

/*	
    ==================================================================
    more.Objects
    ------------------------------------------------------------------

    - object's link variables and functions together inside of a storage container
    - variables and functions in objects are called object members
    - the variables and functions combined into a single data structure
    - variables = properties  	(variable is owned by the object)
    - function = method			(function is owned by the object)
    - functions placed within an object can access variables in the object w/o having
        to pass an argument

    Custom Objects (Constructor):
    - custom objects extend JavaScript to include features that need to suit your needs
    - since object properties and methods have to be initialized when a object is created,
        a special method called a "constructor" is needed to get an object up and running
    - every custom object requires its own "constructor" which is named the same as
        the object
    - the "constructor" is responsible for creating object instances
*/

	// get the location of the blog button
//Find in the html
var button = document.getElementById("blog_btn");//getElementByID()does not require the # or . class sign

/************************************************************************
    Blog constructor:

    - Classical inheritance (languages like AS3) use classes to create objects.
        Javascript doesn't have classes, but we do have constructors. A constructor is
        just a function called with the NEW keyword.
        The "new" keyword uses a constructor to instantiate an object

    - constructor = template
    - constructor = blue print for a home that will be used to build similiar homes
    - as a best practice, functions that are acting as constructors should be given a
        name starting with a capital letter, purely for making it easier to find in the code
    - just like any other function, we can pass arguments into it
    - any variables declared inside the constructor function’s scope are considered
        local to the function (cannot be accessed outside of it)

    - below is a constructor for a Blog object that creates and initializes properties
        for the text and date
  -----------------------------------------------------------------------
*/
//THIS IS OUR CONSTRUCTOR
var Blog = function(str, date){

            //use the contex this
            //console.log(this);
            //create the body and assign it the str
            this.body= str;//assigning str to body
            this.date = date;
                 //console.log(" 'str' is equal to  " , str);//Learned about Functions
                  //console.log(" 'this.body ' is equal to :" , this.body );//Learned About Functions

        /*
            //new code for the CONSTRUCTOR, passing in the parameter highlight
            this.toHTML = function(hightlight){

                var blogHTML="";                //using ternery operator below to replace the if statement in the original while loop
                                                //this code will now change the stipping if the % is ===0
                            // highlight p grey if true make grey background stripe if not true do nothing                       
                blogHTML += hightlight? "<p style = 'background-color:#EEEEEE'>":"<p>";


                //move this from below 
                //change blogText to blogHTML  remove i for the loop and replace with this
                blogHTML +=  "<strong> " + (this.date.getMonth() + 1 ) +"/" +
                                            //getMonth()begins with index jan = 0 , so we add 1 to get the correct month
                    this.date.getDate() + "/" +
                    this.date.getFullYear() + " </strong><br />" +
                    this.body + "</p>" ;//now check this in FF

                //must return something in this fn
                return blogHTML;

            };//close toHtml fn---constructor
        */

            //name the blog
            Blog.prototype.companyName = "FullSail";
            //add the prototype fn toHTML()
            Blog.prototype.toHTML = function(highlight){

                    var blogHTML="";   
                    //ternary conditional                                  
                    blogHTML += highlight ? "<p style = 'background-color:#EEEEEE'>":"<p>";

                    //date formating
                    blogHTML +=  "<strong> " + (this.date.getMonth() + 1 ) +"/" +                   
                            this.date.getDate() + "/" +
                            this.date.getFullYear() + " </strong><br />" +
                            this.body + "</p>" ;

                   return blogHTML;

            };
            //add the prototype fn toSting()
            Blog.prototype.toString = function(){

                //this.toString = function(){
                console.log(

                    "[" + (this.date.getMonth() + 1 ) +"/" +
                    this.date.getDate() + "/" +
                    this.date.getFullYear() + "]" +  
                    this.body  
                    );          

             };
        
};
/************************************************************************
     Properties in a constructor ("THIS")
     - the constructor’s job is establishing the properties of an object, along with
        their initial values
     - to create a property within a constructor, you set the property using the
        JavaScript keyword, "this"
     - the keyword "this" is essentially a reference to the object that owns the function
        it is being used in
     - "this" assigns ownership of the property to the object, and sets it’s initial value
     - because "this" is a reference, any changes or updates made to "this" are
        reflected in the owner object
     - we are assigning a property that belongs to "this" object, as oppose to just a
        local variable within the constructor
 -----------------------------------------------------------------------
 */
    // array of blog items
    // each blog item will use the Blog constructor as its template to create each
    //    object

    // manually create an object using the Blog constructor to establish the objects
    //      structure and display all the information in the body of the HTML

    //invoking the constructor above with the new key word
    //create an array of blogs to display

       var blog = [
           new Blog('Learned about functions, and how to pass parameters into them.',  new Date('04/2/2013') ),
           new Blog('Learned about objects, and how to set keys and get values.',      new Date( '04/15/2013') ),
           new Blog('I love reading regular expressions.  I normally read a few lines right before falling asleep.  It is really good sleeping material.', new Date( '04/18/2013') ),
           new Blog('What\'s all this new object stuff (i.e THIS, prototype, etc...)', new Date('08/21/2008') )
        ];

        //show blog  //reveiw goal 4 for use of events
        var showBlog = function(e){

            var i = 0,//index
                blogText = "";//str

                //while i < blog length
                while( i < blog.length ){
                       blogText += blog[i].toHTML( i % 2 === 0);
                       blog[i].toString();//function call for above constructor toString
                       i++;

                    //if( i % 2 === 0){       //if statement for testing every other line for grey striping
                         //blogText += " <p style= 'background-color:#EEEEEE' > " ;   //creates the grey stripe for the background
                    //}else{
                         //blogText += "<p>" ; //no background-color
                     //};
                //create text to format the blog
                       //blogText +=  "<strong> " + (blog[i].date.getMonth() +1) +"/" +
                           //blog[i].date.getDate() + "/" +
                           //blog[i].date.getFullYear() + " </strong><br />" +
                          //blog[i].body + "</p>" ;//now check this in FF
                //comment out the original line for the text

                //blogText += "<strong>" + blog[i].date +"</strong><br />" + blog[i].body + "</p>" ;
                   //blogText += blog[i].toHTML( i % === 0 );
                   //i++;   //increment the i
                };          //end while loop
                                    //target the div blog --we want to put our blogText in thsi div "blog"
            document.getElementById("blog").innerHTML = blogText;
            //prevent default actions, controls bubbling in the DOM
            e.preventDefault();//add the prenvent default and return false before filling out the body of the code
            return false;

        };//end showBlog fn

        button.onclick = showBlog;//this click handler will show the blog on screen


})();  // end wrapper