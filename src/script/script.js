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
            errorMessage: "Please enter a valid email"
        },
    ])
    .onSuccess((event) => {
        event.target.reset();
        alert('Email submitted successfully!');
    });