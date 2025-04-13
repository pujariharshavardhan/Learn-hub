$(document).ready(function () {
    $("#signupForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
            },
            email: {
                required: true,
                email: true,
            },
            gender: {
                required: true,
            },
            dob: {
                required: true,
                date: true,
            },
            address: {
                required: true,
            },
            password: {
                required: true,
                minlength: 7,
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).*$/,
            },
            conPassword: {
                required: true,
                equalTo: "#password",
            },
            terms: {
                required: true,
            },
        },
        messages: {
            name: {
                required: "Please enter your name.",
                minlength: "Name must be at least 3 characters long.",
            },
            email: {
                required: "Please enter your email address.",
                email: "Please enter a valid email address.",
            },
            gender: {
                required: "Please select a gender.",
            },
            dob: {
                required: "Please enter your date of birth.",
                date: "Please enter a valid date.",
            },
            address: {
                required: "Please enter your address.",
            },
            password: {
                required: "Please provide your password.",
                minlength: "Password must be at least 7 characters long.",
                pattern:
                    "Password must include one uppercase letter, one lowercase letter, and one special character.",
            },
            conPassword: {
                required: "Please confirm your password.",
                equalTo: "Passwords must match.",
            },
            terms: {
                required: "You must agree to the terms and conditions.",
            },
        },
        errorElement: "div",
        errorPlacement: function (error, element) {
            error.addClass("invalid-feedback");
            if (element.attr("type") === "radio" || element.attr("type") === "checkbox") {
                error.insertAfter(element.closest(".form-check"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function (element) {
            $(element).addClass("is-invalid").removeClass("is-valid");
        },
        unhighlight: function (element) {
            $(element).addClass("is-valid").removeClass("is-invalid");
        },
        submitHandler: function (form) {
            alert("Signup successful!");
            form.reset();
        },
    });
});