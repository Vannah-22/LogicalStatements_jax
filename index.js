let hour = 19;
let isWeekend = true;
if (hour < 7 || hour > 23 || isWeekend); {
    document.write ("I'm sleeping in today")
}

let rain = true;
let snow = false;
let sunny = true;

if (rain === true || snow === false && sunny === true) {
    document.write("it's okay to go outside");
}

// TRUTHY
let money = "zero";
let isBroke = "YES";
let nameSpace = "test";
document.write( money || isBroke || nameSpace || "What??" );
Output = "What??";

// SHORT CIRCUIT
let x = 0;
x ===0 || document.write("is true");
false || document.write("not true")