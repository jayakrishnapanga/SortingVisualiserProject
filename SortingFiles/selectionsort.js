async function selectionsort(arr)
{
    //let bars=document.getElementsByClassName("bar");
    for(let i=0;i<arr.length-1;i++)
    {
        let min=i;
        bars[i].style.backgroundColor='blue';
        await sleep(delay);
        for(let j=i+1;j<arr.length;j++)
        {
            bars[j].style.backgroundColor='red';
            if(arr[min]>arr[j]){
              bars[min].style.backgroundColor='aqua';  
                min=j;
            }
            else{
                bars[j].style.backgroundColor='aqua';
            }   
        }
        await sleep(delay);
        let temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
        bars[min].style.height=arr[min]*hf+"px";
        bars[min].style.backgroundColor='aqua';
        bars[i].style.height=arr[i]*hf+"px";
        bars[i].style.backgroundColor='green';
    }
    bars[arr.length-1].style.backgroundColor="green";
    //return arr;
}
selection_sort_btn.addEventListener("click",async function(){
    selection_sort_btn.style.backgroundColor="aqua";
    const audio=new Audio('Voices/SelectionSortVoice.mp3');
    audio.play(); 
    disableSortBtn();
    disableSize();
    disableRandomArray();
   await selectionsort(unsorted_array);
    selection_sort_btn.style.backgroundColor="#677685";
    await sleep(10);
    sortingCompleted();
    enableSortBtn();
    enableSize();
    enableRandomArray();
});
