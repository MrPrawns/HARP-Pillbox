document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.getElementById("prev-month");
  const nextButton = document.getElementById("next-month");
  const monthYearDisplay = document.getElementById("month-year");
  const calendarBody = document.getElementById("calendar-body");

  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  let today = new Date().getDate();
  let currentMonthToday = new Date().getMonth();
  let currentYearToday = new Date().getFullYear();

  const monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
  ];

  function generateCalendar(month, year) {
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      monthYearDisplay.textContent = `${monthNames[month].toUpperCase()} ${year}`;

      let date = 1;
      let calendarHTML = "";

      for (let i = 0; i < 6; i++) { // 6 rows for a complete month view
          let row = "<tr>";
          for (let j = 0; j < 7; j++) {
              if (i === 0 && j < firstDay) {
                  row += "<td></td>"; // Empty cells before first day
              } else if (date > daysInMonth) {
                  row += "<td></td>"; // Empty cells after last day
              } else {
                  let cellClass = "taken";
                  let statusText = "Taken";
                  let todayClass = (date === today && month === currentMonthToday && year === currentYearToday) ? " today" : "";

                  row += `<td class="${cellClass}${todayClass}">${date} <span class="status">${statusText}</span></td>`;
                  date++;
              }
          }
          row += "</tr>";
          calendarHTML += row;
      }
      calendarBody.innerHTML = calendarHTML;
  }

  prevButton.addEventListener("click", function () {
      if (currentMonth === 0) {
          currentMonth = 11;
          currentYear--;
      } else {
          currentMonth--;
      }
      generateCalendar(currentMonth, currentYear);
  });

  nextButton.addEventListener("click", function () {
      if (currentMonth === 11) {
          currentMonth = 0;
          currentYear++;
      } else {
          currentMonth++;
      }
      generateCalendar(currentMonth, currentYear);
  });

  generateCalendar(currentMonth, currentYear);
});
