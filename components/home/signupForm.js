
export default function SignupForm() {
    const phoneNoMask = (event) => {
        if (event.keyCode == 8 || event.keyCode == 46) {
            // Do stuff...
        }
        else {
            var getthevalue = event.target.value;
            var num = getthevalue.replace(/\D/g, "");
            var newnum = num.substring(0, 3) + "-" + num.substring(3, 6) + "-" + num.substring(6, 10);

            if (newnum == "--") {
                newnum = "";
            }
            event.target.value = newnum;
        }
    }
    const ucFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const userSignup = async event => {
        event.preventDefault()
        event.target.op.disabled = true;
        var name = event.target.name.value;//jQuery('#edit-name--2').val();
        var arrayName = name.split(' ');
        var FirstName = '';
        var MiddleName = '';
        var LastName = '';
        var StartUrl = '';
        if (typeof arrayName[0] !== "undefined") {
            FirstName = arrayName[0];
            StartUrl = ucFirst(FirstName);
        }
        if (typeof arrayName[2] !== "undefined") {
            MiddleName = arrayName[1];
            LastName = arrayName[2];
            StartUrl = StartUrl + '-' + ucFirst(MiddleName) + '-' + ucFirst(LastName);
        }
        if (typeof arrayName[1] !== "undefined" && typeof arrayName[2] === "undefined") {
            LastName = arrayName[1];
            StartUrl = StartUrl + '-' + ucFirst(LastName);
        }
        console.log(StartUrl);
        var email = event.target.email.value;//jQuery('#edit-email').val();
        var phone = event.target.phone.value;//jQuery('#edit-phone').val();

        // Do ajax call here
        var data = { name: name, email: email, phone: phone }

        const searchParams = Object.keys(data).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }).join('&');
        // console.log('searchParams')
        // console.log(searchParams)

        fetch("https://www.ovlg.com/lead/signup/ajax-next", {
            // body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            method: "POST",
            body: searchParams
        })
            .then(res => res.text())//.json())
            .then(
                (result) => {
                    console.log(result);
                    event.target.op.disabled = false;
                    let resString = result.trim();

                    if (resString.toLocaleLowerCase().indexOf("https://www.ovlg.com/contact-us/people.html") != -1) {
                        document.querySelector('#error_display').innerHTML = 'Thank You! The user already exists. To activate it, send an email to nick@ovlg.com.';
                    }
                    else if (resString.toLocaleLowerCase().indexOf("https://www.ovlg.com/clients-intake/client-schedule-metting.php?uid=") != -1) {
                        var url = new URL(resString.toLocaleLowerCase());
                        var uid = url.searchParams.get("uid");
                        window.location.href = 'https://www.ovlg.com/start/client-schedule-meeting?uid=' + uid + '&start_url=' + StartUrl; //'https://www.ovlg.com/start/'+StartUrl;
                    }
                    else {
                        if (resString == '') {
                            document.querySelector('#error_display').innerHTML = 'Some thing went worng';//$('#error_display').html('Some thing went worng');
                        }
                        else {
                            document.querySelector('#error_display').innerHTML = json.data;//$('#error_display').html(json.data);
                        }
                    }

                },
                (error) => {
                    console.log(error)
                }
            )
        // $("#edit-submit--2").prop('disabled', false);
        // event.target.op.disabled = false;
    }

    return (
        <form onSubmit={userSignup}>
            <div>
                <div className="form-item form-item-name form-type-textfield form-group">
                    <input
                        placeholder="Name"
                        required="required"
                        pattern="[a-zA-Z ]+"
                        onInvalid={(e) => e.target.setCustomValidity('Name can only contain alphabet and spaces')}
                        onInput={(e) => e.target.setCustomValidity('')}
                        className="form-control form-text required"
                        type="text"
                        id="edit-name--2"
                        name="name"
                        size="60"
                        style={{ boxShadow: '0 0' }}
                        maxLength="128"
                    />
                </div>

                <div className="form-item form-item-email form-type-textfield form-group my-4">
                    <input
                        placeholder="E-mail"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        required="required"
                        onInvalid={(e) => e.target.setCustomValidity('Enter a valid email-id')} //'Please enter valid email with proper formatting')}
                        onInput={(e) => e.target.setCustomValidity('')}
                        className="form-control form-text required"
                        type="text"
                        id="edit-email"
                        name="email"
                        style={{ boxShadow: '0 0' }}
                        size="60"
                        maxLength="128"
                    />
                </div>

                <div className="form-item form-item-phone form-type-textfield form-group my-4">
                    <input
                        placeholder="Phone No."
                        className="SignupFormPhone form-control form-text"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required="required"
                        onKeyUp={phoneNoMask} //{(e) => phoneMask(e.target, e.keyCode)}
                        type="text"
                        id="edit-phone"
                        name="phone"
                        onInvalid={(e) => e.target.setCustomValidity('Please enter in the correct format - 999-999-9999')}//'Please enter with proper formatting 999-999-9999')}
                        onInput={(e) => e.target.setCustomValidity('')}
                        size="60"
                        style={{ boxShadow: '0 0' }}
                        maxLength="128"
                    />
                </div>

                <button
                    className="btn-lg btn-success bold col-12 btn btn-default form-submit mb-2 rounded-0"
                    type="submit"
                    id="edit-submit--2"
                    name="op"
                    value="Get Debt Relief"
                >
                    Get Debt Relief
                </button>
            </div>

        </form>
    )
}