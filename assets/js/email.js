function sendMail() {
    let params = {
      name: document.getElementById("contactName").value,
      email: document.getElementById("contactEmail").value,
      message: document.getElementById("msg").value,
      number: document.getElementById("phoneNumber").value,
      country: document.getElementById("contactCountry").value,
      companyName: document.getElementById("companyName").value,
      solutions: document.getElementById("companySolutions").value,
      website: document.getElementById("companyWeb").value,
    };
  
    const serviceID = "service_8kecrpe";
    const templateID = "template_mfywhcd";
  
    let isEmptyField = false;
  
    if (
      params.name === "" ||
      params.email === "" ||
      params.message === "" ||
      params.number === "" ||
      params.country === "" ||
      params.companyName === "" ||
      params.solutions === "" 
    ) {
      isEmptyField = true;
      if (isEmptyField) {
        if (params.name === "") {
          document.getElementById("contactName");
          showError("contactName", "This field is required");
        }
        if (params.email === "") {
          document.getElementById("contactEmail");
          showError("contactEmail", "This field is required");
        } else if (!isValidEmailWithDomainCheck(params.email)) {
  
          document.getElementById("contactEmail");
          showError("contactEmail", "Please enter a valid email address");
        }
        if (params.number === "") {
          document.getElementById("phoneNumber");
          showError("phoneNumber", "This field is required");
        }else if (!isValidNumber(params.number)) {
          document.getElementById("phoneNumber");
          showError("phoneNumber", "Please enter a valid phone number (0-9; min 9 - max 14 digits)");
        }
  
        if (params.country === "") {
          document.getElementById("contactCountry");
          showError("contactCountry", "This field is required");
        }
        if (params.companyName === "") {
          document.getElementById("companyName");
          showError("companyName", "This field is required");
        }
        if (params.solutions === "") {
          document.getElementById("companySolutions");
          showError("companySolutions", "This field is required");
        }
        // if (params.website === "") {
        //   document.getElementById("companyWeb").style.border = "1px solid red";
        //   showError("companyWeb", "This field is required");
        // }
        if (params.message === "") {
          document.getElementById("msg");
          showError("msg", "This field is required");
        }
  
        // Add event listeners to revert border color and remove error messages when clicked
        document.getElementById("contactName").addEventListener("click", revertFieldState);
        document.getElementById("contactEmail").addEventListener("click", revertFieldState);
        document.getElementById("phoneNumber").addEventListener("click", revertFieldState);
        document.getElementById("contactCountry").addEventListener("click", revertFieldState);
        document.getElementById("companyName").addEventListener("click", revertFieldState);
        document.getElementById("companySolutions").addEventListener("click", revertFieldState);
        // document.getElementById("companyWeb").addEventListener("click", revertFieldState);
        document.getElementById("msg").addEventListener("click", revertFieldState);
  
        return;
      }
    } else {
      emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
          // Clear all form fields
          document.getElementById("contactName").value = "";
          document.getElementById("contactEmail").value = "";
          document.getElementById("msg").value = "";
          document.getElementById("phoneNumber").value = "";
          document.getElementById("contactCountry").value = "";
          document.getElementById("companyName").value = "";
          document.getElementById("companySolutions").value = "";
          document.getElementById("companyWeb").value = "";
  
          // Reset floating label states to placeholder position
          resetFloatingLabels();
  
          showSuccessBanner();
  
        })
        .catch((err) => console.log(err));
  
    }
  }
  
  function showSuccessBanner(params) {
    const successBanner = document.getElementById('successBanner');
    if (successBanner) {
      successBanner.style.display = "block";
  
      setTimeout(function() {
        successBanner.style.display="none";
      }, 5000);
    }
  }
  
  // Function to reset floating labels to placeholder position
  function resetFloatingLabels() {
    // Get all form groups
    const groups = document.querySelectorAll('.appointment-form .group');
    
    groups.forEach(function(group) {
      // Remove the has-value class to reset label position
      group.classList.remove('has-value');
      group.classList.remove('is-focused');
    });
  
    // Hide all clear buttons (X icons)
    const clearButtons = document.querySelectorAll('.clear-select-btn');
    clearButtons.forEach(function(button) {
      button.classList.remove('visible');
    });
  }
  
  // Function to revert the border color and remove error message when clicked
  function revertFieldState(event) {
    const fieldId = event.target.id;
    const fieldElement = document.getElementById(fieldId);
    fieldElement.style.border = ""; // Set border style to empty (default)
    
    removeError(fieldId); // Remove the error message associated with the field
  }
  
  // Function to show error message next to the empty field
  function showError(fieldId, errorMessage) {
    const errorId = fieldId + "-error";
    const existingErrorElement = document.getElementById(errorId);
    if (existingErrorElement) {
      existingErrorElement.remove();
    }
    
    const errorElement = document.createElement("span");
    errorElement.id = errorId;
    errorElement.classList.add("error-message");
    errorElement.innerText = errorMessage;
  
    const fieldContainer = document.getElementById(fieldId).parentNode;
    fieldContainer.appendChild(errorElement);
  }
  
  // Function to remove error message
  function removeError(fieldId) {
    const errorId = fieldId + "-error";
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
      errorElement.remove();
    }
  }
  
  // Function to validate email address using indexOf
  
  function isValidEmailWithDomainCheck(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const allowedDomains = ['mail.ru', 'gmail.com', 'inbox.ru', 'bk.ru', 'list.ru', 'internet.ru', 'yandex.ru', 'yahoo.com', 'hotmail.com', 'outlook.com'];
  
    if (!emailRegex.test(email)) {
      return false;
    }
  
    const domain = email.split('@')[1];
    if (!allowedDomains.includes(domain)) {
      return false;
    }
  
    return true;
  }
  
  function isValidNumber(number) {
    const numberRegex = /^(\+)?\d{9,14}$/;
    return numberRegex.test(number);
  }
  
  // Get the input element
  
  const phoneNumberInput = document.getElementById('phoneNumber');
  
  // Add an input event listener
  
  phoneNumberInput.addEventListener('input', function(event) {
  
    // Get the current value of the input field
  
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^+\d]/g, '');
  
    // Update the input field value
  
    event.target.value = numericValue;
  
  });
  
  const textarea = document.getElementById('msg');
  textarea.addEventListener('input', validateTextarea);
  
  function validateTextarea() {
    const message = textarea.value.trim();
    const wordCount = message === '' ? 0 : message.split(/\s+/).length;

    // Update the word count display (no validation limit)
    const wordCountMessage = document.getElementById('wordCountMessage');
    if (wordCountMessage) {
      wordCountMessage.textContent = `Word count: ${wordCount}`;
    }

    // Do not enforce any minimum or maximum length
    textarea.setCustomValidity('');
  }
  
  // Inline clear (X) buttons for inputs and selects
  (function () {
    function attachClearButton(fieldElement) {
      if (!fieldElement || fieldElement.dataset.clearableAttached === 'true') return;
  
      const wrapper = document.createElement('div');
      wrapper.className = 'select-clear-wrapper';
      if (fieldElement.tagName === 'SELECT') {
        wrapper.classList.add('has-select');
      }
  
      const parent = fieldElement.parentNode;
      if (!parent) return;
  
      parent.insertBefore(wrapper, fieldElement);
      wrapper.appendChild(fieldElement);
  
      const clearBtn = document.createElement('button');
      clearBtn.type = 'button';
      clearBtn.className = 'clear-select-btn';
      clearBtn.setAttribute('aria-label', 'Clear');
      clearBtn.setAttribute('title', 'Clear');
      clearBtn.innerHTML = '&times;';
      wrapper.appendChild(clearBtn);
  
      function hasValue() {
        if (fieldElement.tagName === 'SELECT') {
          return fieldElement.value !== '' && fieldElement.value != null;
        }
        return fieldElement.value && fieldElement.value.length > 0;
      }
  
      function updateVisibility() {
        if (hasValue()) {
          clearBtn.classList.add('visible');
        } else {
          clearBtn.classList.remove('visible');
        }
      }
  
      function clearField(event) {
        event.preventDefault();
        event.stopPropagation();
        
        if (fieldElement.tagName === 'SELECT') {
          // Prefer selecting an explicit empty-value option if present
          var emptyOption = Array.prototype.find.call(fieldElement.options || [], function (opt) { return opt.value === ''; });
          if (emptyOption) {
            fieldElement.value = '';
          } else if (typeof fieldElement.selectedIndex === 'number') {
            // Fallback to first option
            fieldElement.selectedIndex = 0;
          }
          fieldElement.dispatchEvent(new Event('change', { bubbles: true }));
        } else {
          fieldElement.value = '';
          fieldElement.dispatchEvent(new Event('input', { bubbles: true }));
          fieldElement.focus();
        }
        updateVisibility();
        
        // Remove any error messages when clearing
        const fieldId = fieldElement.id;
        removeError(fieldId);
      }
      
      clearBtn.addEventListener('click', clearField);
      clearBtn.addEventListener('touchend', clearField);
  
      if (fieldElement.tagName === 'SELECT') {
        fieldElement.addEventListener('change', updateVisibility);
      } else {
        fieldElement.addEventListener('input', updateVisibility);
        fieldElement.addEventListener('focus', updateVisibility);
        fieldElement.addEventListener('blur', updateVisibility);
      }
  
      fieldElement.dataset.clearableAttached = 'true';
      updateVisibility();
    }
  
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initClearButtons);
    } else {
      initClearButtons();
    }
  
    function initClearButtons() {
      try {
        var targets = document.querySelectorAll(
          'select#contactCountry, select#companySolutions, input#contactName, input#contactEmail, input#phoneNumber, input#companyName, input#companyWeb, textarea#msg'
        );
        targets.forEach(function (el) { attachClearButton(el); });
  
        // Floating label support via class toggles
        // Target groups inside the contact page form so floating labels work even after wrapping inputs
        var groups = document.querySelectorAll('.appointment-form .group');
        groups.forEach(function (group) {
          var control = group.querySelector('input, select, textarea');
          if (!control) return;
  
          function updateHasValue() {
            var valuePresent = false;
            if (control.tagName === 'SELECT') {
              valuePresent = control.value !== '' && control.value != null;
            } else if (control.tagName === 'TEXTAREA' || control.tagName === 'INPUT') {
              valuePresent = !!control.value;
            }
            if (valuePresent) {
              group.classList.add('has-value');
            } else {
              group.classList.remove('has-value');
            }
          }
  
          function handleFocus() { group.classList.add('is-focused'); }
          function handleBlur() { group.classList.remove('is-focused'); updateHasValue(); }
  
          control.addEventListener('focus', handleFocus);
          control.addEventListener('blur', handleBlur);
          if (control.tagName === 'SELECT') {
            control.addEventListener('change', updateHasValue);
          } else {
            control.addEventListener('input', updateHasValue);
          }
  
          // Initialize state on load
          updateHasValue();
        });
      } catch (e) {
        // Fail-safe: do nothing
      }
    }
  })();