
            var age = document.getElementById("ageInput").value;
            var resultElement = document.getElementById("result");

            if (age === "") {
                resultElement.textContent = "Por favor, insira sua idade.";
                resultElement.style.color = "red";
            } else if (age >= 18) {
                resultElement.textContent = "Você é maior de idade.";
                resultElement.style.color = "green";
            } else {
                resultElement.textContent = "Você é menor de idade.";
                resultElement.style.color = "orange";
            }
        
