function change(id) {
    document.getElementById(id).readOnly = false;
    document.getElementById(id).focus();
    console.log(id);
}

function submit(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    console.log(name,email,mobile);
    $.ajax({
        type:"PUT",
        url: '/',
        data:{
            name:name,
            email:email,
            mobile:mobile
        },
        failed: function(){
            alert("failed");
        },
        success: function(data){
            document.getElementById("name").value = data.name;
            document.getElementById("email").value = data.email;
            document.getElementById("mobile").value = data.mobile;
            document.getElementById("name").readOnly = true;
            document.getElementById("email").readOnly = true;
            document.getElementById("mobile").readOnly = true;
            alert("Data Updated");
        } 
    });
}