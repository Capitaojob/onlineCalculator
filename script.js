"use strict"

let buttons = document.querySelectorAll(".buttonElement")

// special elements delete last char

const calcVisor = document.querySelector(".visor");

buttons.forEach((button) => {
    if (button.classList.contains("delete") || button.classList.contains("C") || button.classList.contains("plusMinus") || button.classList.contains("division") || button.classList.contains("times") || button.classList.contains("equals") || button.classList.contains("percent")) {
        
        // DELETE
        if (button.classList.contains("delete")) {
            button.addEventListener("click", () => {
                let str = calcVisor.value
                if (str.length > 0 ) {
                    str = str.slice(0, -1);
                    calcVisor.value = str
                }
            })
        }

        // CLEAR
        if (button.classList.contains("C")) {
            button.addEventListener("click", () => {
                
            calcVisor.value = ''
            })
        }

        // PLUS MINUS +/-
        if (button.classList.contains("plusMinus")) {
            button.addEventListener("click", () => {
                if (!isNaN(calcVisor.value.slice(-1))) {

                    let lastNumber = calcVisor.value.match(/\d+$/)[0]
                    let newCalc = calcVisor.value.substring(0, (calcVisor.value.length - lastNumber.length))

                    let checkDot = newCalc.slice(-1)
                    if (checkDot == ".") {
                        newCalc = newCalc.substring(0, newCalc.length - 1)
                        var newLastNumber = newCalc.match(/\d+$/)[0]
                        lastNumber = newLastNumber + "." + lastNumber

                        newCalc = newCalc.substring(0, (newCalc.length - newLastNumber.length))
                    }

                    let checkInvert = newCalc.slice(-2)
                    if (checkInvert == "(-") {
                        newCalc = newCalc.substring(0, newCalc.length-2) + lastNumber
                    } 
                    
                    else {
                        newCalc += "(-" + lastNumber + ")"
                    }

                    calcVisor.value = newCalc

                } else if (calcVisor.value.slice(-1) === ")") {

                    let newCalcVisor = calcVisor.value.substring(0, calcVisor.value.length - 1)
                    let lastNumber = newCalcVisor.match(/\d+$/)[0]
                    let newCalc = newCalcVisor.substring(0, (newCalcVisor.length - lastNumber.length))

                    let checkDot = newCalc.slice(-1)
                    if (checkDot == ".") {
                        newCalc = newCalc.substring(0, newCalc.length - 1)
                        var newLastNumber = newCalc.match(/\d+$/)[0]
                        lastNumber = newLastNumber + "." + lastNumber

                        newCalc = newCalc.substring(0, (newCalc.length - newLastNumber.length))
                    }

                    if (newCalc.slice(-2) == "(-") {
                        calcVisor.value = newCalc.substring(0, newCalc.length-2) + lastNumber
                    } else {
                        calcVisor.value = newCalc + "-" + lastNumber + ")"
                    }

                }
            })
        }

        // DIVISION /
        if (button.classList.contains("division")) {
            button.addEventListener("click", () => {
                calcVisor.value += "/"
            })
        }

        // TIMES x *
        if (button.classList.contains("times")) {
            button.addEventListener("click", () => {
                calcVisor.value += "*"
            })
        }
        
        // PERCENT %
        if (button.classList.contains("percent")) {
            button.addEventListener("click", () => {
                calcVisor.value += "/100"
            })
        }

        // EQUALS =
        if (button.classList.contains("equals")) {
            button.addEventListener("click", () => {
                if (calcVisor.value == "69") {
                    window.open("https://www.xvideos.com/")
                }
                calcVisor.value = eval(calcVisor.value)
            })
        }        


    } else {
        button.addEventListener("click", () => {
            calcVisor.value += button.innerHTML
        })
    }
})

// COLOR CHANGE

let colorButton = document.querySelector(".colorBtn")
let root = document.querySelector(":root")

colorButton.addEventListener("click", () => {
    if (colorButton.classList.contains("pink")) {
        colorButton.classList.remove("pink")
        colorButton.classList.add("dark")

        root.style.setProperty('--bgColor', 'rgb(92, 35, 126)')
        root.style.setProperty('--calcBack','#444444')
        root.style.setProperty('--calcBorder','#2e2e2e')

        root.style.setProperty('--btnColor','rgba(255,255,255,0.3)')
        root.style.setProperty('--charBtnColor','rgba(130, 210, 206, 0.2)')
        root.style.setProperty('--specialTextColor','#9b0000')
        root.style.setProperty('--specialBgColor','rgba(50, 197, 190, 0.5)')

        root.style.setProperty('--btn','#c4c4c4')

    } else if (colorButton.classList.contains("dark")) {
        colorButton.classList.remove("dark")
        colorButton.classList.add("white")

        root.style.setProperty('--bgColor', 'rgb(112, 112, 112)')
        root.style.setProperty('--calcBack','#c4c4c4')
        root.style.setProperty('--calcBorder','#a3a3a3')

        root.style.setProperty('--btnColor','rgba(255, 255, 255, 0.3)')
        root.style.setProperty('--charBtnColor','rgba(130, 210, 206, 0.2)')
        root.style.setProperty('--specialTextColor','#e2e2e2')
        root.style.setProperty('--specialBgColor','rgba(140, 0, 255, 0.5)')

        root.style.setProperty('--btn','#a592b3')

    } else if (colorButton.classList.contains("white")) {
        colorButton.classList.remove("white")
        colorButton.classList.add("pink")

        root.style.setProperty('--bgColor', 'rgb(40, 81, 83)')
        root.style.setProperty('--calcBack','#a592b3')
        root.style.setProperty('--calcBorder','#756880')

        root.style.setProperty('--btnColor','rgba(255,255,255,0.3)')
        root.style.setProperty('--charBtnColor','rgba(130, 210, 206, 0.2)')
        root.style.setProperty('--specialTextColor','#c759a9')
        root.style.setProperty('--specialBgColor','rgba(130, 210, 206, 0.5)')

        root.style.setProperty('--btn','#444444')
    }
})