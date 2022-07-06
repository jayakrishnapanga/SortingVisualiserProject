let quick_sort_btn=document.getElementById("quick_sort_btn");
//let bars=document.getElementsByClassName("bar");
async function partition(arr,low,high,len)
{
    let pivot=arr[high];
    bars[high].style.backgroundColor="red";
    let i=low,j=low;
    while(i<=high)
    {
        bars[i].style.backgroundColor="yellow";
        await sleep(delay);
        if(arr[i]>pivot)
        {
            bars[i].style.backgroundColor='pink';
            i++;
        }
        else if(arr[i]<=pivot)
        {
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            bars[i].style.height=arr[i]*hf+"px";
            bars[j].style.height=arr[j]*hf+"px";
            bars[i].style.backgroundColor="orange";
            bars[j].style.backgroundColor='orange';
            i++;
            j++;
            await sleep(delay);
        }
    }
    bars[j-1].style.backgroundColor="green";
    await sleep(delay);
    let fl=1;
    for(let i=0;i<arr.length;i++)
    {
        if(bars[i].style.backgroundColor != 'green')
        {
            fl=0;
            bars[i].style.backgroundColor="aqua";
        }
    }
    return j-1;
}
 async function quicksort(arr,low,high,len)
{
   if(low>=high)
   {
       if(low>=0 && low<arr.length && high>=0 && high<arr.length)
       {
           bars[low].style.backgroundColor='green';
           bars[high].style.backgroundColor='green';
       }
       return;
   }
   let pivot_index= await partition(arr,low,high,len);
   await quicksort(arr,low,pivot_index-1,len);
   await quicksort(arr,pivot_index,high,len);
}
 quick_sort_btn.addEventListener("click",async function(){
    quick_sort_btn.style.backgroundColor="aqua";
    const audio=new Audio('Voices/QuickSortVoice.mp3');
    audio.play(); 
    disableSortBtn();
    disableSize();
    disableRandomArray();
    await quicksort(unsorted_array,0,unsorted_array.length-1,unsorted_array.length);
    quick_sort_btn.style.backgroundColor="#677685";
    await sleep(10);
    sortingCompleted();
    enableSortBtn();
    enableSize();
    enableRandomArray();
});