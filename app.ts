import { differenceInSeconds, interval } from "date-fns";
import inquirer from "inquirer";

const res = await inquirer.prompt([
    {
        type:"number",
        name:"userinput",
        message:"please enter  tha amount of second",
        validate:(input)=>{
          if(isNaN(input)){
            return "please enter valid number"
          }else if(input < 0){
            return "seconeds must be in 60";
          }else{
            return true;
          }
        }
    }
]);
function startTime(val:number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + 1)
    const intervalTime = new Date(intTime);
      setInterval(()=>{
        const currentTime =new Date()
        const timeDiff = differenceInSeconds(intervalTime,currentTime)
        if(timeDiff <= 0){
          console.log("Timer has expired");
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2,"0")} : ${sec.toString().padStart(2,"0")}`);
      },1000);
    }

    startTime(res.input);



    
    
