document.addEventListener('DOMContentLoaded', () => {
  const habitForm = document.getElementById('habit-form');
  const habitInput = document.getElementById('habit-input');
  const habitList = document.getElementById('habit-list');
  const totalHabits = document.getElementById('total-habits');
  const completionRate = document.getElementById('completion-rate');

  // Load habits from localStorage or initialize an empty array
  let habits = JSON.parse(localStorage.getItem('habits')) || [];

  // Render the list of habits
  function renderHabits() {
    habitList.innerHTML = ''; // Clear the current list
    habits.forEach((habit, index) => {
      const habitItem = document.createElement('li');
      habitItem.className = 'habit-item';
      // Add a checkbox to mark habits as completed
      habitItem.innerHTML = `
        <span>${habit.name}</span>
        <input type="checkbox" ${habit.completed ? 'checked' : ''} data-index="${index}" class="habit-checkbox">
        <button data-index="${index}" class="delete-button">Delete</button>
      `;
      habitList.appendChild(habitItem);
    });
    updateStats(); // Update the stats after rendering
  }

  // Add a new habit
  function addHabit(event) {
    event.preventDefault(); // Prevent form submission
    const habitName = habitInput.value.trim(); // Get the habit name
    if (habitName) {
      // Add the new habit with a history array to track completions
      habits.push({ name: habitName, completed: false, history: [] });
      habitInput.value = ''; // Clear the input field
      localStorage.setItem('habits', JSON.stringify(habits)); // Save to localStorage
      renderHabits(); // Re-render the list
    }
  }

  // Toggle the completion status of a habit
  function toggleCompletion(index) {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const habit = habits[index];

    // Toggle the completion status
    habit.completed = !habit.completed;

    // Add today's completion status to the habit's history
    habit.history.push({ date: today, completed: habit.completed });

    // Save the updated habits to localStorage
    localStorage.setItem('habits', JSON.stringify(habits));

    // Re-render the list and update stats
    renderHabits();
  }

  // Delete a habit
  function deleteHabit(index) {
    habits.splice(index, 1); // Remove the habit from the array
    localStorage.setItem('habits', JSON.stringify(habits)); // Save to localStorage
    renderHabits(); // Re-render the list
  }

  // Update the stats (total habits and completion rate)
  function updateStats() {
    const today = new Date().toISOString().split('T')[0]; // Get today's date

    // Calculate the number of habits completed today
    const completedToday = habits.filter(habit => 
      habit.history.some(entry => entry.date === today && entry.completed)
    ).length;

    // Update the total number of habits
    totalHabits.textContent = habits.length;

    // Calculate the completion rate for today
    const rate = habits.length > 0 ? ((completedToday / habits.length) * 100).toFixed(2) : 0;
    completionRate.textContent = `${rate}%`;
  }

  // Handle click events on the habit list (event delegation)
  habitList.addEventListener('click', (event) => {
    const target = event.target;

    // Check if the delete button was clicked
    if (target.classList.contains('delete-button')) {
      const index = target.dataset.index; // Get the index from the data attribute
      deleteHabit(index); // Call the deleteHabit function
    }

    // Check if the checkbox was clicked
    if (target.classList.contains('habit-checkbox')) {
      const index = target.dataset.index; // Get the index from the data attribute
      toggleCompletion(index); // Call the toggleCompletion function
    }
  });

  // Add an event listener to the form for adding habits
  habitForm.addEventListener('submit', addHabit);

  // Render the initial list of habits
  renderHabits();
});