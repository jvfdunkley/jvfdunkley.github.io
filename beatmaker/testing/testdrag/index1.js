let beat1 = document.querySelector('#beat1');
let square = document.getElementById('.square');
document.addEventListener('dragenter', dragEnter);
document.addEventListener('dragstart', dragStart);

function dragEnter(e)
{
    if(e.target.className == "beatbox")
    {
        console.log("enter");
    }
}

function dragStart(e)
{
    console.log("start");

}
