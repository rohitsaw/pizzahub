// jquery code

$(document).ready(function(){
    $("#buynow").click(function(){
    var price = "{{ price }}"
    console.log(price);
    
     $.ajax(
        {
            type:"POST",
            url : "/buy",
            data : {
                'csrfmiddlewaretoken' :$('[name=csrfmiddlewaretoken]').val(),
                price : price
            },
            success : function(data){
                alert("success")
                window.location.reload(true);
            }
    
        }
    )       
    
    });
    })