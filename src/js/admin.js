// document.addEventListener("DOMContentLoaded", function () {
//   const caseData = JSON.parse(localStorage.getItem("selectedCase"));
//   const initialCaseData = JSON.parse(localStorage.getItem("initialCaseData"));

//   if (caseData) {
//     document.getElementById("titleInput").value = caseData.title;
//     document.getElementById("descriptionInput").value = caseData.description;
//   }

//   document.getElementById("saveChangesBtn").addEventListener("click", function () {
//     const updatedData = {
//       ...caseData,
//       title: document.getElementById("titleInput").value,
//       description: document.getElementById("descriptionInput").value,
//     };

//     const imageInput = document.getElementById("imageInput");
//     if (imageInput.files.length > 0) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         updatedData.imgSrc = e.target.result;
//         saveToLocalStorageAndRedirect(updatedData);
//       };
//       reader.readAsDataURL(imageInput.files[0]);
//     } else {
//       saveToLocalStorageAndRedirect(updatedData);
//     }
//   });
//   document.getElementById("resetBtn").addEventListener("click", function () {
//     const initialData = JSON.parse(localStorage.getItem("initialCaseData"));
//     const caseToReset = initialData.find(c => c.id === caseData.id); 
    
//     if (caseToReset) {
//       saveToLocalStorageAndRedirect(caseToReset);
//     } else {
//       alert("Original data for this case not found.");
//     }
//   });
  

//   function saveToLocalStorageAndRedirect(data) {
//     localStorage.setItem("selectedCase", JSON.stringify(data));
//     window.location.href = "index.html";
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  let caseData;
  let initialCaseData;

  // Fetch data from data.json
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      initialCaseData = data;
      caseData = data.find(item => item.id === parseInt(localStorage.getItem("selectedCaseId")));
      if (caseData) {
        populateForm(caseData);
      } else {
        alert("No case selected or case not found in data.json.");
      }
    })
    .catch(err => {
      console.error("Error loading data.json:", err);
    });

  function populateForm(data) {
    document.getElementById("titleInput").value = data.title;
    document.getElementById("descriptionInput").value = data.description;
  }

  document.getElementById("saveChangesBtn").addEventListener("click", function () {
    const updatedData = {
      ...caseData,
      title: document.getElementById("titleInput").value,
      description: document.getElementById("descriptionInput").value,
    };

    const imageInput = document.getElementById("imageInput");
    if (imageInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = function (e) {
        updatedData.imgSrc = e.target.result;
        saveData(updatedData);
      };
      reader.readAsDataURL(imageInput.files[0]);
    } else {
      saveData(updatedData);
    }
  });

  document.getElementById("resetBtn").addEventListener("click", function () {
    const originalData = initialCaseData.find(c => c.id === caseData.id);
    if (originalData) {
      saveData(originalData);
    } else {
      alert("Original data for this case not found.");
    }
  });

  function saveData(data) {
    // Simulate saving the updated data locally for demonstration
    // Update this part to save data back to a server if needed
    console.log("Updated Data:", data);
    alert("Changes saved successfully!");
    window.location.href = "index.html";
  }
});
