//js tuy chinh

//check sđt
function validatePhoneNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(input_str);
}

function validateForm2(event) {
    var phone_2 = document.getElementById('myform_phone_2').value;
    if (!validatePhoneNumber(phone_2)) {
        document.getElementById('phone_error_2').classList.remove('hidden');
        console.log('form fail');
    } else {
        document.getElementById('phone_error_2').classList.add('hidden');
        console.log('form success');
        //cho chạy form
        //alert("validation success");
        //var redirect_url_2 = '?phone=' + phone_2;
        //window.open(redirect_url);

        //action nháp cho form chạy
        window.assign();
    }
    event.preventDefault();
}

document.getElementById('myform_2').addEventListener('submit', validateForm2);