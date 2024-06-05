// 1. Declare 3 variables in one statement.
var name, age, email;

// 2. Declare 5 legal & 5 illegal variable names

//          ILLEGAL VARIABLES                  //
// no1: var my name; (Should not contain space.)
// no2: var class; (class Should not use JavaScript keywords.)
// no3: var 2abc; (2abc Should not start with a number.)
// no4: var @email; (Should not start with special characters.)
// no5: var name#; (Should not contain special characters except $ and _)

//          LEGAL VARIABLES                  //
// no1: var test: (A variable name can contain only letters small and capital.)
// no2: var _test: (A variable name can contain only dollar signs, and underscores.)
// no3: testValue: (By convention, JavaScript variable names are written in camelCase.)
// no4: test_values: (By convention, JavaScript variable names are written in snakeCase.)
// no5: test123: (A number should be after letters)


// 3. Display this in your browser
document.write("<h1>“Rules for naming JS variables </h1>");
document.write("1:Variable names can only contain  letters,underscore and dollar-sign <br>");
document.write("2:Variables must begin with a dollar-sign, underscore or letters . For example $name, _name or name <br>");
document.write("3:Variable names are case example:(age, Age and AGE are three different variables) <br>");
document.write("4:Variable names should not be JS keyword");