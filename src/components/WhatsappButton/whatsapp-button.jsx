import React from "react";

export default function WhatsAppButton() {
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      var scrollBtn = document.getElementById("whatsapp-float");
      if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    });
  }
  return (
    <a
      href="https://wa.me/543516668134"
      style={{ display: "none" }}
      id="whatsapp-float"
      rel="noreferrer"
      target="_blank"
    >
      <i className="fab fa-whatsapp my-float"></i>
    </a>
  );
}
