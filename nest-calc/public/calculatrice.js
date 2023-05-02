

class BaseCalculator{
    constructor(digitsName){
        this.obj = digitsName;
        this.sequence = [""];
        this.timeTaken = Date.now();
    }



    request(dataraw,url){
            
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
    }

    calc(){
        let currentCalc = document.getElementsByName(this.obj)[0].value;

        try {
            // eval(code); 
            document.getElementsByName(this.obj)[0].value = eval(currentCalc);
            this.sequence.push(document.getElementsByName(this.obj)[0].value);
            let ftime = Date.now()-this.timeTaken;
            this.timeTaken = Date.now();
            console.log(ftime);
            let dataraw = {
                timeTakenMs:ftime,
                created_at:new Date().toISOString().slice(0, 19).replace('T', ' ')
            };

            this.request(ftime,'http://localhost:3000/success');

        } catch (e) {
            if (e instanceof SyntaxError) {
                alert(e.message);

                let dataraw = {
                    created_at:new Date().toISOString().slice(0, 19).replace('T', ' ')
                };
                this.request(dataraw,'http://localhost:3000/errors');

            }
        }
        
        
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