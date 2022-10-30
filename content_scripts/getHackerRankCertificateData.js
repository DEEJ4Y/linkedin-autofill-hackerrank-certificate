function getAndSetHackerRankCertificateData() {
  if (typeof browser === "undefined") {
    var browser = chrome;
  }

  let certificateData = new Object();

  certificateData.url = window.location.toString();
  certificateData.id = certificateData.url.split("/").at(-1);

  let matchingElements = document.getElementsByClassName(
    "certificate-description-heading"
  );

  if (matchingElements.length > 0) {
    certificateData.title = matchingElements[0].innerText;
  }

  browser.storage.local.set({ certificateData }).then(
    () => console.log("set data"),
    () => console.log("fail set data")
  );
}

window.onload = getAndSetHackerRankCertificateData;
