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
        <span class="habit-name">${habit.name}</span>
        <input type="checkbox" ${habit.completed ? 'checked' : ''} data-index="${index}" class="habit-checkbox">
        <button data-index="${index}" class="edit-button">Edit</button>
        <button data-index="${index}" class="delete-button">Delete</button>
      `;
      habitList.appendChild(habitItem);
    });
    updateStats(); // Update the stats after rendering
  }

  // Edit a habit
  function editHabit(index) {
    const habitItem = document.querySelectorAll('.habit-item')[index];
    const habitNameSpan = habitItem.querySelector('.habit-name');
    const currentName = habits[index].name;

    // Replace the habit name with an input field and a save button
    habitNameSpan.innerHTML = `
      <input type="text" value="${currentName}" class="edit-input">
      <button class="save-button" data-index="${index}">Save</button>
    `;
  }

  // Save the edited habit
  function saveHabit(index) {
    const habitItem = document.querySelectorAll('.habit-item')[index];
    const editInput = habitItem.querySelector('.edit-input');

    if (editInput) {
      habits[index].name = editInput.value.trim();
      localStorage.setItem('habits', JSON.stringify(habits));
      renderHabits(); // Refresh the list
    }
  }

  // Add a new habit
  function addHabit(event) {
    event.preventDefault(); // Prevent form submission
    const habitName = habitInput.value.trim(); // Get the habit name
    if (habitName) {
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

    habit.completed = !habit.completed;
    habit.history.push({ date: today, completed: habit.completed });

    localStorage.setItem('habits', JSON.stringify(habits));
    renderHabits();
  }

  // Delete a habit
  function deleteHabit(index) {
    habits.splice(index, 1);
    localStorage.setItem('habits', JSON.stringify(habits));
    renderHabits();
  }

  // Update the stats (total habits and completion rate)
  function updateStats() {
    const today = new Date().toISOString().split('T')[0];

    const completedToday = habits.filter(habit => 
      habit.history.some(entry => entry.date === today && entry.completed)
    ).length;

    totalHabits.textContent = habits.length;
    const rate = habits.length > 0 ? ((completedToday / habits.length) * 100).toFixed(2) : 0;
    completionRate.textContent = `${rate}%`;
  }

  // Handle click events on the habit list (event delegation)
  habitList.addEventListener('click', (event) => {
    const target = event.target;
    const index = target.dataset.index;

    if (target.classList.contains('delete-button')) {
      deleteHabit(index);
    }

    if (target.classList.contains('habit-checkbox')) {
      toggleCompletion(index);
    }

    if (target.classList.contains('edit-button')) {
      editHabit(index);
    }

    if (target.classList.contains('save-button')) {
      saveHabit(index);
    }
  });

  habitForm.addEventListener('submit', addHabit);
  renderHabits();
});

//Error Logging 
window.addEventListener('error', function (event) {
  console.error('Error occurred: ', event.message);
 });
