
  function validateForm() {
    
    var brandName = document.getElementById("brand-name").value.trim();
    var brandType = document.getElementById("brand-type").value.trim();
    var streetAddress = document.getElementById("street-address").value.trim();
    var city = document.getElementById("city").value.trim();
    var zipCode = document.getElementById("zip-code").value.trim();
    var taxIdNumber = document.getElementById("tax-id-number").value.trim();

    
    document.getElementById("brand-name-error").innerHTML = "";
    document.getElementById("brand-type-error").innerHTML = "";
    document.getElementById("street-address-error").innerHTML = "";
    document.getElementById("city-error").innerHTML = "";
    document.getElementById("zip-code-error").innerHTML = "";
    document.getElementById("tax-id-number-error").innerHTML = "";

    
    var isValid = true;

    if (brandName === "") {
      document.getElementById("brand-name-error").innerHTML = "Brand Name cannot be empty";
      isValid = false;
    }

    if (brandType === "") {
      document.getElementById("brand-type-error").innerHTML = "Brand Type cannot be empty";
      isValid = false;
    }

    if (streetAddress === "") {
      document.getElementById("street-address-error").innerHTML = "Street Address cannot be empty";
      isValid = false;
    }

    if (city === "") {
      document.getElementById("city-error").innerHTML = "City cannot be empty";
      isValid = false;
    }

    if (zipCode === "") {
      document.getElementById("zip-code-error").innerHTML = "Zip Code cannot be empty";
      isValid = false;
    }

    if (taxIdNumber === "") {
      document.getElementById("tax-id-number-error").innerHTML = "Tax ID Number cannot be empty";
      isValid = false;
    }

    
    if (!isValid) {
      return false;
    }

    
    var formData = {
      brandName: brandName,
      brandType: brandType,
      streetAddress: streetAddress,
      city: city,
      zipCode: zipCode,
      taxIdNumber: taxIdNumber
    };

    localStorage.setItem("buisnessformData", JSON.stringify(formData));

    
    alert("Form submitted successfully!");

    window.location.href = "/index.html";
    return true;
  }

  function previousStep(){

    return(window.location.href = "/index.html")
  }
