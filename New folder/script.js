

    function sendToGoogleForm(answer) {
      const formId = "1FAIpQLSdJYHHmRrgBhwzoUzwx5KKqUe4mbqJo6o4tpdzgFoM_s0yptw";
      const entryId = "entry.685377592";
      let url;
      if (answer === "نعم") {
        url = `https://docs.google.com/forms/d/e/${formId}/formResponse?${entryId}=${encodeURIComponent("نعم")}`;
      } else {
        // لو عندك رابط "لا" قبل كده، استخدمه هنا بنفس entryId
        url = `https://docs.google.com/forms/d/e/${formId}/formResponse?${entryId}=${encodeURIComponent("لا")}`;
      }
      fetch(url, {
          mode: "no-cors"
        })
        .then(() => console.log("تم تسجيل الرد: " + answer))
        .catch(err => console.error(err));
    }

    function acceptChoice() {
      document.getElementById("responseMessage").innerText = "💖 شكراً ان احنا هنقرب من تاني ! 💖";
      sendToGoogleForm("نعم");
    }

    function rejectChoice() {
      document.getElementById("responseMessage").innerText = "😢 حتى لو رفضت، هتفضل غالية عندي ❤️";
      sendToGoogleForm("لا");
    }
