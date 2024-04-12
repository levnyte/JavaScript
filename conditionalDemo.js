/*
    Use relational operators to check for conditions
    > - greater than
    < - less than
    >= - greater than or equal to
    <= - less than or equal to
    = - (not used for comparison - assignment operator)
    ==  - is equal to (ignores data type -> '1' == 1 -> True)
    === - is equal to (includes the data type -> '1' === 1 -> False)
    != - is not equal
    ! - logical not
    && - logical and (inclusive comparison)
    || - logical or (optional comparison)
*/

// single alternative decision - if statement
let a = 1;
let b = 2;
if (a < b)
{
    console.log(`${a} is less than ${b}`);
}

// dual alternative decision - if / else statement
let c = 3;
let d = 4;
if (c == d)
{
    console.log(`${c} is equal to ${d}`);
}
else
{
    console.log(`${c} does not equal ${d}`);
}

// multiple alternatives - version 1 - if / else if
if(a == 1)
{
    console.log("a = 1");
}
else if(a == 2)
{
    console.log("a = 2");
}
else
{
    console.log("a = 3");
}

// version 2 - switch statements 
switch(a)
{
    case 1:
        console.log("a = 1");
        break;
    case 2:
        console.log("a = 2");
        break;
    default:
        console.log("a = 3");
        break;
}

