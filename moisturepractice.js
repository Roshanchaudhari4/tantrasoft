var a = `-MOISTURE DETERMINATION-

Type               HS153
SNR(Drying Unit)
              B745961930
SNR(Terminal) B745961930
SW(Drying Unit)     1.40
SW(Terminal)        2.22

User Name      YBL_93259

Method Name     METHOD 1
Drying Prog     Standard
  Drying Temp    105 øC 
  Switch Off    5:00 min
CIPLA                   
KURKUMBH                
BATCH            KA92407
EQUIPMENT CODE      1561

Start Weight   2.592 g  
Total time      5:00 min
Dry Weight     2.574 g  

End Result    -0.69 -%MC
Note                    


Signature:

........................
Measurement end
        21.08.2019 12:33

---------- END ---------`



var lines = a.split("\n");         // next line la jail ani pratek line read krel
// console.log(lines) 



var startWeight = "";       // variable banvle
var Totaltime = "";
var DryWeight = "";
var EndResult = "";

for(var i = 0; i < lines.length ; i++){        // jar line ch length i peksha mothi asel tar i++ 

 
    // let result = a.includes("Start Weight");
    // console.log(result)

    if(lines[i].includes("Start Weight")){    // includes tevhach use hote jevha aaplyla specific point specific words present ahe ka nahi bagayche asel jar asel t true nahit false
    
         startWeight = lines[i].split("start Weight:")
         console.log(startWeight[0].trim(""), "hhh")
        
        // yete aapan sarvat pahile start weight print kru na pahile te kasa rahil space 2.592 g space mang split kelyanatar to array madhe convert hoil jas ki 
        // "" "2.592" "" "" mang tyanantar trim krun to space remove hoil ani final op startweight madhe only 2.592 g print hoil
    }
    
    console.log("start Weight:",startWeight)
} 