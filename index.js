import { DateTime } from './node_modules/luxon/src/luxon.js';
import navigation from './modules/navigation.js';
import display from './modules/display.js';

const date = document.getElementById('date');
const displayDate = (date) => {
  setInterval(() => {
    date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }, 1000);
};
displayDate(date);
navigation();
display();
