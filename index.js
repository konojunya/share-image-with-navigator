const shareFileButton = document.getElementById("share-file");
const shareURLButton = document.getElementById("share-url");

const TARGET_URL = "https://share-image-with-navigator.vercel.app/card.png";

shareFileButton.addEventListener("click", async () => {
  const blob = await fetch(TARGET_URL).then((res) => res.blob());
  const file = new File([blob], "remote-file.jpg", { type: "image/png" });
  const shareData = {
    title: "share remote file",
    text: "this is a remote file",
    url: "https://example.com",
    files: [file],
  };

  if (!navigator.canShare(shareData)) {
    alert("Your browser does not support sharing files");
    return;
  }

  try {
    await navigator.share(shareData);
  } catch (err) {
    console.error(err);
    if (err.message.includes("canceled")) {
      alert("canceled");
      return;
    }
    alert("Error sharing file");
  }
});

shareURLButton.addEventListener("click", async () => {
  const shareData = {
    title: "share remote file",
    text: "this is a remote file",
    url: "https://example.com",
  };

  if (!navigator.canShare(shareData)) {
    alert("Your browser does not support sharing files");
    return;
  }

  try {
    await navigator.share(shareData);
  } catch (err) {
    console.error(err);
    if (err.message.includes("canceled")) {
      alert("canceled");
      return;
    }
    alert("Error sharing file");
  }
});
