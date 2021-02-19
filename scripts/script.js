const stateChange = () => {
    const book = document.querySelector(".book");
    const icon = document.querySelector(".icon");

    book.value === "Bookmark" ? (book.value = "Bookmarked") : (book.value = "Bookmark");

    icon.classList.toggle("active");
};
