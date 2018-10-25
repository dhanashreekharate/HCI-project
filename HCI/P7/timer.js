
    var c = 0
    var t
    var ti
    var num =[5,4,3,2,1]
    var tasktext = ["Breathe in","Breathe in","Breathe in","Breathe in","Breathe in",
    "Hold","Hold","Hold","Hold","Hold","Breathe out","Breathe out","Breathe out","Breathe out","Breathe out",]
    var i = 0
    var j = 0
    var elem = document.getElementById("start")
    var cout = document.getElementById("Counter")
    var task = document.getElementById("Task")
    function timedCount() {
        document.getElementById('time-elapsed').value = c
        c = c + 1
        t = setTimeout("timedCount()", 1000)
    }
 
    function stopCount() {
        clearTimeout(t)
    }
//--------------------------------------------------------


function CountDown() {
        
            if (i == 5){i = 0}
            cout.innerHTML = num[i++]
            t = setTimeout("CountDown()", 1000)
            ti = setTimeout("ChangeTask()",1000)   
        
    }

function switchPlay(){
    if(elem.innerText== 'START')
        {
            elem.innerText = 'PAUSE'
            CountDown()
        }
    else
    {
        elem.innerText = 'START'
        clearTimeout(t)
     //   clearTimeout(ti)
    }
}

function ChangeTask(){
    if(0 <= j < 15)
        {
            task.innerHTML = tasktext[++j] 
            if(j == 15)
            {
                j = 0
                task.innerHTML = tasktext[j]
            }
        }      
           
}

 function reset(){
        self.location = 'timer.html';
}

 function backtoindex(){
        self.location = 'timerindex.html';
}