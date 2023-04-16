


const searchInput = document.querySelector(" [data-search]")

searchInput.addEventListener("input", (e) => {
    const value = e.target.value 
  localStorage.setItem("search", value)
})



