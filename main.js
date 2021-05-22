let time = new Date();

console.log(typeof(time));
time = time.getHours() * 60 + time.getMinutes();
console.log(time);

//script
const type = {
    Subway: 0,
    BBQ: 1,
    Yeopddeok: 2,
    Maratang: 3,
    Domino: 4,
    Jajangmyeon: 5,
    Kimchi: 6,
    Etc: 7,
  };
  let saves = [];
  window.addEventListener("load", () => {
    loaddata();
  });
  function savedata() {
    localStorage.setItem("saves", JSON.stringify(saves));
  }

  function loaddata() {
    let lastTasks = localStorage.getItem("saves");
    if (!lastTasks) return;
    saves = JSON.parse(lastTasks);
    saves.forEach(addContent);
  }
  const cost = {
    Subway: 11000,
    BBQ: 18000,
    Yeopddeok: 13000,
    Maratang: 10000,
    Domino: 16000,
    Jajangmyeon: 6000,
    Kimchi: 10000,
  };

  function addContent(save) {
    let tbody;
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let select = document.createElement("button");
    select.type = "button";
    select.className = "btn btn-light select";
    select.style = "border: 1px solid; height:25px;padding-top:0; margin-top:0;";
    select.textContent = "선택";
    select.addEventListener("click", () => {
      tr.remove();
      saves = saves.filter((t) => t !== save);
      savedata(saves);
    });
    let td0 = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let present = new Date();
    present = present.getHours() * 60 + present.getMinutes();
    th.scope = "row";
    td0.textContent = save.submitTime + save.time - present;
    if (td0.textContent <= 0) {
      tr.remove();
      saves = saves.filter((t) => t !== save);
      savedata(saves);
    }
    td2.textContent = save.location;
    if (save.store === 0) {
      let needed = cost.Subway - save.money;
      if (needed <= 0) {
        return;
      }
      tbody = document.querySelector("#subway_tbody");
      td1.textContent = needed + "원";
    }
    if (save.store === 1) {
      let needed = cost.BBQ - save.money;
      if (needed <= 0) {
        return;
      }
      tbody = document.querySelector("#bbq_tbody");
      td1.textContent = needed + "원";
    }
    if (save.store === 2) {
      let needed = cost.Yeopddeok - save.money;
      if (needed <= 0) {
        return;
      }
      tbody = document.querySelector("#yeopddeok_tbody");
      td1.textContent = needed + "원";
    }
    if (save.store === 3) {
      let needed = cost.Maratang - save.money;
      if (needed <= 0) {
        return;
      }
      tbody = document.querySelector("#maratang_tbody");
      td1.textContent = needed + "원";
    }
    if (save.store === 4) {
      let needed = cost.Domino - save.money;
      if (needed <= 0) {
        return;
      }
      tbody = document.querySelector("#domino_tbody");
      td1.textContent = needed + "원";
    }
    if (save.store === 5) {
      let needed = cost.Jajangmyeon - save.money;
      if (needed <= 0) {
        return;
      }
      tbody = document.querySelector("#jajangmyeon_tbody");
      td1.textContent = needed + "원";
    }
    if (save.store === 6) {
      let needed = cost.Kimchi - save.money;
      if (needed <= 0) {
        return;
      }
      tbody = document.querySelector("#kimchi_tbody");
      td1.textContent = needed + "원";
    }
    if (save.store === 7) {
      th.textContent = save.name;
      tbody = document.querySelector("#etc_tbody");
      td1.textContent = save.money + "원";
    }
    tr.appendChild(th);
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    td3.appendChild(select);
    tbody.appendChild(tr);
  }

  let submit = document.querySelector("#submit");
  submit.addEventListener("click", () => {
    (function () {
      "use strict";

      var forms = document.querySelectorAll(".needs-validation");

      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add("was-validated");

            if (form.checkValidity()) {
              let store = document.querySelector("#ordered_store");
              let time = document.querySelector("#ordered_time");
              let money = document.querySelector("#ordered_money");
              let location = document.querySelector("#ordered_location");
              let presentTime = new Date();
              presentTime =
                presentTime.getHours() * 60 + presentTime.getMinutes();
              let save;
              if (store.value === "써브웨이") {
                save = {
                  store: type.Subway,
                  time: parseInt(time.value),
                  money: money.value,
                  location: location.value,
                  submitTime: presentTime,
                };
              }
              if (store.value === "BBQ") {
                save = {
                  store: type.BBQ,
                  time: parseInt(time.value),
                  money: money.value,
                  location: location.value,
                  submitTime: presentTime,
                };
              }
              if (store.value === "엽기떡볶이") {
                save = {
                  store: type.Yeopddeok,
                  time: parseInt(time.value),
                  money: money.value,
                  location: location.value,
                  submitTime: presentTime,
                };
              }
              if (store.value === "마라탕") {
                save = {
                  store: type.Maratang,
                  time: parseInt(time.value),
                  money: money.value,
                  location: location.value,
                  submitTime: presentTime,
                };
              }
              if (store.value === "도미노피자") {
                save = {
                  store: type.Domino,
                  time: parseInt(time.value),
                  money: money.value,
                  location: location.value,
                  submitTime: presentTime,
                };
              }
              if (store.value === "짜장면") {
                save = {
                  store: type.Jajangmyeon,
                  time: parseInt(time.value),
                  money: money.value,
                  location: location.value,
                  submitTime: presentTime,
                };
              }
              if (store.value === "김치찌개") {
                save = {
                  store: type.Kimchi,
                  time: parseInt(time.value),
                  money: money.value,
                  location: location.value,
                  submitTime: presentTime,
                };
              }
              if (store.value === "기타") {
                let name = document.querySelector("#etc_write");
                if (name.value === "") {
                  return;
                }

                save = {
                  store: type.Etc,
                  time: parseInt(time.value),
                  money: money.value,
                  location: location.value,
                  submitTime: presentTime,
                  name: name.value,
                };
              }
              saves.push(save);
              savedata();
              addContent(save);
              store.value = "";
              time.value = "";
              money.value = "";
              location.value = "";
            }
          },
          false
        );
      });
    })();
  });