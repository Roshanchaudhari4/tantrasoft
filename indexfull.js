var a = `001                      4.04                                      4.7
        002                      3.95                                      5.4     
        003                      4.25                                      3.8     
        004                      4.16                                      4.0     
        005                      3.81                                      5.1     
`;

var y = a.split(" ");
console.log(y);

var a = a.trim().split("\n")
for(var i = 0; i < a.length; i++)
{
  
var value = a[i].trim().split(/\s+/);


var serial_no = value[0];
var thickness = value[1];
var hardness = value[2];

console.log("Serial No:", serial_no,
"\nThickness:", thickness,
"\nHardness:", hardness,
 "\n.............");
}

