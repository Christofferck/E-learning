function showQ2() {
  document.getElementById("question2").style.display = "flex";
  document.getElementById("fact1").style.display = "flex";
  var x = document.getElementsByName("q1selector");
  for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function(event){
    event.preventDefault()
    });
  }
  var x = document.getElementById("question1");
  x.getElementsByTagName("label")[2].style.color = "green";
  x.getElementsByClassName("radio")[2].style.border = "5px solid green";
  // var color = window.getComputedStyle(
	//    document.querySelector('.radioGreen'), ':before'
  //  ).getPropertyValue('color');
  // color = "blue";
  // console.log(color);
}

function showQ3() {
  document.getElementById("question3").style.display = "flex";
  document.getElementById("fact2").style.display = "flex";
  var x = document.getElementsByName("q2selector");
  for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function(event){
    event.preventDefault()
    });
  }
  var x = document.getElementById("question2");
  x.getElementsByTagName("label")[1].style.color = "green";
  x.getElementsByClassName("radio")[1].style.border = "5px solid green";
}

function showQ4() {
  document.getElementById("question4").style.display = "flex";
  document.getElementById("fact3").style.display = "flex";
  var x = document.getElementsByName("q3selector");
  for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function(event){
    event.preventDefault()
    });
  }
  var x = document.getElementById("question3");
  x.getElementsByTagName("label")[3].style.color = "green";
  x.getElementsByClassName("radio")[3].style.border = "5px solid green";
}

function showQ5() {
  document.getElementById("question5").style.display = "flex";
  document.getElementById("fact4").style.display = "flex";
  var x = document.getElementsByName("q4selector");
  for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function(event){
    event.preventDefault()
    });
  }
  var x = document.getElementById("question4");
  x.getElementsByTagName("label")[1].style.color = "green";
  x.getElementsByClassName("radio")[1].style.border = "5px solid green";
}

function showQ5Fact() {
  document.getElementById("fact5").style.display = "flex";
  document.getElementsByTagName("button")[0].style.display = "flex";
  var x = document.getElementsByName("q5selector");
  for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function(event){
    event.preventDefault()
    });
  }
  var x = document.getElementById("question5");
  x.getElementsByTagName("label")[0].style.color = "green";
  x.getElementsByClassName("radio")[0].style.border = "5px solid green";
}

var answer = new Array(4);
answer[0] = "q1a3";
answer[1] = "q2a2";
answer[2] = "q3a4";
answer[3] = "q4a2";
answer[4] = "q5a1";

var right_answers = 0;
var wrong_answers = 0;

function test(form) {
  document.getElementsByTagName("button")[0].style.backgroundColor = "white";
  document.getElementsByTagName("button")[0].style.cursor = "default";

  // Reset the numbers
  right_answers = 0;
  wrong_answers = 0;

  for (j=0; j<5; j++) {
    currQuestion = j*4;
    for (i=0; i<4; i++) {
      if (form.elements[i+currQuestion].checked) {
        if (form.elements[i+currQuestion].value == answer[j]) {
          right_answers++;
        }
        else {
          wrong_answers++;
        }
      }

      if(j ==  4 && i == 3)
        drawChart();
        if (right_answers == 0) {
          document.getElementsByTagName("button")[0].innerHTML = "Du har ingen rigtige svar...";
        }

        else if (right_answers == 1) {
          document.getElementsByTagName("button")[0].innerHTML = "Du har " + right_answers + " svar rigtigt";
        }

        else if (right_answers == 5) {
          document.getElementsByTagName("button")[0].innerHTML = "Du har alle svar rigtige!!!";
        }

        else {
          document.getElementsByTagName("button")[0].innerHTML = "Du har " + right_answers + " svar rigtige";
        }
      }
    }
}

google.charts.load('current', {'packages':['corechart']});

function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Rigtige', right_answers],
  ['Forkerte', wrong_answers]
]);
  var options = {
    'width':500,
    'height':500,
    theme: 'maximized'
  };
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
