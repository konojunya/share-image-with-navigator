const shareButton = document.getElementById("share");

const TARGET_URL = "https://share-image-with-navigator.vercel.app/card.png";

shareButton.addEventListener("click", async () => {
  const blob = await fetch(TARGET_URL).then((res) => res.blob());
  const file = new File([blob], "remote-file.jpg", { type: "image/png" });
  const shareData = {
    title: "share remote file",
    text: "this is a remote file",
    files: [file],
  };

  if (!navigator.canShare(shareData)) {
    alert("Your browser does not support sharing files");
    return;
  }

  try {
    await navigator.share(shareData);
  } catch {
    alert("Error sharing file");
  }
});

