function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Random position
    heart.style.left = Math.random() * 100 + "vw";
    
    // Random size
    let size = Math.random() * 30 + 10; 
    heart.style.fontSize = size + "px";
    
    // Random animation duration
    let duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + "s";

    document.querySelector(".hearts-container").appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Generate A LOT more hearts at a much faster rate!
setInterval(createHeart, 100);  // Spawns every 100ms (10 hearts per second!)