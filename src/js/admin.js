document.addEventListener("DOMContentLoaded", function () {
  const caseData = JSON.parse(localStorage.getItem("selectedCase"));
  const initialCaseData = JSON.parse(localStorage.getItem("initialCaseData"));

  if (caseData) {
    document.getElementById("titleInput").value = caseData.title;
    document.getElementById("descriptionInput").value = caseData.description;
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
        saveToLocalStorageAndRedirect(updatedData);
      };
      reader.readAsDataURL(imageInput.files[0]);
    } else {
      saveToLocalStorageAndRedirect(updatedData);
    }
  });
  document.getElementById("resetBtn").addEventListener("click", function () {
    const initialData = JSON.parse(localStorage.getItem("initialCaseData"));
    const caseToReset = initialData.find(c => c.id === caseData.id); 
    
    if (caseToReset) {
      saveToLocalStorageAndRedirect(caseToReset);
    } else {
      alert("Original data for this case not found.");
    }
  });
  

  function saveToLocalStorageAndRedirect(data) {
    localStorage.setItem("selectedCase", JSON.stringify(data));
    window.location.href = "index.html";
  }
});