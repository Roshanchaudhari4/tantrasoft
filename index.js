var a = `001            4.04                          4.7`;

var y = a.split(" ");
console.log(y);

var value = a.trim().split(/\s+/);

var serial_no = value[0];
var thickness = value[1];
var hardness = value[2];

console.log("Serial No:", serial_no,
"\nThickness:", thickness,
"\nHardness:", hardness);