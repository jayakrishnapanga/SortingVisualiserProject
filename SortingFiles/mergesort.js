let merge_sort_btn=document.getElementById("merge_sort_btn");

async function merge(unsorted_array,l,mid,r)
{
    let len1=mid-l+1;
    let len2=r-mid;
    console.log(len2);
    let left=new Array(len1);
    let right=new Array(len2);
    for(let i=0;i<len1;i++)
    {
        bars[l+i].style.backgroundColor="pink";
        //left[i]=bars[l+i].style.height;
        left[i]=unsorted_array[l+i];
    }
    for(let j=0;j<len2;j++)
    {
        bars[mid+1+j].style.backgroundColor="yellow";
        //right[i]=bars[mid+1+i].style.height;
        right[j]=unsorted_array[mid+1+j];
    }
    let i=0,j=0,k=l;
    while(i<len1 && j<len2)
    {
       await sleep(delay);
       if(left[i]<=right[j])
        {
           if(len1+len2==unsorted_array.length)
           {
             bars[k].style.backgroundColor="green";
           }
           else{
              bars[k].style.background="lightgreen";
           }
           unsorted_array[k]=left[i];
           bars[k].style.height=unsorted_array[k]*hf+"px";
           i++;
           k++;
        }
        else{
            if(len1+len2==unsorted_array.length)
           {
             bars[k].style.backgroundColor="green";
           }
           else{
              bars[k].style.background="lightgreen";
           }
           unsorted_array[k]=right[j];
           bars[k].style.height=unsorted_array[k]*hf+"px";
           j++;
           k++;
        }
    }
    while(i<len1)
    {
        await sleep(delay);
        if(len1+len2==unsorted_array.length)
           {
             bars[k].style.backgroundColor="green";
           }
           else{
              bars[k].style.background="lightgreen";
           }
           unsorted_array[k]=left[i];
           bars[k].style.height=unsorted_array[k]*hf+"px";
           i++;
           k++;
    }
    while(j<len2)
    {
        await sleep(delay);
        if(len1+len2==unsorted_array.length)
           {
             bars[k].style.backgroundColor="green";
           }
           else{
              bars[k].style.background="lightgreen";
           }
           unsorted_array[k]=right[j];
           bars[k].style.height=unsorted_array[k]*hf+"px";
           j++;
           k++;
    }
    
}
async function mergeSort(unsorted_array,l,r){
   if(l>=r){
    return;
   }
   const mid=l+(Math.floor((r-l)/2));
   await mergeSort(unsorted_array,l,mid);
   await mergeSort(unsorted_array,mid+1,r);
   await merge(unsorted_array,l,mid,r);
}
merge_sort_btn.addEventListener("click",async function(){
 //console.log("clicked");
  merge_sort_btn.style.backgroundColor="aqua"; 
  const audio=new Audio('Voices/MergeSortVoice.mp3');
  audio.play();   
  let l=0,r=unsorted_array.length-1;
  disableRandomArray();
  disableSize();
  disableSortBtn();
  await mergeSort(unsorted_array,l,r);
  merge_sort_btn.style.backgroundColor="#677685";
  await sleep(10);
  sortingCompleted();
  enableRandomArray();
  enableSize();
  enableSortBtn();
});