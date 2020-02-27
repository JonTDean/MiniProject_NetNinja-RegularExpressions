
// Creates a ruleset for the character types allowed within the given name identifier
const ruleSet_signUp = {
    username:/^[a-zA-Z\d\.-]{8,20}$/, // allows lower and uppercase, numbers, ".", and "-" strings. Min. 8 Max. 20
    password:/^[a-zA-Z\d]{6,20}$/, // allows lower and uppercase, and numbers. Min. 6 Max. 20
    email:/^([a-z\d\.-]{1,64})@([a-z\d]{1,180})\.([a-z]{1,10})(\.[a-z]{1,10})?$/i //Creates this ruleset [1]@[2].[3] with an optional [4] ruleset after.
};

// Listens for input from the HTML input element. 
const listen_inputs = document.querySelectorAll('input');


//Grabs info from the function and assigns it a class
function classAssign(field, regex){ // Grabs arguments from listen_inputs
    if (regex.test(field.value)){   // Asks if regex returns true when comparing to the value of field.    
        field.className = "valid";      //  Gives the element an identifier of className and sets it to valid.
    }else{                              //  If the regex returns false when comparing the value of the field
        field.className = "invalid";    //  it gives the identifier className a value of invalid.
    }
}


//Event Listener, Grabs the input from the input field and returns the value to classAssign()
listen_inputs.forEach((input) => { //Retrieves the input using a function expression.
    input.addEventListener('keyup',(forms) =>{  //invokes addEventListener to listen for when a key ends its press step.
        classAssign(forms.target, ruleSet_signUp[forms.target.attributes.name.value]); // ** info below
    });
});

/*
** The classAssign() func is being returned two arguments. The first argument that is being returned
is the forms.target argument. 'forms' is the event that retrieves data based on when the keyup
event is triggered. After forms is triggered it sends in two parts of data. 
forms.target and ruleSet_signUp[forms.target.attributes.name.value]

forms.target: This takes the element that triggered the event and returns its value. In this case
it is triggered twice, a trigger for valid input and a trigger for invalid input.

ruleSet_signUp[forms.target.attributes.name.value]: This takes the constant ruleSet_signUp and declares
an array for the constant, targeting a specific element, which is compared to the objects given (name, email, and password).
By doing this it is sending back the specified ruleset and the specified element and comparing the two
values within the classAssign() function via regex.test(field.value).
*/

/* SITES USED:
https://www.javascripttutorial.net/es6/javascript-const/
https://stackoverflow.com/questions/24900875/whats-the-meaning-of-an-arrow-formed-from-equals-greater-than-in-javas
https://www.w3schools.com/jsref/jsref_foreach.asp
https://www.w3schools.com/jsref/jsref_regexp_test.asp
*/