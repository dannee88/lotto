function myFunction() {
    var x = document.getElementById("numbers");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + " ";
    }
    document.getElementById("lucky").innerHTML = text;
}

function random(){
    
    var first = Math.floor(Math.random() * 101)
    var second = Math.floor(Math.random() * 101)
    var third = Math.floor(Math.random() * 101)
    var fourth = Math.floor(Math.random() * 101)

    var winner = Math.floor(Math.random() * 101)

    var win = (first +","+ second +","+ third +","+ fourth +","+ winner)

       
    
    document.getElementById('ranNum').value = win
    document.getElementById('numbers').innerHTML = win
    

  }
  



