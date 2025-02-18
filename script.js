document.addEventListener('DOMContentLoaded', () => {
  const habitForm = document.getElementById('habit-form');
  const habitInput = document.getElementById('habit-input');
  const habitList = document.getElementById('habit-list');
  const totalHabits = document.getElementById('total-habits');
  const completionRate = document.getElementById('completion-rate');

  let habits = JSON.parse(localStorage.getItem('habits')) || [];

  function renderHabits() {
    habitList.innerHTML = '';
    habits.forEach((habit, index) => {
      const habitItem = document.createElement('li');
      habitItem.className = 'habit-item';
      habitItem.innerHTML = `
        <span>${habit.name}</span>
        <input type="checkbox" ${habit.completed ? 'checked' : ''} onchange="toggleCompletion(${index})">
        <button onclick="deleteHabit(${index})">Delete</button>
      `;
      habitList.appendChild(habitItem);
    });
    updateStats();
  }

  function addHabit(event) {
    event.preventDefault();
    const habitName = habitInput.value.trim();
    if (habitName) {
      habits.push({ name: habitName, completed: false, history: [] });
      habitInput.value = '';
      localStorage.setItem('habits', JSON.stringify(habits));
      renderHabits();
    }
  }

  function toggleCompletion(index) {
    habits[index].completed = !habits[index].completed;
    habits[index].history.push({ date: new Date().toISOString().split('T')[0], completed: habits[index].completed });
    localStorage.setItem('habits', JSON.stringify(habits));
    renderHabits();
  }

  function deleteHabit(index) {
    habits.splice(index, 1);
    localStorage.setItem('habits', JSON.stringify(habits));
    renderHabits();
  }

  function updateStats() {
    totalHabits.textContent = habits.length;
    const completedHabits = habits.filter(habit => habit.completed).length;
    const rate = habits.length > 0 ? ((completedHabits / habits.length) * 100).toFixed(2) : 0;
    completionRate.textContent = `${rate}%`;
  }

  habitForm.addEventListener('submit', addHabit);
  renderHabits();
});