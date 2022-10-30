window.onload = function () {
  if (typeof browser === "undefined") {
    var browser = chrome;
  }
  browser.storage.local.get(["certificateData"]).then(
    function (data) {
      if (data.certificateData) {
        let inputs = [...document.getElementsByTagName("input")];
        inputs = inputs.filter(function (el) {
          return el.id.includes(
            "form-component-profileEditFormElement-CERTIFICATION-profileCertification"
          );
        });

        navigator.clipboard
          .writeText(data.certificateData.title)
          .then(function () {
            inputs[0].focus();
            document.execCommand("paste");
            inputs[0].blur();
          });

        navigator.clipboard.writeText("HackerRank").then(function () {
          inputs[1].focus();
          document.execCommand("paste");
          inputs[1].blur();
        });

        navigator.clipboard
          .writeText(data.certificateData.id)
          .then(function () {
            inputs[2].focus();
            document.execCommand("paste");
            inputs[2].blur();
          });

        navigator.clipboard
          .writeText(data.certificateData.url)
          .then(function () {
            inputs[3].focus();
            document.execCommand("paste");
            inputs[3].blur();
          });

        let selects = [...document.getElementsByTagName("select")];
        selects = selects.filter(function (el) {
          return el.id.includes(
            "form-component-profileEditFormElement-CERTIFICATION-profileCertification"
          );
        });

        const date = new Date();
        selects[0].value = (date.getMonth() + 1).toString();
        selects[1].value = date.getFullYear().toString();

        inputs[1].scrollIntoView();
        inputs[1].focus();
        inputs[1].click();

        browser.storage.local.clear();
      }
    },
    () => console.log("fail get data")
  );
};
