const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]
const hours = document.getElementsByClassName('hours')
const previousHours = document.getElementsByClassName('last')
const daily = document.querySelector('#daily')
const weekly = document.querySelector('#weekly')
const monthly = document.querySelector('#monthly')
daily.addEventListener('click', e => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].timeframes.daily.current !== 1) {
            hours[i].textContent = data[i].timeframes.daily.current + 'hrs'
        }
        else {
            hours[i].textContent = data[i].timeframes.daily.current + 'hr'
        }
        if(data[i].timeframes.daily.previous !== 1) {
            previousHours[i].textContent = 'Last week - ' + data[i].timeframes.daily.previous + 'hrs'
        }
        else {
            previousHours[i].textContent = 'Last week - ' + data[i].timeframes.daily.previous + 'hr'
        }
    }
})
weekly.addEventListener('click', e => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].timeframes.weekly.current !== 1) {
            hours[i].textContent = data[i].timeframes.weekly.current + 'hrs'
        }
        else {
            hours[i].textContent = data[i].timeframes.weekly.current + 'hr'
        }
        if(data[i].timeframes.weekly.previous !== 1) {
            previousHours[i].textContent = 'Last week - ' + data[i].timeframes.weekly.previous + 'hrs'
        }
        else {
            previousHours[i].textContent = 'Last week - ' + data[i].timeframes.weekly.previous + 'hr'
        }
    }
})
monthly.addEventListener('click', e => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].timeframes.monthly.current !== 1) {
            hours[i].textContent = data[i].timeframes.monthly.current + 'hrs'
        }
        else {
            hours[i].textContent = data[i].timeframes.monthly.current + 'hr'
        }
        if(data[i].timeframes.monthly.previous !== 1) {
            previousHours[i].textContent = 'Last week - ' + data[i].timeframes.monthly.previous + 'hrs'
        }
        else {
            previousHours[i].textContent = 'Last week - ' + data[i].timeframes.monthly.previous + 'hr'
        }
    }
})
