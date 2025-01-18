const validator = new JustValidate("#emailForm", {
    errorFieldCssClass: 'error',
});

validator
    .addField("#emailInput", [
        {
            rule: "required",
            errorMessage: "Email cannot be empty",
        },
        {
            rule: "email",
            errorMessage: "Valid email is required"
        },
    ])
    .onSuccess((event) => {
        event.target.reset();
        alert('Email submitted successfully!');
    });