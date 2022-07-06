async function insertionsort(arr)
   {
      //let bars=document.getElementsByClassName("bar");
       for(let i=1;i<arr.length;i++)
       {
           bars[i].style.backgroundColor="blue";
           await sleep(delay);
           for(let j=i-1;j>=0;j--)
           {
              if(arr[j]>arr[j+1])
              {
                  let temp=arr[j];
                  arr[j]=arr[j+1];
                  arr[j+1]=temp;
                  bars[j].style.backgroundColor="blue";
                  bars[j].style.height=arr[j]*hf+"px";
                  bars[j+1].style.height=arr[j+1]*hf+"px";
                  await sleep(delay);
                  for(let k=i;k>=0;k--)
                  {
                      bars[k].style.backgroundColor='green';
                  }
              }
              else{
                  break;
              }
                
           }
           bars[i].style.backgroundColor="green";
       }
       return arr;
   }
   insertion_sort_btn.addEventListener("click",async function(){
       insertion_sort_btn.style.backgroundColor="aqua";
       const audio=new Audio('Voices/InsertionSortVoice.mp3');
       audio.play(); 
       disableSortBtn();
       disableSize();
       disableRandomArray();
       await insertionsort(unsorted_array);
       insertion_sort_btn.style.backgroundColor="#677685";
       await sleep(10);
       sortingCompleted();
       enableSortBtn();
       enableSize();
       enableRandomArray();
   });