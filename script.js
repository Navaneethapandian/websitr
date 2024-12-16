document.addEventListener("DOMContentLoaded", () => {
    // Lightbox for certificates
    const certificates = document.querySelectorAll('.certificate-photo');
    certificates.forEach(photo => {
        photo.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.style.display = "flex";

            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = photo.alt;
            modal.appendChild(img);

            document.body.appendChild(modal);

            modal.addEventListener('click', () => {
                modal.remove();
            });
        });
    });
    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
        const percentage = circle.getAttribute("data-percentage");
        let currentPercentage = 0;

        // Increment progress animation
        const interval = setInterval(() => {
            if (currentPercentage >= percentage) {
                clearInterval(interval);
            } else {
                currentPercentage++;
                circle.style.background = `conic-gradient(#fff 0% ${currentPercentage}%, rgba(255,255,255,0.2) ${currentPercentage}% 100%)`;
                circle.querySelector("span").textContent = `${currentPercentage}%`;
            }
        }, 15); // Animation speed
    });
});
