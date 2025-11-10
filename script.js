function calculate() {
  let bmi, category;
  const result = document.getElementById("result");

  // Get height (in cm) and weight (in kg)
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);

  // Display current slider values
  document.getElementById("weight-val").textContent = weight + " kg";
  document.getElementById("height-val").textContent = height + " cm";

  // BMI formula (height converted from cm to meters)
  bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  result.textContent = bmi;

  // Determine BMI category
  if (bmi < 18.5) {
    category = "Underweight 😒";
    result.style.color = "#ffc44d";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal Weight 😍";
    result.style.color = "#0be881";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight 😮";
    result.style.color = "#ff884d";
  } else {
    category = "Obese 😱";
    result.style.color = "#ff5e57";
  }

  document.getElementById("category").textContent = category;
}
