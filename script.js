const btn = document.createElement("button");
btn.innerText = "Get Total Price";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  let total = 0;

  document.querySelectorAll(".price").forEach(p => {
    total += Number(p.innerText);
  });

  const old = document.getElementById("total");
  if (old) old.remove();

  const tr = document.createElement("tr");
  tr.id = "total";

  const td = document.createElement("td");
  td.colSpan = 2;
  td.innerText = `Total Price = Rs ${total}`;

  tr.appendChild(td);
  document.querySelector("table").appendChild(tr);
});
