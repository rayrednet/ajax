$(function () {
    function sendData($form) {
      let dataString = $form.serialize();
  
      return $.ajax({
        type: $form.attr("method"),
        url: $form.attr("action"),
        data: dataString,
      });
    }
  
    $("form").validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true,
        },
        phone: "required",
      },
      messages: {
        name: "Please enter your name",
        email: {
          required: "Please enter your email",
          email: "Please enter a valid email address",
        },
        phone: "Please enter your phone number",
      },
      submitHandler: function (form) {
        sendData($(form))
          .done(function () 
          {
            $("#contact_form").html("<div id='message'></div>");
  
            $("#message")
              .html("<h2>Contact Form Submitted!</h2>")
              .append("<p>We will be in touch soon.</p>")
              .hide()
              .fadeIn(1500);
  
            $("#message").append("<img id='end' src='img/thx.png'/>");
            $("#end").attr("width", "250");
            $("#end").attr("height", "250");
          })
          .fail(function () {
            alert("There was an error submitting the form");
          });
      },
    });
  });