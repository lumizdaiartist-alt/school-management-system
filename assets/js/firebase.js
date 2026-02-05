<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBIQog_gsN6U-2JXwpv8CBSMLuP92W6a7Q",
    authDomain: "school-management-system-2f7de.firebaseapp.com",
    projectId: "school-management-system-2f7de",
    storageBucket: "school-management-system-2f7de.firebasestorage.app",
    messagingSenderId: "518987437886",
    appId: "1:518987437886:web:3d451457c4a6457e007e6f"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  window.db = db;
</script>
