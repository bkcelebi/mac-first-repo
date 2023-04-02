"use strict";

const billingItems = document.querySelectorAll('#billing input[type="text"]');
const billingLabels = document.querySelectorAll(".billingLabel");
const checkbox = document.querySelector("#billingCheckbox");

checkbox.addEventListener("change", () => {
  for (let i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;
    if (
      billingLabels[i].getAttribute("class") === "billingLabel disabledLabel"
    ) {
      billingLabels[i].setAttribute("class", "billingLabel");
    } else {
      billingLabels[i].setAttribute("class", "billingLabel disabledLabel");
    }
  }
});
