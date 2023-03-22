const arr = [];


function change(arr, n)
{

    let flag = true;
 
    for(let i = 0; i <= n - 2; i++)
    {
         
        
        if (flag)
        {
             
            if (arr[i] > arr[i + 1])
               { var temp1 = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp1;}
        }
         
        
        else
        {
             
            if (arr[i] < arr[i + 1])
               {  var temp2 = arr[i];
                 arr[i] = arr[i + 1];
                 arr[i + 1] = temp2;}
        }
         
        flag = !flag;
    }
}


function fun()
{
    change(arr , arr.length);
    console.log(arr);
}

function add()
{
  const number = document.getElementById("input").value;
  arr.push(Number(number));
  document.getElementById("input").value ="";
}