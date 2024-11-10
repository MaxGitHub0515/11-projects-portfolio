


//Instructions to understand classes etc

// Error is a built-in Js class
// CustomError inherits properties and behaviors of standard errors
// like a message and stack trace.
// .message, .name, .stack - methods

// constructor(message, statusCode):
// constructor function is automatically called when
//a new instance of CustomAPIError is created.
// To create a new instance of CustomAPIError, you use the new keyword:

// Understanding Error class
// const error = new Error("Something went wrong");
//console.log(error.message);  // Output: "Something went wrong"
/*

// Can we create custom properties apart from using built-in ones?
// YES
// In addition to the built-in name, message,
 and stack properties, you can add 
any custom properties you want to your custom error class.
like this.statusCode = statusCode

What Happens When You Call super(message)?

When you extend the Error class in a custom error class and 
call super(message), it automatically:

    Sets the message property on the error.
    Sets the name property to the name of the error class (CustomAPIError, in this case).
    Sets the stack property to the stack trace.
*/
// understanding  return new CustomAPIError(msg, statusCode);

// return: This sends the newly created error instance back to 
// the function caller. Without return, the function would not provide
//  any value, 
// and the caller wouldn't be able to access the error object.


// Understanding Error Handler

/*
Why Does This Work?

In JavaScript, every class has a prototype property. When you create a new instance of a class, the instance has a special internal property called [[Prototype]] that points to the class’s prototype.

For example, consider the following hierarchy:

    CustomAPIError extends Error, so CustomAPIError.prototype is linked to Error.prototype.
    Every instance of CustomAPIError (like err in the example above) will have CustomAPIError.prototype in its prototype chain.
    This means that err instanceof CustomAPIError will return true if err was created by CustomAPIError, because the err object has CustomAPIError.prototype in its prototype chain.

*/