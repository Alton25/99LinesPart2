

    var friends = ['Rod', 'Courtney', 'Whitey', 'Sierra', 'Shannon'];
    var music = function (lineNum) {
        return lineNum + (lineNum == 1 ? " line " : " lines ")
    };
    function myButton(){  
    for (let s = 0; s < friends.length; s++) {
        console.log(friends[s] + ':');
     
        let h3 = document.createElement('h3');
        let h3Text = document.createTextNode(friends[s]);
        h3.appendChild(h3Text);
        let div = document.createElement('div');
        div.appendChild(h3);
        
        div.className = 'friend';
        document.body.appendChild(div);
        mySong(friends[s], div);

    }

}
function mySong(friend, div){
    let p;
    let text;
    for (let num = 99; num > 0; num--) {
     p = document.createElement('p');
      text = document.createTextNode(music(num) + ' of code in the file, ' + music(num) + ' of code; '
     + friend + ' strikes one out, clears it all out, ' + music(num - 1) + ' of code in the file!');
     p.appendChild(text);
     div.appendChild(p);
    }  
}






