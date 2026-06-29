const tabs = document.querySelectorAll(".tab");
const posts = document.querySelectorAll(".post");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;

    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    posts.forEach((post) => {
      const shouldShow = filter === "all" || post.dataset.type === filter;
      post.classList.toggle("is-hidden", !shouldShow);
    });
  });
});
