function calculator()
{
    const a=Number(document.getElementById("num1").value);
    const b=Number(document.getElementById("num2").value);
    const operation=document.getElementById("operation").value;

    let output = 0;
    switch(operation){
        case "add":
            output = add(a , b);
            break;
        case "sub":
            output = sub(a,b);
            break;
        case "mul":
            output = mul(a,b);
            break;
        case "div":
            output = div(a,b);
            break;
        
    }
    document.getElementById('output').innerHTML = "The " + operation + " of " + a + " and " + b + " is " + output;

    
    if(operation=='add'){
        document.getElementById('res').textContent=add(a,b);
        return;
    }
    else if(operation=='sub'){
        document.getElementById('res').textContent=sub(a,b);
        return;
    }    
    else if(operation=='mul'){
        document.getElementById('res').textContent=mul(a,b);
        return;
    }    
    else if(operation=='div'){
        document.getElementById('res').textContent=div(a,b);
        return;
    }    
}
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}