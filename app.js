// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
// Import loglevel
import log from 'loglevel';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDcGAwDHCHCOaU73kCYg1dkGCZ9C3XvQng",
  authDomain: "habittracker-f3cf9.firebaseapp.com",
  projectId: "habittracker-f3cf9",
  storageBucket: "habittracker-f3cf9.firebasestorage.app",
  messagingSenderId: "128819965244",
  appId: "1:128819965244:web:de90745c1aef155c73c239",
  measurementId: "G-8WNP6BBD6P"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// DOM elements
const habitForm = document.getElementById("habit-form");
const habitInput = document.getElementById("habit-input");
const habitDate = document.getElementById('habit-date');
const habitList = document.getElementById("habitList");
const totalHabits = document.getElementById("total-habits");
const completionRate = document.getElementById("completion-rate");

// Form submission handler
habitForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const habit = habitInput.value.trim();
  const date = habitDate.value;
  
  if (!habit || !date) {
      alert("Please enter both habit and date!");
      return;
  }
  
  try {
      const habitName = sanitizeInput(habit);
      if (!habitName) {
          throw new Error("Invalid habit name");
      }
      await addHabitToFirestore(habitName, date);
      renderHabits();
      habitInput.value = "";
      habitDate.value = "";
  } catch (error) {
      console.error("Error details:", error);
      alert(`Failed to add habit: ${error.message || "Unknown error"}`);
  }
});

// Add Habit when Enter Key is Pressed in Input Field
habitInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        habitForm.requestSubmit();
    }
});

// Add habit to Firestore
async function addHabitToFirestore(habitName, habitDate) {
  try {
      const docRef = await addDoc(collection(db, "habits"), {
          name: habitName,
          completed: false,
          history: [{
              date: habitDate,
              completed: false
          }]
      });
      log.info(`Successfully added habit: ${habitName}`);
      return docRef.id;
  } catch (error) {
      log.error("Firestore error:", error);
      if (error.code) {
          throw new Error(`Firestore error: ${error.code}`);
      }
      throw error;
  }
}

async function getHabitsFromFirestore() {
  try {
      const data = await getDocs(collection(db, "habits"));
      return data.docs;
  } catch (error) {
      log.error("Error fetching habits:", error);
      if (error.code === 'permission-denied') {
          throw new Error("Permission denied. Check your Firebase rules.");
      }
      throw error;
  }
}

// Retrieving the list of habits
async function renderHabits() {
  try {
      const habits = await getHabitsFromFirestore();
      habitList.innerHTML = "";
      
      habits.forEach((habit) => {
              const habitData = habit.data();
              const habitItem = document.createElement("li");
              habitItem.className = "habit-item";
              habitItem.id = habit.id;
              habitItem.tabIndex = 0;
              

              // Apply style if the habit is completed
            if (habitData.completed) {
                habitItem.style.textDecoration = "line-through"; // Strikethrough completed habits
                habitItem.style.color = "red"; // Change color for completed habits
            }

              // Habit name
              const habitName = document.createElement("span");
              habitName.textContent = habit.data().name;
              habitItem.appendChild(habitName);
              
              // Action buttons
              const actions = document.createElement("div");
              actions.className = "habit-actions";
              
              // Toggle completion button
              const toggleBtn = document.createElement("button");
              toggleBtn.textContent = habitData.completed ? "❌" : "✓"; // Toggle icon;
              toggleBtn.onclick = () => toggleHabitCompletion(habit.id, habit.data().completed);
              actions.appendChild(toggleBtn);
              
              // Edit button
              const editBtn = document.createElement("button");
              editBtn.textContent = "edit";
              editBtn.onclick = () => {
                  const newName = prompt("Enter new habit name:", habit.data().name);
                  if (newName) {
                      editHabit(habit.id, newName);
                  }
              };
              actions.appendChild(editBtn);
              
              // Delete button
              const deleteBtn = document.createElement("button");
              deleteBtn.textContent = "delete";
              deleteBtn.onclick = async () => {
                  if (confirm("Are you sure you want to delete this habit?")) {
                      await deleteHabit(habit.id);
                  }
              };
              actions.appendChild(deleteBtn);
              
              habitItem.appendChild(actions);
              habitList.appendChild(habitItem);
          }
      );
      
      // Update stats
      totalHabits.textContent = habits.length;
      const completedHabits = habits.filter(h => h.data().completed).length;
      const completionRateValue = habits.length > 0
            ? ((completedHabits / habits.length) * 100).toFixed(2)
            : 0;
      completionRate.textContent = `${completionRateValue}% completed`;
  } catch (error) {
      log.error("Error rendering habits:", error);
      throw error;
  }
}

// Fetch habits from Firestore
async function getHabitsFromFirestore() {
    try {
        const data = await getDocs(collection(db, "habits"));
        return data.docs;
    } catch (error) {
        console.error("Error fetching habits:", error);
        throw error;
    }
    
}

 
function sanitizeInput(input) {
  const div = document.createElement("div");
  div.textContent = input;
  return div.innerHTML;
}

 

// Toggle for habit completion
async function toggleHabitCompletion(habitId, currentStatus) {
  try {
      const habitRef = doc(db, "habits", habitId);
      await updateDoc(habitRef, {
          completed: !currentStatus,
          history: [{
              date: new Date().toISOString().split('T')[0],
              completed: !currentStatus
          }]
      });
      log.info(`Habit ${habitId} completion toggled`);
      renderHabits();
  } catch (error) {
      log.error("Error toggling habit completion:", error);
      throw error;
  }
}

async function editHabit(habitId, newName) {
  try {
      const habitRef = doc(db, "habits", habitId);
      await updateDoc(habitRef, {
          name: newName,
          lastModified: new Date()
      });
      log.info(`Habit ${habitId} updated to: ${newName}`);
      renderHabits();
  } catch (error) {
      log.error("Error editing habit:", error);
      throw error;
  }
}

async function deleteHabit(habitId) {
  try {
      const habitRef = doc(db, "habits", habitId);
      await deleteDoc(habitRef);
      log.info(`Habit ${habitId} deleted`);
      renderHabits();
  } catch (error) {
      log.error("Error deleting habit:", error);
      throw error;
  }
}







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


// Set the log level (trace, debug, info, warn, error)
log.setLevel("info");
// Example logs
log.info("Application started");
log.debug("Debugging information");
log.error("An error occurred");