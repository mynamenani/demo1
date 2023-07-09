function gallary()
{
    var photos=document.images;
    for(i=0;i<=10;i++)
    {
        photos[i].src=`${i}.jpg`
        console.log(photos[i])
    }
}
function gal(loc)
{
    document.getElementById("bigimage").style.backgroundImage=`url(${loc })`
    document.getElementById("container").style.src=`url(${gallary()})`
    document.getElementById("container").style.backgroundImage=`url(${loc})`
    document.getElementById("container").style.backgroundPosition="center"
}