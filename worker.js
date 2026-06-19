const API_URL = "https://你的worker.workers.dev";

async function send() {
  const prompt = document.getElementById("input").value;
  const mode = document.getElementById("mode").value;
  const output = document.getElementById("output");

  output.textContent = "Thinking...";

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt,
      mode
    })
  });

  const data = await res.json();

  output.textContent =
    data.result ||
    JSON.stringify(data, null, 2);
}
