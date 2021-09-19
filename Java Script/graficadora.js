var ctx = document.getElementById('myChart');
var ctx = document.getElementById('myChart').getContext('2d');
var ctx = 'myChart';
var realizar=document.getElementById("realizar")
var torta=document.getElementById("torta")
var linea=document.getElementById("linea")
var barra=document.getElementById("barra")

torta.onclick= function(e){
realizar.onclick= function(e){
    let valor=document.getElementById("data").value;
    let etiqueta=document.getElementById("label").value;
    let arr = etiqueta.split(',');
    let arr2 = valor.split(',');  
    console.log(arr2);
    console.log(arr);
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: arr,
            datasets: [{
                axis: 'x',
                label: 'valores',
                data: arr2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
}

linea.onclick= function(e){
    realizar.onclick= function(e){



        let valor=document.getElementById("data").value;
        let etiqueta=document.getElementById("label").value;
        let arr = etiqueta.split(',');
        let arr2 = valor.split(',');  
        console.log(arr2);
        console.log(arr);
        var ctx = document.getElementById('myChart');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: arr2,
                datasets: [{
                    axis: 'y',
                    label: 'curva',
                    data: arr,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'x',
                scales: {
                    x: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    }

    barra.onclick= function(e){
        realizar.onclick= function(e){
    
    
    
            let valor=document.getElementById("data").value;
            let etiqueta=document.getElementById("label").value;
            let arr = etiqueta.split(',');
            let arr2 = valor.split(',');  
            console.log(arr2);
            console.log(arr);
            var ctx = document.getElementById('myChart');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: arr2,
                    datasets: [{
                        label: '',
                        data: arr,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    indexAxis: 'x',
                    scales: {
                        x: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
        }
    