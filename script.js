//   alert("Akindele Ayomide");
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const matricNo = e.target.mac.value;
  const password = e.target.pwd.value;
  console.log("Details", matricNo, password);
});
