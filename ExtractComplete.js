var a = `Electrolab India Pvt. Ltd.                                    Date: 25/Aug/2023

Electrolab Hardness Tester                                    Time: 14:31:57   

                                                                                

                                                                                

                                    Test Report                                 

________________________________________________________________________________

                                                                                

Instrument details:                                                             

                                                                                

ID          :EBT-2PL                             Company Name :Electrolab      

Serial No.  :1409119                             Model No.    :EBT2PL          

IP address  :                                    Firmware ver.:v1.8.4 

________________________________________________________________________________

                                                                                

Product Details:                                                                

                                                                                

Name        :The default prod                    Batch ID     :                

Press ID    :                                    Container No.:                

Operator    :                                    Comment      :Test Sample ok  

________________________________________________________________________________

                                                                                

Test Detail :                                                                   

                                                                                

Test ID     :2308254641                          Hrd. Method  :Constant Speed  

Start Time  :25/08/23 14:15                      End Time     :25/08/23 14:25  

Cnst. Speed :03.00 mm/sec                        Backoff Dis. :12.00 mm        

Mode        :Auto                                Delay        :01 sec          

Shape       :Oblong                                                            

________________________________________________________________________________

                                                                                

Method Detail:                                                                  

                                                                                

Thickness Sample Size  : 005                                                   

Hardness Sample Size   : 005                                                   

________________________________________________________________________________

                                                                                

Measurement Values:                  

                                                                                

Parameter                         Thickness                         Hardness    

Unit                                (mm)                              (Kp)     

001                                4.04                               4.7     

002                                3.95                               5.4     

003                                4.25                               3.8     

004                                4.16                               4.0     

005                                3.81                               5.1     

________________________________________________________________________________

                                                                                

Statistics:                                                                     

                                                                                

               Mean                         Min                         Max     

T:            5.53                         5.51                        5.56    

H:            17.8                         16.8                        18.8    

________________________________________________________________________________

                                                                                

Test Status:                                                                    

                                                                                

Status              Test Completed                                             

________________________________________________________________________________

                                                                                

                                                                                

Remark                 : __________________________________                     

                                                                                

Operator's Signature   : __________________________________       Date:         

                                                                                

Supervisor's Signature : __________________________________       Date:         

`


var start = a.indexOf("Measurement Values");
var end = a.indexOf("Statistics");
var measurementSection = a.substring(start,end);

var lines = measurementSection.split("\n"); // \n mahnje aapan next line la jau shakto 

for(var i = 0; i < lines.length; i++){    // jevha paryant i ha lahan ahe total number of lines of string tevha paryant print krt jaycha
  var line = lines[i].trim();   // trim he start ani end cha whitespace remove krel
  


if(line.length > 0 && !isNaN (line.substring(0,3))){ // i he 0 peksha mothe pahije ani nan nako mahnje only number pahine text nako
  var y = line.split(" ").filter(function(newarray){ // y he variable name ahe split kelyananar jo array tayar hoto to y variable madhe store hoil ex = {"001", " ", " ", "4.07"} asa array tayar hoil
    return newarray !== "";                       // filter madhe aapan newarray nvacha variable getla to pratek element var challel jithe empty string milel tith remove krel
  });
  
console.log("serial_no:", y[0]);
console.log("Thickness", y[1]);
console.log("Hardness:", y[2]);
console.log("...........................");
}
}
// && !isNaN
// console.log(!isNaN(line));


// var y = line.split(" ").filter((newarray)=>

