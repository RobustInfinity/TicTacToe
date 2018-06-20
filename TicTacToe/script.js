

var buttons = [];

var flag = false;
var isWin = false;
var zero = 0;
var cross = 'X';
var keys = [];
var values = [];
var key;

    document.querySelector('.btn-secondary').addEventListener('click',function(){
        keys = [];
        values = [];
        key;
        flag = false;
        isWin = false;
        for(var i =0; i < 9; i++){
            document.querySelector('#button-'+i).textContent = '+';   
            document.querySelector('#button-'+i).classList.remove('zero')
            document.querySelector('#button-'+i).classList.remove('cross')
            document.querySelector('#button-'+i).classList.remove('win')
       }
       document.querySelector('.result').style.display = 'none';
        
    })
    for(var i =0; i < 9; i++){
         buttons.push(document.querySelector('#button-'+i));   
    }

    buttons.forEach(listener);

     function listener (value,index,buttons){
        // console.log(buttons[index]);
        buttons[index].addEventListener('click', function(){
                if(!isWin){
                    console.log('#button-'+index)
                    chance('#button-'+index);
                }
            })
    }

    


    //putting 0/X value and their corresponding value
    function chance(id){
         key = document.querySelector(id).getAttribute('value')
        if(!flag && (document.querySelector(id).textContent === '+')){
            document.querySelector(id).textContent = zero;
            document.querySelector(id).classList.add('zero')
            keys.push(key);
            values.push(document.querySelector(id).textContent);
            flag = true;
        }if(flag && (document.querySelector(id).textContent === '+')){
            document.querySelector(id).textContent = cross;
            document.querySelector(id).classList.add('cross')
            keys.push(key);
            values.push(document.querySelector(id).textContent);
            flag = false;
        }
        console.log('keys -> ' + keys + ' values -> '+values)
        check();
    }

    //Winning Condition
    function check(){
        
        //Vertical winning
        if(values[keys.indexOf('0')] === values[keys.indexOf('3')] && 
            values[keys.indexOf('3')] === values[keys.indexOf('6')]){
                if(values[keys.indexOf('0')] != undefined){
                    result(values[keys.indexOf('0')])
                    console.log(values[keys.indexOf('0')])
                    document.querySelector('#button-'+0).classList.add('win')
                    document.querySelector('#button-'+3).classList.add('win')
                    document.querySelector('#button-'+6).classList.add('win')
                    isWin = true;
                }
            } 
            if(values[keys.indexOf('1')] === values[keys.indexOf('4')] && 
            values[keys.indexOf('4')] === values[keys.indexOf('7')]){
                if(values[keys.indexOf('1')] != undefined){
                    result(values[keys.indexOf('1')])
                    console.log(values[keys.indexOf('1')])
                    document.querySelector('#button-'+1).classList.add('win')
                    document.querySelector('#button-'+4).classList.add('win')
                    document.querySelector('#button-'+7).classList.add('win')
                    isWin = true;
                }
            } 
            if(values[keys.indexOf('2')] === values[keys.indexOf('5')] && 
            values[keys.indexOf('5')] === values[keys.indexOf('8')]){
                if(values[keys.indexOf('2')] != undefined){
                    result(values[keys.indexOf('2')])
                    console.log(values[keys.indexOf('2')])
                    document.querySelector('#button-'+2).classList.add('win')
                    document.querySelector('#button-'+5).classList.add('win')
                    document.querySelector('#button-'+8).classList.add('win')
                    isWin = true;
                }
            }


        //Horizontal winning
        if(values[keys.indexOf('0')] === values[keys.indexOf('1')] && 
            values[keys.indexOf('1')] === values[keys.indexOf('2')]){
                if(values[keys.indexOf('0')] != undefined){
                    result(values[keys.indexOf('0')])
                    console.log(values[keys.indexOf('0')])
                    document.querySelector('#button-'+0).classList.add('win')
                    document.querySelector('#button-'+1).classList.add('win')
                    document.querySelector('#button-'+2).classList.add('win')
                    isWin = true;
                }
            } 
        if(values[keys.indexOf('3')] === values[keys.indexOf('4')] && 
        values[keys.indexOf('4')] === values[keys.indexOf('5')]){
            if(values[keys.indexOf('3')] != undefined){
                result(values[keys.indexOf('3')])
                console.log(keys.indexOf('3'))
                document.querySelector('#button-'+3).classList.add('win')
                document.querySelector('#button-'+4).classList.add('win')
                document.querySelector('#button-'+5).classList.add('win')
                isWin = true;
            }
        } 
        if(values[keys.indexOf('6')] === values[keys.indexOf('7')] && 
        values[keys.indexOf('7')] === values[keys.indexOf('8')]){
            if(values[keys.indexOf('6')] != undefined){
                result(values[keys.indexOf('6')])
                console.log(values[keys.indexOf('6')])
                document.querySelector('#button-'+6).classList.add('win')
                document.querySelector('#button-'+7).classList.add('win')
                document.querySelector('#button-'+8).classList.add('win')
                isWin = true;
            }
        }
           

        //Diagonal Winning
        if(values[keys.indexOf('0')] === values[keys.indexOf('4')] && 
            values[keys.indexOf('4')] === values[keys.indexOf('8')]){
                if(values[keys.indexOf('0')] != undefined){
                    result(values[keys.indexOf('0')])
                    console.log(values[keys.indexOf('0')])
                    document.querySelector('#button-'+0).classList.add('win')
                    document.querySelector('#button-'+4).classList.add('win')
                    document.querySelector('#button-'+8).classList.add('win')
                    isWin = true;
                }
            }
        if(values[keys.indexOf('2')] === values[keys.indexOf('4')] && 
        values[keys.indexOf('4')] === values[keys.indexOf('6')]){
            if(values[keys.indexOf('2')] != undefined){
                result(values[keys.indexOf('2')])
                console.log(values[keys.indexOf('2')])
                document.querySelector('#button-'+2).classList.add('win')
                document.querySelector('#button-'+4).classList.add('win')
                document.querySelector('#button-'+6).classList.add('win')
                isWin = true;
            }
    }
}

function result(value){

    document.querySelector('.result').style.display = 'block';
    document.querySelector('#player').textContent = value +' WINS';
    
}