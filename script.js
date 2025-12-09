function toggleUnits() {
    const unit = document.querySelector('input[name="unit"]:checked').value;

    if (unit === "metric") {
        document.getElementById("metric-inputs").style.display = "block";
        document.getElementById("imperial-inputs").style.display = "none";
    } else {
        document.getElementById("metric-inputs").style.display = "none";
        document.getElementById("imperial-inputs").style.display = "block";
    }
}

function calculateBMI() {
    const unit = document.querySelector('input[name="unit"]:checked').value;
    let bmi = 0;

    if (unit === "metric") {
        const height = document.getElementById("height").value;
        const weight = document.getElementById("weight").value;

        if (height === "" || weight === "") {
            document.getElementById("result").innerHTML = "Please enter both values!";
            return;
        }

        const heightM = height / 100;
        bmi = (weight / (heightM * heightM)).toFixed(2);
    }

    else {
        const feet = document.getElementById("feet").value;
        const inches = document.getElementById("inches").value;
        const pounds = document.getElementById("pounds").value;

        if (feet === "" || inches === "" || pounds === "") {
            document.getElementById("result").innerHTML = "Please enter all values!";
            return;
        }

        const totalInches = (parseInt(feet) * 12) + parseInt(inches);

        bmi = ((pounds / (totalInches * totalInches)) * 703).toFixed(2);
    }

    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Healthy Weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obesity";

    document.getElementById("result").innerHTML =
        `Your BMI is <b>${bmi}</b> (${category})`;
}