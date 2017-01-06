function answerChanged() {
  var newTotal = 0;

  var percentages = document.getElementsByClassName('percentage');
  var count = percentages.length

  var i
  for (i=0; i < count; i++) {
    var percentage = percentages[i].value
    if (percentage === '') {
      continue;
    }

    var value = parseInt(percentage)
    if (value != 'NaN') {
      newTotal += value
    }
  }

  updateTotal(newTotal)
}

function updateTotal(value) {
  document.getElementById('total').value = value
  document.getElementById('subtotal').innerHTML = value + '%'
  var indicator = document.getElementById('total-container')
  if (value > 100 || value < 0)  {
    // bad
    indicator.classList.remove('good')
    indicator.classList.add('bad')
  } else if (value == 100) {
    // good
    indicator.classList.remove('bad')
    indicator.classList.add('good')
  } else if (value < 100 && value >= 0) {
    // normal
    indicator.classList.remove('good')
    indicator.classList.remove('bad')
  }
}
