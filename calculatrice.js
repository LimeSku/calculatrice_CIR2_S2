

class BaseCalculator{
    constructor(digitsName){
        this.obj = digitsName;
        this.sequence = [""];
    }

    addNumber(val){
        document.getElementsByName(this.obj)[0].value += val;
        this.sequence.push(document.getElementsByName(this.obj)[0].value);
        console.log(this.sequence)

    }

    calc(){
        let currentCalc = document.getElementsByName(this.obj)[0].value;
        document.getElementsByName(this.obj)[0].value = eval(currentCalc);
        this.sequence.push(document.getElementsByName(this.obj)[0].value);
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