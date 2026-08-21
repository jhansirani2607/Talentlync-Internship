function calculator()
{
    const a=Number(document.getElementById("num1").value);
    const b=Number(document.getElementById("num2").value);
    const operation=document.getElementById("operation").value;
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