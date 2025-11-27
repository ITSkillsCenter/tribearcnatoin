const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const closeSidebarBtn = document.getElementById("close-sidebar-btn");
const mobileSidebar = document.getElementById("mobile-sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");

// Open sidebar
mobileMenuBtn.addEventListener("click", () => {
  mobileSidebar.classList.remove("translate-x-full");
  sidebarOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

// Close sidebar fn
const closeSidebar = () => {
  mobileSidebar.classList.add("translate-x-full");
  sidebarOverlay.classList.add("hidden");
  document.body.style.overflow = "";
};

closeSidebarBtn.addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

// consistent footer
const fetchFooter = fetch("/components/footer.html");
const promiseResolve = fetchFooter.then((res) => res.text());
promiseResolve.then((data) => {
  document.getElementById("footer").innerHTML = data;
});