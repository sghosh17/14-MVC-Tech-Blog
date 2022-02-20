const blogFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blog-title").value.trim();
  const description = document.querySelector("#blog-description").value.trim();

  if (title && description) {
    const response = await fetch("/api/blogs/add", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to add a new blog.");
    }
  }
};

document
  .querySelector(".blog-form")
  .addEventListener("submit", blogFormHandler);
