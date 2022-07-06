let randomize_arr=document.getElementById("randomize_btn");
let bubble_sort_btn=document.getElementById("bubble_sort_btn");
let insertion_sort_btn=document.getElementById("insertion_sort_btn");
let selection_sort_btn=document.getElementById("selection_sort_btn");
let bars_container=document.getElementById("bars_container");
let speed_range=document.getElementById("speed_range");
let arr_size=document.getElementById("arr_range");
let delay=260;
let bars=document.getElementsByClassName("bar");
console.log(delay);
let minRange=1;
let maxRange=100;
let hf=5;
let numOfBars=150;
speed_range.addEventListener('input', function(){
    delay = 320 - parseInt(speed_range.value);
});
let unsorted_array=[];
arr_size.addEventListener('input',function(){
    console.log(parseInt(arr_size.value));
    numOfBars=parseInt(arr_size.value);
    createRandomArray();
   //const audio=new Audio('GeneratingNewArrayVoice.mp3');
   //audio.play();
    bars_container.innerHTML="";
    renderBars(unsorted_array);
});

function randomNum(minRange,maxRange)
{
    return Math.floor(Math.random()*(maxRange-minRange+1))+minRange;
}
function  createRandomArray()
{
    unsorted_array=new Array(numOfBars);
   for(let i=0;i<numOfBars;i++)
   {
       unsorted_array[i]=randomNum(minRange,maxRange);
   }
}
 document.addEventListener("DOMContentLoaded",function()
 {
     createRandomArray();
     renderBars(unsorted_array);
 });
  function renderBars(array)
  {
     for(let i=0;i<array.length;i++)
     {
         let bar=document.createElement("div");
         bar.classList.add("bar");
         bar.style.height=array[i]*hf+"px";
         bars_container.appendChild(bar);
     }
  }
  randomize_arr.addEventListener("click",function(){
   createRandomArray();
   const audio=new Audio('Voices/GeneratingNewArrayVoice.mp3');
   audio.play();
    bars_container.innerHTML="";
    renderBars(unsorted_array);
  }); 
  function sleep(ms)
  {
      return new Promise((resolve)=>setTimeout(resolve,ms));
  }
  function disableSortBtn()
  {
    document.getElementById("bubble_sort_btn").disabled=true;
    document.getElementById("insertion_sort_btn").disabled=true;
    document.getElementById("selection_sort_btn").disabled=true;
    document.getElementById("quick_sort_btn").disabled=true;
    document.getElementById("merge_sort_btn").disabled=true;
  }
  function enableSortBtn()
  {
    document.getElementById("bubble_sort_btn").disabled=false;
    document.getElementById("insertion_sort_btn").disabled=false;
    document.getElementById("selection_sort_btn").disabled=false;
    document.getElementById("quick_sort_btn").disabled=false;
    document.getElementById("merge_sort_btn").disabled=false;
  }
  function disableSize()
  {
    document.getElementById("arr_range").disabled=true;
  }
  function enableSize()
  {
    document.getElementById("arr_range").disabled=false;
  }
  function disableRandomArray()
  {
    document.getElementById("randomize_btn").disabled=true;
  }
  function enableRandomArray()
  {
    document.getElementById("randomize_btn").disabled=false;
  }




function sortingCompleted()
{
  const audio=new Audio('Voices/SortingCompletedVoice.mp3');
  audio.play(); 
}
