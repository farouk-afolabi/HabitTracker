//Initializing Firebase 
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDocs, addDoc, updateDoc, collection, deleteDoc } from
"firebase/firestore";


//Adding logging to my code 
import log from "loglevel";

// Set the log level (trace, debug, info, warn, error)
log.setLevel("info");
// Example logs
log.info("Application started");
log.debug("Debugging information");
log.error("An error occurred");

const firebaseConfig = {
  apiKey: "AIzaSyDcGAwDHCHCOaU73kCYg1dkGCZ9C3XvQng",
  authDomain: "habittracker-f3cf9.firebaseapp.com",
  projectId: "habittracker-f3cf9",
  storageBucket: "habittracker-f3cf9.firebasestorage.app",
  messagingSenderId: "128819965244",
  appId: "1:128819965244:web:de90745c1aef155c73c239",
  measurementId: "G-8WNP6BBD6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);








  const habitForm = document.getElementById("habit-form");
  const habitInput = document.getElementById("habit-input");
  const habitList = document.getElementById("habit-list");
  const totalHabits = document.getElementById("total-habits");
  const completionRate = document.getElementById("completion-rate");


  let habitCache = [];
  // Fetch habits from Firestore
  async function getHabitsFromFirestore() {
    if (habitCache.length > 0) return habitCache; // Return cache if available
    
    try {
      const data = await getDocs(collection(db, "habits"));
      habitCache = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return habitCache;
  } catch (error) {
    console.error("Error fetching habits:", error);
    return [];
  }
}

  // Render the list of habits
  async function renderHabits() {
    habitList.innerHTML = ""; // Clear the current list
    const habits = await getHabitsFromFirestore();

    habits.forEach((habit) => {
      const habitItem = document.createElement("li");
      habitItem.className = "habit-item";
      habitItem.id = habit.id;

      // Add a checkbox to mark habits as completed
      habitItem.innerHTML = `
        <span class="habit-name">${habit.name}</span>
        <input type="checkbox" ${habit.completed ? "checked" : ""} data-id="${habit.id}" class="habit-checkbox">
        <button data-id="${habit.id}" class="edit-button">Edit</button>
        <button data-id="${habit.id}" class="delete-button">Delete</button>
      `;

      habitList.appendChild(habitItem);
    });

    updateStats(); // Update the stats after rendering
  }

  // Add a new habit to Firestore
  async function addHabitToFirestore(habitName) {
    try {
      await addDoc(collection(db, "habits"), {
        name: habitName,
        completed: false,
        history: [],
      });
      renderHabits(); // Refresh the list
    } catch (error) {
      // Log error
      log.error("Error adding task", error);
      console.error("Error adding habit: ", error);
    }
  }

  // Event listener for adding a habit
  habitForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form submission
    const habitName = habitInput.value.trim();

    if (habitName) {
      await addHabitToFirestore(habitName);
      habitInput.value = ""; // Clear the input field
    }
  });

  // Edit a habit
  function editHabit(habitId, currentName) {
    const habitItem = document.getElementById(habitId);
    const habitNameSpan = habitItem.querySelector(".habit-name");
  
    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.value = currentName;
    inputElement.className = "edit-input";
  
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.className = "save-button";
    saveButton.dataset.id = habitId;
  
    habitNameSpan.innerHTML = ""; // Clear the text before appending elements
    habitNameSpan.appendChild(inputElement);
    habitNameSpan.appendChild(saveButton);
  }
  

  // Save the edited habit to Firestore
  async function saveHabit(habitId) {
    const habitItem = document.getElementById(habitId);
    const editInput = habitItem.querySelector(".edit-input");

    if (editInput) {
      const newName = editInput.value.trim();
      try {
        await updateDoc(doc(db, "habits", habitId), { name: newName });
        renderHabits(); // Refresh the list
      } catch (error) {
        console.error("Error updating habit:", error);
      }
    }
  }

  // Toggle the completion status of a habit
  async function toggleCompletion(habitId, currentStatus) {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

    try {
      const habitDoc = doc(db, "habits", habitId);
      await updateDoc(habitDoc, {
        completed: !currentStatus,
        history: [{ date: today, completed: !currentStatus }],
      });
      renderHabits();
    } catch (error) {
      console.error("Error updating habit completion:", error);
    }
  }

  // Delete a habit from Firestore
  async function deleteHabit(habitId) {
    try {
      await deleteDoc(doc(db, "habits", habitId));
      renderHabits(); // Refresh the list
    } catch (error) {
      console.error("Error deleting habit:", error);
    }
  }

  // Update the stats (total habits and completion rate)
  async function updateStats() {
    const habits = await getHabitsFromFirestore();
    const today = new Date().toISOString().split("T")[0];

    const completedToday = habits.filter((habit) =>
      habit.history?.some((entry) => entry.date === today && entry.completed)
    ).length;

    totalHabits.textContent = habits.length;
    const rate = habits.length > 0 ? ((completedToday / habits.length) * 100).toFixed(2) : 0;
    completionRate.textContent = `${rate}%`;
  }

  // Handle click events on the habit list (event delegation)
  habitList.addEventListener("click", async (event) => {
    const target = event.target;
    const habitId = target.dataset.id;

    if (target.classList.contains("delete-button")) {
      await deleteHabit(habitId);
    }

    if (target.classList.contains("habit-checkbox")) {
      await toggleCompletion(habitId, target.checked);
    }

    if (target.classList.contains("edit-button")) {
      const habitName = target.parentElement.querySelector(".habit-name").textContent;
      editHabit(habitId, habitName);
    }

    if (target.classList.contains("save-button")) {
      await saveHabit(habitId);
    }
  });

  renderHabits();


//Adding security & validation
function sanitizeInput(input) {
  const div = document.createElement("div");
  div.textContent = input;
  return div.innerHTML;
}

habitForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const habitName = sanitizeInput(habitInput.value.trim());

  if (habitName) {
    await addHabitToFirestore(habitName);
    habitInput.value = ""; 
  }
});




//Error Logging 
window.addEventListener('error', function (event) {
  console.error('Error occurred: ', event.message);
 });

 //Service worker registeration
 const sw = new URL('service-worker.js', import.meta.url)
if ('serviceWorker' in navigator) {
 const s = navigator.serviceWorker;
 s.register(sw.href, {
 scope: '/HabitTracker/'
 })
 .then(_ => console.log('Service Worker Registered for scope:', sw.href,
'with', import.meta.url))
 .catch(err => console.error('Service Worker Error:', err));
}
