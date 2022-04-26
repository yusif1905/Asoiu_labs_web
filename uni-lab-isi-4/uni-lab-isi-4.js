var a,b,y,x,w;
    a= parseFloat(prompt("Enter a ",""));
    b= parseFloat(prompt("Enter b ",""));
    x= parseFloat(prompt("Enter x ",""));
    y=(b*(Math.pow(Math.tan(x),2))*x)-(a/(Math.pow(Math.sin(x/a),2)));
    w=(a*(Math.pow(Math.E,-Math.sqrt(a)))*Math.cos(b*x/a))+Math.abs(y);


    alert("y="+y);
    alert("w="+w);
    
    function cond() {
        var a,y,x,w;
        a=Number(document.forma.a.value);
        x=Number(document.forma.x.value);
        if ( x>1) {
        y=Math.tan(x+1);
        }
        else
        if (x<=1) 
        y= (Math.pow((Math.sin())) * Math.abs(a * x))
        
        else{
    
        }
       
        document.forma.y.value= y;
       
        }
        
    
    let elements = document.querySelectorAll('#button');
    elements.forEach((element) => {  
      element.addEventListener('click', cond());
    
    });