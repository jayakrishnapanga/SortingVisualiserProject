async function bubblesort(arr)
  {    
      //let bars=document.getElementsByClassName("bar");
      for(let i=0;i<arr.length-1;i++)
      {
          for(let j=0;j<arr.length-i-1;j++)
          {
              if(arr[j]>arr[j+1])
              {
                  for(let k=0;k<arr.length;k++)
                  {
                      if(k!=j && k!=j+1 )
                      {
                          if(bars[k].style.backgroundColor != "green")
                          bars[k].style.backgroundColor="aqua";
                      }
                  }
                  let temp=arr[j+1];
                  arr[j+1]=arr[j];
                  arr[j]=temp;
                  bars[j].style.height=arr[j]*hf+"px";
                  bars[j].style.backgroundColor="yellow";
                  bars[j+1].style.height=arr[j+1]*hf+"px";
                  bars[j+1].style.backgroundColor="yellow";
                  await sleep(delay);
              }
          }
          bars[arr.length-1-i].style.backgroundColor="green";
          await sleep(delay);
      }
      bars[0].style.backgroundColor="green";
       return arr;
  }
  bubble_sort_btn.addEventListener("click",async function(){
     bubble_sort_btn.style.backgroundColor="aqua"; 
      const audio=new Audio('Voices/BubbleSortVoice.ogg');
      audio.play(); 
      disableSortBtn();
      disableSize();
      disableRandomArray();
      await bubblesort(unsorted_array);
      bubble_sort_btn.style.backgroundColor="#677685";
      await sleep(10);
      sortingCompleted();
      enableSortBtn();
      enableSize();
      enableRandomArray();
  });
  