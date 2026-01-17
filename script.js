const btn = document.getElementById("btn");
const searchInput = document.getElementById("searchInput");

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const errorEl = document.getElementById("error");
const quoteBox = document.getElementById("quote-box");

const metaTable = document.getElementById("meta-table");
const metaId = document.getElementById("meta-id");
const metaCategory = document.getElementById("meta-category");
const metaLength = document.getElementById("meta-length");

async function getRandomQuote() {
    console.log("Sending request to API...");

    try {
        const response = await fetch("https://api.example.com/random-quote");

        if (!response.ok) {
            throw new Error("Invalid API response");
        }

        const data = await response.json();
        console.log("Data received:", data);

        // Filter by keyword
        const keyword = searchInput.value.toLowerCase();
        if (keyword && !data.quote.toLowerCase().includes(keyword)) {
            errorEl.textContent = "No quote matches your keyword.";
            errorEl.classList.remove("hidden");
            quoteBox.classList.add("hidden");
            metaTable.classList.add("hidden");
            return;
        }

        // Fill UI
        quoteText.textContent = data.quote;
        quoteAuthor.textContent = data.author || "Unknown Author";

        metaId.textContent = data.id;
        metaCategory.textContent = data.category;
        metaLength.textContent = data.quote.length + " characters";

        errorEl.classList.add("hidden");
        quoteBox.classList.remove("hidden");
        metaTable.classList.remove("hidden");

    } catch (err) {
        console.error("Error fetching data:", err);

        errorEl.textContent = "An error occurred while connecting to the API.";
        errorEl.classList.remove("hidden");

        quoteBox.classList.add("hidden");
        metaTable.classList.add("hidden");
    }
}

btn.addEventListener("click", getRandomQuote);