function calculate() {
    let input = document.getElementById("input").value
    let binary = ""
    let binaryArray = []
    let output = ""
    while(input > 0) {
	    if(input % 2 == 0) {
		    binary = "0" + binary
            input = input / 2
	    } else if(input % 2 == 1) {
		    binary = "1" + binary
            input = Math.floor(input / 2)
	    }
    }
    binaryArray = binary.split("")
    while(binaryArray.length < 9) {
        binaryArray.splice(0, 0, "0")
    }
    for(let i = 0; i < binaryArray.length; i++) {
        if(binaryArray[i] == 1) {
            document.getElementById("dip" + (i + 1)).style.backgroundColor = "var(--highlight-color)"
            document.getElementById("dip" + (i + 1)).style.transform = "translate(0.25vw, 0.25vw)"
            document.getElementById("dip" + (i + 1) + "container").style.backgroundColor = "var(--on-color)"
        } else if(binaryArray[i] == 0) {
            document.getElementById("dip" + (i + 1)).style.backgroundColor = "var(--lighter-secondary-bg-color)"
            document.getElementById("dip" + (i + 1)).style.transform = "translate(0.25vw, 22vw)"
            document.getElementById("dip" + (i + 1) + "container").style.backgroundColor = "var(--off-color)"
        }
    }
}