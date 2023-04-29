

class BaseCalculator{
    constructor(digitsName){
        this.obj = digitsName;
        this.sequence = [""];
    }


    request(time){
        let url = 'http://localhost:3000/success'
        let dataraw = {
            timeTakenMs:time
        };
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");

        xhttp.send(JSON.stringify(dataraw));
        
        xhttp.onload = function() {
            console.log(this.responseText);
            };
    }

    addNumber(val){
        document.getElementsByName(this.obj)[0].value += val;
        this.sequence.push(document.getElementsByName(this.obj)[0].value);
        console.log(this.sequence)

    }

    calc(){
        const d = new Date();
        let t1 = d.getTime();
        let currentCalc = document.getElementsByName(this.obj)[0].value;
        document.getElementsByName(this.obj)[0].value = eval(currentCalc);
        this.sequence.push(document.getElementsByName(this.obj)[0].value);
        const d2 = new Date();
        let ftime = d2.getTime()-t1;
        this.request(ftime);
    }

    clearDigits(){
        document.getElementsByName(this.obj)[0].value = "";
        this.sequence.push(document.getElementsByName(this.obj)[0].value);
    }

    back(){
        if(this.sequence.length >= 1){
            this.sequence.pop();
            document.getElementsByName(this.obj)[0].value = this.sequence.slice(-1);
        }
    }
}