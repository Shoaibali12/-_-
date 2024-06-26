let string = "";
let buttons =  document.querySelectorAll('#btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target);
        if (e.target.innerHTML == '='){
            string =  eval(string);
            document.querySelector('input').value =  string;
        }
        else if (e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value =  string;
        }
        else  {
            
                string = string + e.target.innerHTML;
            
            if (string.charAt(0) == '*' || string.charAt(0) == '/'|| string.charAt(0) == '+' ){
                string = "Invalid input"
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == "sqrt"){
                let a = parseInt(string);
                string = Math.sqrt(a);
                document.querySelector('input').value = string;
            }
         document.querySelector('input').value = string;
        }
       
    
      
    })
})
