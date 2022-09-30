const calculateTemp=()=>
{  
    const Numtemp=document.getElementById('temp').value;
// console.log(Numtemp);

const tempSelected = document.getElementById('temp_diff');
const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

console.log(valueTemp);

const celTofah=(celvalue)=>
{
    let Fahrenheit=Math.round((celvalue*9/5)+32)
    return Fahrenheit; 
}
const fahTocel=(fahvalue)=>
{
    let Celsius=Math.round((fahvalue-32)*0.5556)
    return Celsius; 
}
let result;

if(valueTemp=='cel')
{
    result=celTofah(Numtemp);
    document.getElementById('resultContainer').innerHTML=`${result} Fahrenheit`;
}
else
{
    result=fahTocel(Numtemp);
    document.getElementById('resultContainer').innerHTML=`${result} Celsius`;
}

} 