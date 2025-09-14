//Greeting Section


var  Name = prompt("Enter your name:");
document.getElementById("hi").innerText = " Welcome to your Dashboard";
function changeName() {
  Name = prompt("Enter new name:");
  document.getElementById("hi").innerText = "Welcome to your Dashboard";
}

//Random Quote 
let quotes = [
                {text: "sucess is not final ,failure is not end "},
                {text: "Happiness depend upon overslves"},
                {text: "Do what you can, with what  you have, where are you"},
                {text: "failure is not last option here. if things are not failing you are not innovating engough"},
              ];
              function newQuotation() {
                let q = quotation[Math.floor(Math.random() * quotes.length)];
                document.getElementById("quotation").innerText=q.text;
              }

// Calculator


function calculate(operation) {
              let a = parseFloat(document.getElementById("num1").value);
              let b = parseFloat(document.getElementById("num2").value);
              let result;
              switch(operation) {
                case '+': result = a + b; break;
                case '-': result = a - b; break;
                case '*': result = a * b; break;
                case '/': result = b !== 0 ? a / b : "Error"; break;
              }
              document.getElementById("calcResult").innerText = "Result: " + result;
            }

// Number & String Playground 


            function numberMethods() {
              let n = parseFloat(document.getElementById("showNum").value);
              let out = `Sqrt: ${Math.sqrt(n)}, Floor: ${Math.floor(n)}, Random: ${Math.random()}`;
              document.getElementById("numOutput").innerText = out;
            }
            function stringMethods() {
              let txt = document.getElementById("showText").value;
              let out = `Upper: ${txt.toUpperCase()}, Length: ${txt.length}, Slice(0,3): ${txt.slice(0,3)}`;
              document.getElementById("textOutput").innerText = out;
            }

//  Date and  Time


function updateTime() {
              let now = new Date();
              document.getElementById("dateTime").innerText = now.toLocaleString();
              document.getElementById("footerTime").innerText = now.toLocaleTimeString();
            }
            setInterval(updateTime, 1000);

  //  Color Switcher 
            let colors = ["green", "pink", "yellow", "tomato", "gold" , "yellowgreen", "black"];
            function changeBackground() {
              let c = colors[Math.floor(Math.random() * colors.length)];
              document.body.style.background = c;
            }

//  Switch Case (Day of Week)


                let day;
                switch(new Date().getDay()) {
                  case 0: day = "Sunday"; break;
                  case 1: day = "Monday"; break;
                  case 2: day = "Tuesday"; break;
                  case 3: day = "Wednesday"; break;
                  case 4: day = "Thursday"; break;
                  case 5: day = "Friday"; break;
                  case 6: day = "Saturday"; break;
                }
                document.getElementById("dayOutput").innerText = "Today is " + day;

//  Loops Practice section


                let forArr = "", whileArr = "", doArr = "";
                for (let i=1; i<=50; i++) forArr += i + " ";
                let i=1;
                while (i<=50) { whileArr += i + " "; i++; }
                let j=1;
                do { doArr += j + " "; j++; } while (j<=50);
                document.getElementById("forLoop").innerText = forArr;
                document.getElementById("whileLoop").innerText = whileArr;
                document.getElementById("doWhileLoop").innerText = doArr;