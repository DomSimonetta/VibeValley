const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#title").value.trim();
    const post_text = document.querySelector("#post-text").value.trim();
  
    if (title && post_text) {
      const response = await fetch(`/api/post`, {
        method: "POST",
        body: JSON.stringify({ title, post_text }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        console.log("test");
        document.location.replace("/profile");
      } else {
        alert(response.statusText);
      }
    }
  };
  

  document.querySelector("#create").addEventListener("submit", newFormHandler);
  