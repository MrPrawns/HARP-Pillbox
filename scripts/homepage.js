import { users, timings } from "../data/patient-details.js";

document.addEventListener("DOMContentLoaded", function () {
  
  
  function populatePills() {
      const pillContainer = document.querySelector(".pill-container");
      pillContainer.innerHTML = ""; // Clear existing content

      const user = users[0]; // Assuming single user for now

      // Loop through morning, afternoon, and night pills
      Object.entries(user.times).forEach(([timePeriod, pills]) => {
          Object.values(pills).forEach(pill => {
              const pillCard = document.createElement("div");
              pillCard.classList.add("pill-card", pill.isTaken ? "taken" : "not-taken");
              
              pillCard.innerHTML = `
                  <img src="images/icons/medicine.png" alt="Pill Icon">
                  <p class="pill-name">${pill.name}</p>
                  <p class="pill-dosage">Dosage: ${pill.dosage}</p>
                  <p class="pill-time">${timings[timePeriod.replace("Pills", "")]}</p>
                  <p class="pill-status">${pill.isTaken ? "Taken" : "Not Taken"}</p>
              `;
              
              pillContainer.appendChild(pillCard);
          });
      });
  }

  populatePills();
});

import { restockDate } from "../data/patient-details.js";

document.addEventListener("DOMContentLoaded", function () {
    function updateRestockSection() {
        const startDateElement = document.querySelector(".start-date");
        const endDateElement = document.querySelector(".end-date");
        const restockDaysElement = document.querySelector(".restock-days");

        // Convert restockDate (string) to a Date object
        const startDate = new Date(restockDate);

        // Add 7 days to get the end date
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 7);

        // Format the end date
        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedEndDate = endDate.toLocaleDateString("en-US", options);

        // Calculate days remaining
        const today = new Date();
        const timeDiff = endDate - today;
        const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

        // Ensure daysRemaining doesn't go negative
        const displayDays = daysRemaining > 0 ? daysRemaining : 0;

        // Update the HTML content
        startDateElement.textContent = `Start Date: ${restockDate}`;
        endDateElement.textContent = `End Date: ${formattedEndDate}`;
        restockDaysElement.textContent = displayDays;
    }

    updateRestockSection();
});


document.addEventListener("DOMContentLoaded", function () {
  const user = users.find(user => user.userId === "001");
  let lastSevenDaysData = [];

  if (user) {
      lastSevenDaysData = user.pillTakingData.slice(-7);
  }

  lastSevenDaysData.reverse();

  const historyContainer = document.querySelector(".history-container");
  let html = '';

  // Get today's date
  let currentDate = new Date();

  lastSevenDaysData.forEach((dayData, index) => {
      // Calculate the date for each history entry
      let historyDate = new Date();
      historyDate.setDate(currentDate.getDate() - index);

      // Format the date (e.g., "March 21")
      const options = { month: "long", day: "numeric" };
      let formattedDate = historyDate.toLocaleDateString("en-US", options);

      // Get the day name (e.g., "Sunday")
      const dayOptions = { weekday: "long" };
      let dayName = historyDate.toLocaleDateString("en-US", dayOptions);

      html += `
      <div class="history-card">
          <div class="history-header">
              <img src="images/icons/calendar.png" alt="Calendar Icon">
              <p class="history-date">
                  <span class="history-day">${dayName}</span>
                  <span class="history-month-date">${formattedDate}</span>
              </p>
          </div>
          <div class="history-checkboxes">
              <label><input type="checkbox" disabled ${dayData[0] ? "checked" : ""}> Morning</label>
              <label><input type="checkbox" disabled ${dayData[1] ? "checked" : ""}> Afternoon</label>
              <label><input type="checkbox" disabled ${dayData[2] ? "checked" : ""}> Night</label>
          </div>
      </div>
      `;
  });

  historyContainer.innerHTML = html;
});

