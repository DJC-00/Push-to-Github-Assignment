function parensValid(str) {
    var pCount=[0,0];
    for (var i = 0; i < str.length; i++){
        if (str[i] == "("){
            pCount[0] += 1;
        }
        else if (str[i] == ")"){
            pCount[1] += 1;
            if (pCount[1] > pCount[0]){
                return false;
            }
        }
    }
    if (parens[0] == parens[1]){
        return true;
    }
    else{
        return false;
    }

}




function bracesValid(str) {
    var braceCount = [[0,0],[0,0],[0,0]];
    var checkArr = [];
    for (var i = 0; i < str.length; i++){
        if (str[i] == "("){                 //if (: count open parens, push str[i] to checkArr
            braceCount[0][0] += 1;
            checkArr.push(str[i])
        }
        else if (str[i] == "["){            //if [: count open parens, push str[i] to checkArr
            braceCount[1][0] += 1;
            checkArr.push(str[i])
        }
        else if (str[i] == "{"){            //if {: count open parens, push str[i] to checkArr
            braceCount[2][0] += 1;
            checkArr.push(str[i])
        }
        else if (str[i] == ")"){            //if ): count open parens..
            braceCount[0][1] += 1
            if (braceCount[0][1] > braceCount[0][0]){       //Check if cosing parens comes before opening parens, return false
                console.log("Closing Parens found without matching open Parens")
                return false;
                }
            if (checkArr[checkArr.length-1] == "("){        //if last element of checkArr is closing parens, pop last value from checkArr
                checkArr.pop()
                }
            else{
                console.log("Parens not properly aligned")  //Otherwise, return false because of improper alignment
                return false;
                }
            }
        
        else if (str[i] == "]"){
            braceCount[1][1] += 1
            if (braceCount[1][1] > braceCount[1][0]){       //Check if cosing bracket comes before opening parens, return false
                console.log("Closing Bracket found without matching open Bracket")
                return false;
                }
            if (checkArr[checkArr.length-1] == "["){        //if last element of checkArr is closing bracket, pop last value from checkArr
                checkArr.pop()
                }
            else{
                console.log("Bracket not properly aligned") //Otherwise, return false because of improper alignment
                return false;
                }
            }
        
        else if (str[i] == "}"){
            braceCount[2][1] += 1
            if (braceCount[2][1] > braceCount[2][0]){       //Check if cosing bracket comes before opening parens, return false
                console.log("Closing Curly found without matching open Bracket")
                return false;
                }
            if (checkArr[checkArr.length-1] == "{"){        //if last element of checkArr is closing bracket, pop last value from checkArr
                checkArr.pop()
                }
            else{
                console.log("Curly not properly aligned")   //Otherwise, return false because of improper alignment
                return false;
                }
            }
    }

    for (var i = 0; i<braceCount.length; i++){
        if (braceCount[i][0]!= braceCount[i][1] ){
            console.log("Uneven number of braces")
            return false;
        }
    }

    return true;  
}

console.log("-----------------------------------");
console.log(bracesValid("({[({})]})"));
console.log("-----------------------------------");
console.log(bracesValid("d(i{a}l[t]o)n{e!"));
console.log("-----------------------------------");
console.log(bracesValid("{{[a]}}(){bcd}{()}"));
console.log("-----------------------------------");
console.log(bracesValid("{(})")); // false
console.log("-----------------------------------");
console.log(bracesValid("y(3(p)p(3)r)s"));
console.log("-----------------------------------");
console.log(bracesValid("n(0(p)3"));
console.log("-----------------------------------");
console.log(bracesValid("n)0(t(o)k"));
console.log("-----------------------------------");
console.log(bracesValid("((()))"));
console.log("-----------------------------------");
console.log(bracesValid("()()()()()()("));