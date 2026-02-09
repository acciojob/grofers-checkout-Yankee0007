const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  // ✅ correct class name
  const prices = document.querySelectorAll(".prices");

  let total = 0;

  prices.forEach((price) => {
    total += Number(price.innerText);
  });

  const table = document.querySelector("table");

  // agar pehle se total row ho toh hata do
  const oldTotal = document.getElementById("total-row");
  if (oldTotal) {
    oldTotal.remove();
  }

  // new row create karo
  const tr = document.createElement("tr");
  tr.id = "total-row";

  const td = document.createElement("td");
  td.colSpan = 2;
  td.innerText = `Total Price = Rs ${total}`;
  td.style.fontWeight = "bold";
  td.style.textAlign = "center";

  tr.appendChild(td);
  table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);