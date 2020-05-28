const ctx = document.getElementById('myChart').getContext('2d');

let chartData = 0;

function getButtonClickCount(e){
    e.preventDefault();

    let clickCount = document.querySelector('.btn');
    clickCount.addEventListener('click')


}

let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'transparent',
            borderColor: 'rgb(255, 99, 132)',
            data: []
          
        }],
 
    },


    // Configuration options go here
    options: {}



    // adding a counter button for testing
    
    
});