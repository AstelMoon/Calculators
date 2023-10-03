// circle calculator

// class circle is like a blueprint for creating circles. we're telling the computer what a circle is and how to calculate its area and circumference.
// constructor(radius) is like a button that creates a circle. we tell the computer how big the circle should be by giving it a radius
// this.radius = radius stores the variable(radius) in the circle so we can use it later
// calculateArea() figures out the area of the circle by taking the radius and multiplying it by itself and then multiplying it by pi
// calculateCircumference() figures out "how long" (circumference) the circle is by taking the radius and multiplying it by 2 and then multiplying it by pi

class Circle {                          
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// calculate() is the function that runs when you click the button
// const radius = parseFloat() takes the number you typed in the box and turns it into a number that the computer can use
// if (!isNaN(radius)) checks to make sure that you typed in a number and not something else. if you typed in something else, it will show an error message
// const circle = new Circle(radius) creates a circle with the radius you typed in the box and tells the PC to make a circle that size
// const area = circle.calculateArea().toFixed(2) tells the PC to calculate the area of the circle and round it to 2 decimal places
// const circumference = circle.calculateCircumference().toFixed(2) tells the PC to calculate the circumference of the circle and round it to 2 decimal places
// document.getElementById("circleResult").innerHTML = ` tells the PC to put the results in the box
// <strong>Circle with Radius ${radius}:</strong><br> tells the PC to put the radius in the box and display as such
// <strong> tells the PC to make the text bold
// <br> tells the PC to make a new line
// Area: ${area}<br> tells the PC to put the area in the box and display as such
// Circumference: ${circumference} tells the PC to put the circumference in the box and display as such
// `; tells the PC that the text is done and to put it in the box
// else { document.getElementById("circleResult").innerHTML = "Please enter a valid radius."; } tells the PC to put an error message in the box if you didn't type in a number
function calculate() {
    const radius = parseFloat(document.getElementById("radiusInput").value);
    if (!isNaN(radius)) {
        const circle = new Circle(radius);
        const area = circle.calculateArea().toFixed(2);
        const circumference = circle.calculateCircumference().toFixed(2);

        document.getElementById("circleResult").innerHTML = `
            <strong>Circle with a Radius of ${radius} in:</strong><br>
            Area: ${area} in<br>
            Circumference: ${circumference} in
        `;
    } else {
        document.getElementById("circleResult").innerHTML = "Please enter a valid radius.";
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// rectangle calculator

// document.addEventListener('DOMContentLoaded', function () { tells the PC to wait until the page is loaded before running the code
// const lengthInput = document.getElementById('Length'); is like a label where you type in the length of the rectangle
// const widthInput = document.getElementById('Width'); is like a label where you type in the width of the rectangle
// const calculateBtn = document.getElementById('calculateBtn'); is the button that you click to calculate the area and perimeter
// const areaSpan = document.getElementById('area'); is the box where the area will be displayed
// const perimeterSpan = document.getElementById('perimeter'); is the box where the perimeter will be displayed

// calculateBtn.addEventListener('click', function () { tells the PC to run the code when you click the button
// const length = parseInt(lengthInput.value); looks at the number you wrote in the length box and turns it into a number the PC can use
// const width = parseInt(widthInput.value); looks at the number you wrote in the width box and turns it into a number the PC can use

// if (!isNaN(length) && !isNaN(width)) checks to make sure that you typed in a number and not something else. if you typed in something else, it will show an error message

// const area = length * width; tells the PC to calculate the area of the rectangle
// const perimeter = 2 * (length + width); tells the PC to calculate the perimeter of the rectangle

// areaSpan.textContent = area.toFixed(2); tells the PC to put the area in the box and round it to 2 decimal places
// perimeterSpan.textContent = perimeter.toFixed(2); tells the PC to put the perimeter in the box and round it to 2 decimal places

// } else { alert('Please enter valid length and width values.'); } tells the PC to show an error message if you didn't type in a number


document.addEventListener('DOMContentLoaded', function () {
    const lengthInput = document.getElementById('length');
    const widthInput = document.getElementById('width');
    const calculateBtn = document.getElementById('calculateBtn');
    const areaSpan = document.getElementById('area');
    const perimeterSpan = document.getElementById('perimeter');

    calculateBtn.addEventListener('click', function () {
        const length = parseInt(lengthInput.value);
        const width = parseInt(widthInput.value);

        if (!isNaN(length) && !isNaN(width)) {
            const area = length * width;
            const perimeter = 2 * (length + width);

            areaSpan.textContent = area.toFixed(2);
            perimeterSpan.textContent = perimeter.toFixed(2);

        } else {
            alert('Please enter valid length and width values.');
        }
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// fahrenheit to celsius calculator

// function convert() is the function that runs when you click the button
// const fahrenheit = parseFloat() takes the number you typed in the box and turns it into a number that the computer can use
// if (!isNaN(fahrenheit)) checks to make sure that you typed in a number and not something else. if you typed in something else, it will show an error message
// const celsius = (5/9) * (fahrenheit - 32); tells the PC to calculate the celsius
// document.getElementById("tempResult").innerHTML = `${fahrenheit}°F is approximately ${celsius.toFixed(2)}°C.`; tells the PC to put the results in the box
// else { document.getElementById("tempResult").innerHTML = "Please enter a valid temperature in Fahrenheit."; } tells the PC to put an error message in the box if you didn't type in a number
// toFixed(2) tells the PC to round the number to 2 decimal places

function convert() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    if (!isNaN(fahrenheit)) {
        const celsius = (5/9) * (fahrenheit - 32);
        document.getElementById("fahResult").innerHTML = `${fahrenheit}°F is approximately ${celsius.toFixed(2)}°C.`;
    } else {
        document.getElementById("fahResult").innerHTML = "Please enter a valid temperature in Fahrenheit.";
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// celsius to fahrenheit calculator

// class TempConverterCtF is like a blueprint for creating a temperature converter. we're telling the computer what a temperature converter is and how to convert celsius to fahrenheit.
// constructor(celsius) is like a button that creates a temperature converter. we tell the computer how many degrees celsius we want to convert to fahrenheit
// this.celsius = celsius stores the variable(celsius) in the temperature converter so we can use it later
// convertToFahrenheit() figures out how many degrees fahrenheit the temperature converter is by taking the celsius and multiplying it by 9/5 and then adding 32

class TempConverterCtF {
    constructor(celsius) {
        this.celsius = celsius;
    }
    convertToFahrenheit() {
        return (9/5 * this.celsius) + 32;
    }
}

// convertTemperatureCtF() is the function that runs when you click the button. it's the same as the function convert() above, except it uses the class TempConverterCtF instead of the function convert().
// const celsiusInput = document.getElementById("celsiusInput").value; is like a label where you type in the temperature in celsius
// const celsius = parseFloat(celsiusInput); looks at the number you wrote in the celsius box and turns it into a number the PC can use
// if (!isNaN(celsius)) checks to make sure that you typed in a number and not something else. if you typed in something else, it will show an error message
// const converter = new TempConverterCtF(celsius); creates a temperature converter with the celsius you typed in the box and tells the PC to make a temperature converter that size
// new means that we're creating a new object. TempConverterCtF is the class we're using to create the object. (celsius) is the variable we're using to create the object.
// const fahrenheit = converter.convertToFahrenheit(); tells the PC to calculate the fahrenheit of the temperature converter
// document.getElementById("celsiusResult").innerHTML = `${celsius}°C is approximately ${fahrenheit.toFixed(2)}°F.`; tells the PC to put the results in the box
// else { document.getElementById("celsiusResult").innerHTML = "Please enter a valid temperature in degrees Celsius."; } tells the PC to put an error message in the box if you didn't type in a number
// toFixed(2) tells the PC to round the number to 2 decimal places


function convertTemperatureCtF() {
    const celsiusInput = document.getElementById("celsiusInput").value;
    const celsius = parseFloat(celsiusInput);

    if (!isNaN(celsius)) {
        const converter = new TempConverterCtF(celsius);
        const fahrenheit = converter.convertToFahrenheit();
        document.getElementById("celsiusResult").innerHTML = `${celsius}°C is approximately ${fahrenheit.toFixed(2)}°F.`;
    } else {
        document.getElementById("celsiusResult").innerHTML = "Please enter a valid temperature in degrees Celsius.";
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// c to f temperature converter

// class TempConverter is like a blueprint for creating a temperature converter. we're telling the computer what a temperature converter is and how to convert celsius to fahrenheit and fahrenheit to celsius.
// constructor(temperature) is like a button that creates a temperature converter. we tell the computer how many degrees we want to convert
// this.temperature = temperature stores the variable(temperature) in the temperature converter so we can use it later
// this. means that we're storing the variable in the temperature converter
// celsiusToFahrenheit() figures out how many degrees fahrenheit the temperature converter is by taking the temperature and multiplying it by 9/5 and then adding 32
// fahrenheitToCelsius() figures out how many degrees celsius the temperature converter is by taking the temperature and subtracting 32 and then multiplying it by 5/9
// return means that we're giving the answer back to the computer so it can use it later

class TempConverter {
    constructor(temperature) {
        this.temperature = temperature;
    }
    celsiusToFahrenheit() {
        return (9/5 * this.temperature) + 32;
    }
    fahrenheitToCelsius() {
        return (5/9 * (this.temperature - 32));
    }
}

// convertTemperature() is the function that runs when you click the button. it's the same as the function convert() above, except it uses the class TempConverter instead of the function convert().
// const conversionType = document.getElementById("conversionType").value; is like a label where you choose which conversion you want to do
// const temperatureInput = document.getElementById("temperatureInput").value; is like a label where you type in the temperature
// const temperature = parseFloat(temperatureInput); looks at the number you wrote in the temperature box and turns it into a number the PC can use

// if (!isNaN(temperature)) checks to make sure that you typed in a number and not something else. if you typed in something else, it will show an error message
// const converter = new TempConverter(temperature); creates a temperature converter with the temperature you typed in the box and tells the PC to make a temperature converter that size
// let result; tells the PC that we're going to use the variable result later
// let means that we're creating a variable that we can change later
// if (conversionType === "celsiusToFahrenheit") { checks to see if you chose celsius to fahrenheit
// result = converter.celsiusToFahrenheit(); tells the PC to calculate the fahrenheit of the temperature converter
// document.getElementById("tempResult").innerHTML = `${temperature}°C is equal to ${result.toFixed(2)}°F.`; tells the PC to put the results in the box
// '${}' means that we're putting a variable in the text. the variable is result.   
// else if (conversionType === "fahrenheitToCelsius") { checks to see if you chose fahrenheit to celsius
// then does calculations for fahrenheit to celsius
// else { document.getElementById("tempResult").innerHTML = "Please enter a valid temperature."; } tells the PC to put an error message in the box if you didn't type in a number
// toFixed(2) tells the PC to round the number to 2 decimal places


function convertTemperature() {
    const conversionType = document.getElementById("conversionType").value;
    const temperatureInput = document.getElementById("temperatureInput").value;
    const temperature = parseFloat(temperatureInput);

    if (!isNaN(temperature)) {
        const converter = new TempConverter(temperature);
        let result;

        if (conversionType === "celsiusToFahrenheit") {
            result = converter.celsiusToFahrenheit();
            document.getElementById("tempResult").innerHTML = `${temperature}°C is equal to ${result.toFixed(2)}°F.`;
        } else if (conversionType === "fahrenheitToCelsius") {
            result = converter.fahrenheitToCelsius();
            document.getElementById("tempResult").innerHTML = `${temperature}°F is equal to ${result.toFixed(2)}°C.`;
        }
    } else {
        document.getElementById("tempResult").innerHTML = "Please enter a valid temperature.";
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// payroll calculator

// function calculatePayroll() is the function that runs when you click the button
// const hoursWorked = parseFloat() takes the number you typed in the box and turns it into a number that the computer can use
// const hourlyWage = parseFloat() takes the number you typed in the box and turns it into a number that the computer can use

// if (!isNaN(hoursWorked) && !isNaN(hourlyWage)) checks to make sure that you typed in a number and not something else. if you typed in something else, it will show an error message
// let totalPay; tells the PC that we're going to use the variable totalPay later

// if (hoursWorked <= 40) { checks to see if you worked 40 hours or less}
// totalPay = hoursWorked * hourlyWage; tells the PC to calculate the total pay.
// else { checks to see if you worked more than 40 hours}
// const regularPay = 40 * hourlyWage; tells the PC to calculate the regular pay for 40 hours
// const overtimeHours = hoursWorked - 40; tells the PC to calculate the overtime hours
// const overtimePay = overtimeHours * (hourlyWage * 1.5); tells the PC to calculate the overtime pay
// totalPay = regularPay + overtimePay; tells the PC to calculate the total pay

// document.getElementById("payrollResult").innerHTML = `Total Pay: $${totalPay.toFixed(2)}`; tells the PC to put the results in the box
// $${} means that we're putting a variable in the text
// the $$ mean that we're putting a dollar sign in the text
// toFixed(2) tells the PC to round the number to 2 decimal places. this is important because we're dealing with money and we don't want to have a bunch of extra numbers after the decimal point.
// else { document.getElementById("payrollResult").innerHTML = "Please enter valid hours worked and hourly wage."; } tells the PC to put an error message in the box if you didn't type in a number.


function calculatePayroll() {
    const hoursWorked = parseFloat(document.getElementById("hoursWorkedInput").value);
    const hourlyWage = parseFloat(document.getElementById("hourlyWageInput").value);

    if (!isNaN(hoursWorked) && !isNaN(hourlyWage)) {
        let totalPay;

        if (hoursWorked <= 40) {
            totalPay = hoursWorked * hourlyWage;
        } else {
            const regularPay = 40 * hourlyWage;
            const overtimeHours = hoursWorked - 40;
            const overtimePay = overtimeHours * (hourlyWage * 1.5);
            totalPay = regularPay + overtimePay;
        }

        document.getElementById("payrollResult").innerHTML = `Total Pay: $${totalPay.toFixed(2)}`;
    } else {
        document.getElementById("payrollResult").innerHTML = "Please enter valid hours worked and hourly wage.";
    }
}