const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");

  let total = 0;
  prices.forEach((price) => {
    total = total + Number(price.innerText);
  });
  const table = document.querySelector("table");
  const oldTotal = document.getElementById("total-row");
  if (oldTotal) {
    oldTotal.remove();
  }
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