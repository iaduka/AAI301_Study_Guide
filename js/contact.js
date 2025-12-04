// Contact form functionality

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('contact.html')) {
        initializeContactForm();
    }
});

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }

    // Add form validation styling
    addFormValidation();
}

function handleFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    // Validate form data
    if (!validateForm(data)) {
        return;
    }

    // Show loading state
    showLoadingState(e.target);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        showSuccessMessage();
        e.target.reset();
        resetFormState(e.target);
    }, 2000);
}

function validateForm(data) {
    let isValid = true;
    const errors = {};

    // Name validation
    if (!data.name || data.name.trim().length < 2) {
        errors.name = 'Please enter a valid name (at least 2 characters)';
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.email = 'Please enter a valid email address';
        isValid = false;
    }

    // Subject validation
    if (!data.subject) {
        errors.subject = 'Please select a subject';
        isValid = false;
    }

    // Message validation
    if (!data.message || data.message.trim().length < 10) {
        errors.message = 'Please enter a message (at least 10 characters)';
        isValid = false;
    }

    // Display errors
    displayValidationErrors(errors);

    return isValid;
}

function displayValidationErrors(errors) {
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.remove());
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
    });

    // Display new errors
    Object.keys(errors).forEach(field => {
        const input = document.querySelector(`[name="${field}"]`);
        if (input) {
            const formGroup = input.closest('.form-group');
            formGroup.classList.add('error');

            const errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            errorElement.textContent = errors[field];
            errorElement.style.color = '#e53e3e';
            errorElement.style.fontSize = '0.875rem';
            errorElement.style.marginTop = '0.25rem';
            errorElement.style.display = 'block';

            formGroup.appendChild(errorElement);
        }
    });
}

function showLoadingState(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalContent = submitButton.innerHTML;
    
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.dataset.originalContent = originalContent;
}

function resetFormState(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    
    submitButton.disabled = false;
    submitButton.innerHTML = submitButton.dataset.originalContent || '<i class="fas fa-paper-plane"></i> Send Message';
}

function showSuccessMessage() {
    // Create success notification
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <div>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for your message. We'll get back to you as soon as possible.</p>
            </div>
            <button class="close-notification" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        background: #48bb78;
        color: white;
        border-radius: 8px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        animation: slideInRight 0.3s ease-out;
    `;

    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 16px;
    `;

    const icon = notification.querySelector('i.fas.fa-check-circle');
    icon.style.cssText = `
        font-size: 1.5rem;
        margin-top: 2px;
        flex-shrink: 0;
    `;

    const closeBtn = notification.querySelector('.close-notification');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 4px;
        margin-left: auto;
        flex-shrink: 0;
    `;

    const textContent = notification.querySelector('div > div');
    textContent.querySelector('h4').style.cssText = `
        margin: 0 0 4px 0;
        font-size: 1rem;
        font-weight: 600;
    `;

    textContent.querySelector('p').style.cssText = `
        margin: 0;
        font-size: 0.875rem;
        opacity: 0.9;
    `;

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideInRight 0.3s ease-out reverse';
            setTimeout(() => {
                notification.remove();
                style.remove();
            }, 300);
        }
    }, 5000);
}

function addFormValidation() {
    // Add real-time validation styling
    const formInputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            // Clear error state on input
            const formGroup = this.closest('.form-group');
            if (formGroup.classList.contains('error')) {
                formGroup.classList.remove('error');
                const errorMessage = formGroup.querySelector('.error-message');
                if (errorMessage) {
                    errorMessage.remove();
                }
            }
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    const formGroup = field.closest('.form-group');
    let error = '';

    // Clear previous error
    formGroup.classList.remove('error');
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Validate based on field type
    switch (fieldName) {
        case 'name':
            if (value.length < 2) {
                error = 'Please enter a valid name (at least 2 characters)';
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                error = 'Please enter a valid email address';
            }
            break;
        case 'subject':
            if (!value) {
                error = 'Please select a subject';
            }
            break;
        case 'message':
            if (value.length < 10) {
                error = 'Please enter a message (at least 10 characters)';
            }
            break;
    }

    // Show error if exists
    if (error) {
        formGroup.classList.add('error');
        const errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.textContent = error;
        errorElement.style.color = '#e53e3e';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.25rem';
        errorElement.style.display = 'block';
        formGroup.appendChild(errorElement);
    }
}

// Character counter for textarea
document.addEventListener('DOMContentLoaded', function() {
    const messageTextarea = document.getElementById('message');
    
    if (messageTextarea) {
        const formGroup = messageTextarea.closest('.form-group');
        const counter = document.createElement('div');
        counter.className = 'char-counter';
        counter.style.cssText = `
            text-align: right;
            font-size: 0.75rem;
            color: #718096;
            margin-top: 0.25rem;
        `;
        
        formGroup.appendChild(counter);
        
        function updateCounter() {
            const current = messageTextarea.value.length;
            const min = 10;
            counter.textContent = `${current} characters${current < min ? ` (minimum ${min})` : ''}`;
            counter.style.color = current < min ? '#e53e3e' : '#718096';
        }
        
        messageTextarea.addEventListener('input', updateCounter);
        updateCounter(); // Initial update
    }
});