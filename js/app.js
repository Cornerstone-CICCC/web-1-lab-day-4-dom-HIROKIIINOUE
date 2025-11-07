const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = document.querySelector("#firstname").value;
  const lastName = document.querySelector("#lastname").value;
  const email = document.querySelector("#email").value;
  const hireDate = document.querySelector("#hire_date").value;

  const tableBody = document.querySelector("#employeeList");
  const tableRaw = document.createElement("tr");

  const firstNameTableData = document.createElement("td");
  firstNameTableData.textContent = firstName;
  const lastNameTableData = document.createElement("td");
  lastNameTableData.textContent = lastName;
  const emailTableData = document.createElement("td");
  emailTableData.textContent = email;
  const hireDateTableData = document.createElement("td");
  hireDateTableData.textContent = hireDate;

  // =====image solution=====
  const imageExamples = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
  ];

  const imageValue = document.querySelector("#image").value;
  const imageTableData = document.createElement("td");
  const imageTag = document.createElement("img");
  const currentImg = imageExamples.find((img) => {
    return imageValue.includes(img);
  });
  imageTag.setAttribute("src", `./images/${currentImg}`);
  imageTag.style.width = "40px";
  imageTag.style.height = "40px";
  imageTableData.appendChild(imageTag);
  // =========================

  const deleteBtn = document.createElement("button");
  // deleteBtn.classList.add("delete-button");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.textContent = "delete";
  const deleteButtonTableData = document.createElement("td");
  deleteButtonTableData.appendChild(deleteBtn);

  tableRaw.appendChild(imageTableData);
  tableRaw.appendChild(firstNameTableData);
  tableRaw.appendChild(lastNameTableData);
  tableRaw.appendChild(emailTableData);
  tableRaw.appendChild(hireDateTableData);
  tableRaw.appendChild(deleteButtonTableData);
  tableBody.appendChild(tableRaw);

  deleteBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (!confirm("Are you sure you want to delete this employee?")) {
      return;
    }
    tableBody.removeChild(tableRaw);
  });
});
