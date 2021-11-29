// jQuery(function () {

// import { trim } from "jquery";

//   console.log('Om Namah Shibay!!')

// })

// function jaiHanuman() {
//   console.log('Jai Hanuman!!')
//   return false;
// }

function askQuestionFormSubmit(event) {
  event.preventDefault()
  event.target.op.disabled = true;
  // $title = $form_state['input']['questionsubject'];
  // $bodytext = $form_state['input']['questionbody'];
  // $category = $form_state['input']['questioncategory'];
  // console.log(event.target)
  event.target.questionsubject.classList.remove('input_error');
  event.target.questionbody.classList.remove('input_error');
  event.target.questioncategory.classList.remove('input_error');
  document.querySelector('#ask_question_error_msg').className += " d-none";
  document.querySelector('#ask_question_error_msg').innerHTML = '';
  document.querySelector('#ask_question_success_msg').className += " d-none";
  document.querySelector('#ask_question_success_msg').innerHTML = '';

  var title = event.target.questionsubject.value;
  var bodytext = event.target.questionbody.value;
  var category = event.target.questioncategory.value;
  var user_email = event.target.user_email.value;
  if (!category) {
    event.target.questioncategory.className += " input_error";
    event.target.questioncategory.focus();
    return false;
  }
  if (!title || title.trim() == "") {
    event.target.questionsubject.className += " input_error";
    event.target.questionsubject.focus();
    return false;
  }
  if (!bodytext || bodytext.trim() == "") {
    event.target.questionbody.className += " input_error";
    event.target.questionbody.focus();
    return false;
  }

  // Do ajax call here
  var data = { title: title.trim(), bodytext: bodytext.trim(), category: category.trim(), user_email: user_email.trim() }
  // console.log(data)
  const searchParams = Object.keys(data).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
  }).join('&');
  // console.log(searchParams);
  //ask-question-next-api

  fetch("https://www.ovlg.com/ask-question-next-api", {
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
        // console.log(result);

        event.target.op.disabled = false;
        let resString = result.trim();

        if (resString.toLocaleLowerCase().indexOf("success@") == 0) {
          // document.querySelector('#error_display').innerHTML = 'Thank You! The user already exists. To activate it, send an email to nick@ovlg.com.';
          var lastAt = resString.lastIndexOf("@");
          var msgToShow = resString.substring(lastAt + 1);
          document.querySelector('#ask_question_success_msg').classList.remove('d-none');
          document.querySelector('#ask_question_success_msg').innerHTML = msgToShow;
        }
        else if (resString.toLocaleLowerCase().indexOf("error@spam@") == 0) {
          var lastAt = resString.lastIndexOf("@");
          var msgToShow = resString.substring(lastAt + 1);
          document.querySelector('#ask_question_error_msg').classList.remove('d-none');
          document.querySelector('#ask_question_error_msg').innerHTML = msgToShow;
        }
        else {
          var lastAt = resString.lastIndexOf("@");
          var msgToShow = resString.substring(lastAt + 1);
          document.querySelector('#ask_question_error_msg').classList.remove('d-none');
          document.querySelector('#ask_question_error_msg').innerHTML = msgToShow;
        }

      },
      (error) => {
        console.log(error)
      }
    )

  return false;
}