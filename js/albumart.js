function size(block){
    var b = block.style;
    var c = block.id;
    var n = document.getElementsByClassName('name')[c].style;

    if(b.width!='300px' && n.opacity!='100'){
        b.width="300px";
        b.height='300px';
        n.opacity="100";
    }
    else{
        b.width="250px";
        b.height='250px';
        n.opacity="0";
    }
}
