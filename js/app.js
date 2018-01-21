//Array for the number/character strings
const mathArray = [];

//event on click
$('.calculator').on('click', '.btnCal', function(event){
    event.preventDefault();
    const pressedButton = $(this);
    pressedButton.each(function(){
        //fetching the value from index.html and using it to set our math
        const pressedValue = pressedButton.val();
        if (pressedValue == "c"){
            //if this button is pressed, 1 index is erased from the Array
            $('.digitalDisplay .displayArray, .digitalDisplay .solutionHtml').remove();
            mathArray.pop();
            const displayArray = mathArray.join('');
            const displayHtml = '<div class= "displayArray "><h3>' + displayArray + '</h3></div>';
            $('.digitalDisplay').prepend(displayHtml);
         } else if (pressedValue == "ce") {
            //if this button is pressed, Array goes back to 0 values
            $('.digitalDisplay .displayArray, .digitalDisplay .solutionHtml').remove();
            mathArray.length = 0;
            const displayArray = mathArray.join('');
            const displayHtml = '<div class= "displayArray "><h3>' + displayArray + '</h3></div>';
            $('.digitalDisplay').prepend(displayHtml);
        } else if (pressedValue == "=") {
            //if this button is pressed the result is presented
            $('.digitalDisplay .displayArray, .digitalDisplay .solutionHtml').remove();
            const displayArray = mathArray.join('');
            const displayHtml = '<div class= "displayArray "><h3>' + displayArray + '</h3></div>';
            //evaluate result
            const solution = eval(displayArray);
                if ($.isNumeric(solution)) {
                    const solutionHtml = '<div class="solutionHtml"><h3>' + solution + '</h3></div>';
                    $('.digitalDisplay').prepend(solutionHtml);
                } else {
                    const solutionHtml = "<div class='solutionHtml'><h3>Oops, looks like there's something wrong with your formula</h3></div>";
                    $('.digitalDisplay').prepend(solutionHtml);
                }
                mathArray.length = 0;
        } else {
            //if any other button is pressed:
            $('.digitalDisplay .displayArray , .digitalDisplay .solutionHtml').remove();

            mathArray.push(pressedValue);
            const displayArray = mathArray.join('');
            const displayHtml = '<div class= "displayArray "><h3>' + displayArray + '</h3></div>';
            $('.digitalDisplay').prepend(displayHtml);
       }
    });
});

