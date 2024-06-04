(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });  
})(jQuery);

const ctx1 = document.getElementById('temperatura');
const ctx2 = document.getElementById('umidade');
// let temMaxima = Number(30);
// let temMin = Number(1);
// let umiMaxima = Number(60);
// let umiMin = Number(10);

const chartTemperatura = new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    datasets: [{
      label: 'Temperatura',
      data: [],
      borderWidth: 4,
      borderWidth: 4,
      borderColor: 'rgb(143, 0, 0)',
      pointBackgroundColor: 'rgb(143, 0, 0)',
      pointBorderColor: 'rgb(143, 0, 0)',
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: 'rgb(143, 0, 0)',
      backgroundColor: 'rgb(143, 0, 0)'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});

const chartUmidade = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    datasets: [{
      label: 'Umidade',
      data: [],
      borderWidth: 4,
      borderColor: '#33a6e8',
      pointBackgroundColor: '#33a6e8',
      pointBorderColor: '#33a6e8',
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: '#33a6e8',
      backgroundColor: '#33a6e8'
    }]
  },
  plugins: {
    legend: {
      labels: {
        backgroundColor: '#33a6e8'
      }
    }
  }
});

// for (let contador = 0; contador <= 5; contador++) {
//   chartTemperatura.data.datasets[0].data.push(Math.floor((Math.random() * (1 + temMaxima - temMin)) + temMin));
//   chartUmidade.data.datasets[0].data.push(Math.floor((Math.random() * (1 + umiMaxima - umiMin)) + temMin));
// }

// setInterval(function () {
//   let novaTemperatura = Math.floor((Math.random() * (1 + temMaxima - temMin)) + temMin);
//   let novaUmidade = Math.floor((Math.random() * (1 + umiMaxima - umiMin)) + temMin);
//   chartTemperatura.data.datasets[0].data.shift();
//   chartTemperatura.data.datasets[0].data.push(novaTemperatura);
//   chartUmidade.data.datasets[0].data.shift();
//   chartUmidade.data.datasets[0].data.push(novaUmidade);


//   const maxDataPoints = 10;
//   if (chartTemperatura.data.datasets[0].data.length > maxDataPoints) {
//   }
//   if (chartUmidade.data.datasets[0].data.length > maxDataPoints) {
//   }

//   chartTemperatura.update('active');
//   chartUmidade.update('active');
// }, 1000);