var num=Math.floor(Math.random()*101);
var count=0;

function findnum()
{
    var gu_num=parseInt(document.getElementById("n1").value);
    count+=1;
    if(gu_num==num)
    {
        document.getElementById("result").textContent="Congratulations!!!";
    }
    else if(gu_num>num)
    {
        document.getElementById("result").textContent="try with smaller number";
    }
    else
    {
        document.getElementById("result").textContent="try with greater number";
    }
    document.getElementById("count").textContent=count;
}