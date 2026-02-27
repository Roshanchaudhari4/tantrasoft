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



var lines = a.split("\n");         

var Finalresult = [];

for(var i = 0; i < lines.length ; i++){
    
    var line = lines[i].trim();
    
    if(line.includes("Start Weight")){    
        var startWeight = line.split("Start Weight")[1].trim();
        // console.log(startWeight[1].trim())
        Finalresult.push({startWeight : startWeight})
        
    }
    
    if(line.includes("Total time")){    
         var Totaltime = line.split("Total time")[1].trim();
        // console.log(Totaltime[1].trim())
        Finalresult.push({Totaltime : Totaltime})
    }
    
    if(line.includes("Dry Weight")){    
         var DryWeight = line.split("Dry Weight")[1].trim();
        // console.log(DryWeight[1].trim())
        Finalresult.push({DryWeight : DryWeight})
    }
    
    if(line.includes("End Result")){    
         var EndResult = line.split("End Result")[1].trim();
        // console.log(EndResult[1].trim())
        Finalresult.push({EndResult : EndResult})
    }
} 
console.log(Finalresult)