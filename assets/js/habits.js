import { db } from "../js/firebase";

//Now that we are sure the user has signed in, we want to only get their tasks from the database. First, update the imports from Firestore.
import {
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  collection,
  query,
  where,
} from "firebase/firestore";
// Import loglevel
import log from "loglevel";
//Make an API Call to the Chatbot Service
import { GoogleGenerativeAI } from "@google/generative-ai";

// DOM elements
const habitForm = document.getElementById("habit-form");
const habitInput = document.getElementById("habit-input");
const habitDate = document.getElementById("habit-date");
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
    await addHabitToFirestore(habitName, date, email);
    renderHabits();
    habitInput.value = "";
    habitDate.value = "";
  } catch (error) {
    console.error("Error details:", error);
    alert(`Failed to add habit: ${error.message || "Unknown error"}`);
  }
});

// Add Habit when Enter Key is Pressed in Input Field
habitInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    habitForm.requestSubmit();
  }
});

//Checking if the user's email is set in the local storage . This should be done before the window loads. If there is no email set, the user must be redirected back to the login page
const email = JSON.parse(localStorage.getItem("email"));

if (!email) {
  window.location.href = "index.html";
}

// Add habit to Firestore with email parameter
async function addHabitToFirestore(habitName, habitDate, email) {
  try {
    const docRef = await addDoc(collection(db, "habits"), {
      name: habitName,
      email: email, // Associate habit with user's email
      completed: false,
      history: [
        {
          date: habitDate,
          completed: false,
        },
      ],
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

// Get habits from Firestore that match the user's email
async function getHabitsFromFirestore(email) {
  try {
    const q = query(collection(db, "habits"), where("email", "==", email));
    const data = await getDocs(q);
    return data.docs;
  } catch (error) {
    log.error("Error fetching habits:", error);
    if (error.code === "permission-denied") {
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
      toggleBtn.onclick = () =>
        toggleHabitCompletion(habit.id, habit.data().completed);
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
    });

    // Update stats
    totalHabits.textContent = habits.length;
    const completedHabits = habits.filter((h) => h.data().completed).length;
    const completionRateValue =
      habits.length > 0
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
      history: [
        {
          date: new Date().toISOString().split("T")[0],
          completed: !currentStatus,
        },
      ],
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
      lastModified: new Date(),
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
window.addEventListener("error", function (event) {
  console.error("Error occurred: ", event.message);
});

//Service worker registeration
const sw = new URL("service-worker.js", import.meta.url);
if ("serviceWorker" in navigator) {
  const s = navigator.serviceWorker;
  s.register(sw.href, {
    scope: "/HabitTracker/",
  })
    .then((_) =>
      console.log(
        "Service Worker Registered for scope:",
        sw.href,
        "with",
        import.meta.url
      )
    )
    .catch((err) => console.error("Service Worker Error:", err));
}

// Set the log level (trace, debug, info, warn, error)
log.setLevel("info");
// Example logs
log.info("Application started");
log.debug("Debugging information");
log.error("An error occurred");

// Function to fetch API key from Firestore
async function getApiKey() {
  try {
    console.log("Fetching API key...");
    let apiKeyRef = doc(db, "apikey", "googlegenai");
    let snapshot = await getDoc(apiKeyRef);

    if (!snapshot.exists()) {
      console.error("❌ API key document does not exist!");
      return null;
    }

    let data = snapshot.data();
    console.log("📌 Retrieved document data:", data);

    let apiKey = data.key;
    if (!apiKey) {
      console.error("⚠️ API key is missing in Firestore document!");
      return null;
    }

    console.log("✅ API Key retrieved successfully:", apiKey);
    return apiKey; // Return the API key instead of initializing the model here
  } catch (error) {
    console.error("🔥 Error fetching API key:", error);
    return null;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const aiButton = document.getElementById("send-btn");
  const aiInput = document.getElementById("chat-input");
  const chatHistory = document.getElementById("chat-history");

  if (!aiButton || !aiInput || !chatHistory) {
    console.error("Chatbot UI elements are missing!");
    return;
  }

  let apiKey = await getApiKey();
  if (!apiKey) {
    appendMessage("Error loading AI model. Please try again later.");
    return;
  }

  let genAI = new GoogleGenerativeAI(apiKey);
  let model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  async function askChatBot(request) {
    try {
      if (!model) {
        console.error("❌ AI model is not initialized!");
        return "AI model is unavailable.";
      }
      let response = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: request }] }],
      });
      return response.candidates?.[0]?.content || "No response from AI.";
    } catch (error) {
      console.error("❌ Error generating content:", error);
      return "I'm having trouble processing that request.";
    }
  }

  aiButton.addEventListener("click", handleChat);
  aiInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleChat();
    }
  });

  async function handleChat() {
    let prompt = aiInput.value.trim().toLowerCase();
    if (prompt) {
      if (!ruleChatBot(prompt)) {
        let response = await askChatBot(prompt);
        appendMessage(response);
      }
    } else {
      appendMessage("⚠️ Please enter a prompt.");
    }
  }

  function appendMessage(message) {
    let history = document.createElement("div");
    history.textContent = message;
    history.className = "history";
    chatHistory.appendChild(history);
    aiInput.value = "";
  }

  async function ruleChatBot(request) {
    if (request.startsWith("add habit")) {
      let habitName = request.replace("add habit", "").trim();
      if (habitName) {
        try {
          let habitDate = new Date().toISOString().split("T")[0]; // Today's date
          let habitId = await addHabitToFirestore(habitName, habitDate);
          appendMessage(`✅ Habit "${habitName}" added with ID: ${habitId}`);
        } catch (error) {
          appendMessage(`⚠️ Error adding habit: ${error.message}`);
        }
      } else {
        appendMessage("⚠️ Please specify a habit to add.");
      }
      return true;
    } else if (request.startsWith("complete habit")) {
      let habitName = request.replace("complete habit", "").trim();
      if (habitName) {
        if (removeFromHabitName(habitName)) {
          appendMessage(`🎯 Habit "${habitName}" marked as complete.`);
        } else {
          appendMessage("⚠️ Habit not found!");
        }
      } else {
        appendMessage("⚠️ Please specify a habit to complete.");
      }
      return true;
    }
    return false;
  }

  function removeFromHabitName(habit) {
    let ele = document.getElementsByName(habit);
    if (ele.length === 0) {
      return false;
    }
    ele.forEach((e) => {
      removeHabit(e.id);
      removeVisualHabit(e.id);
    });
    return true;
  }
});

signOutBttn.addEventListener("click", function (event) {
  localStorage.removeItem("email");
  window.location.href = "index.html";
});
