
    var $formContents =$("#formContents");
    if($formContents.length){
        $formContents.validate({
             rules:{
                username: {
                    required: true
               
                }
             },
             messages: {
                username: {
                    required : "User name required."
                }
             }
            }

        )
    }