let fs = require('fs')
var readlineSync = require('readline-sync');
let arg = process.argv
let ram = new Array()

let progText = fs.readFileSync(arg[2]).toString();
ram = progText.split(/\s+/);

function getIndex(n) {
        let startIndex = 0;
        let index = 0;
        while (true) {
            index = ram.indexOf(n, startIndex);
            if (ram[index - 1] == 'label')
                break;
            startIndex = index + 1;
        }
        return index;
    }

let k;
let i = 0;

while (ram[i] != 'exit') {
    switch (ram[i]) {
        case 'input' :
            console.log('enter a number: ')
            ram[ram[i + 1]] = parseInt(readlineSync.prompt())
            i += 2
            break
        case 'output' :
            console.log(ram[ram[i + 1]])
            i += 2
            break
        case 'factorial' :
            console.log('factorial: ')
            i+=1
            break
        case 'gcd' :
            console.log('greatest common divisor: ')
            i+=1
            break
        case 'add' :
            ram[ram[i + 3]] = parseInt(ram[ram[i + 1]]) + parseInt(ram[ram[i + 2]])
            i += 4
            break
		case 'sub' :
            ram[ram[i + 3]] = parseInt(ram[ram[i + 1]]) - parseInt(ram[ram[i + 2]])
            i += 4
            break
        case 'mul' :
            ram[ram[i + 3]] = parseInt(ram[ram[i + 1]]) * parseInt(ram[ram[i + 2]])
            i += 4
            break
        case 'install' :
            ram[ram[i + 1]] = parseInt(ram[i + 2])
            i += 3
            break
        case 'label' :
            i += 2;
            break
        case 'compare' :
            let a = ram[ram[i + 1]] - ram[ram[i + 2]]
            if (a > 0)
                k = 1;
            else if (a < 0)
                k = -1;
            else
                k = 0;
            i += 3
            break
        case 'equals' :
            if (k == 0) {
                i = getIndex(ram[i + 1]) + 1
            } else {
                i += 2
            }
            break
        case 'less' :
            if (k == -1) {
                i = getIndex(ram[i + 1]) + 1
            } else {
                i += 2
            }
            break
        case 'jump' :
            i = getIndex(ram[i + 1]) + 1
            break
        default :
			i++;
			break;
    }
}
