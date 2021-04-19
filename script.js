function f1() {
    var d = document.getElementById("ddselect")
    var value = d.options[d.selectedIndex].value
    if(value=="shops")
    {
        document.getElementById("hide").style.visibility="hidden"
        document.getElementById("hide1").style.visibility="hidden"
    }
    else
    {
        document.getElementById("hide").style.visibility="visible" 
        document.getElementById("hide1").style.visibility="visible"   
    }
   
}