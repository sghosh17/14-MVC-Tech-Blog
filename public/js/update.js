const blogFormHandler = async (event) => {
  event.preventDefault();

  const id = document.querySelector("#blog-id").value.trim();
  const title = document.querySelector("#blog-title").value.trim();
  const description = document.querySelector("#blog-description").value.trim();

  if (title && description) {
    const response = await fetch("/api/blogs/update/" + id, {
      method: "PUT",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to update a new blog.");
    }
  }
};

document
  .querySelector(".blog-form")
  .addEventListener("submit", blogFormHandler);
