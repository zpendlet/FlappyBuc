//Added randomPipeHeight using https://chatgpt.com/

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");
    const bucky = document.querySelector(".bucky");
    const topPipe = document.querySelector(".top-pipe");
    const bottomPipe = document.querySelector(".bottom-pipe");

    const containerHeight = container.offsetHeight;
    const containerWidth = container.offsetWidth; // Added for horizontal movement
    const buckyHeight = bucky.offsetHeight;

    let y = 50; // Initial Y position (matches CSS top)
    let vertVelocity = 0; // Initial vertical velocity
    const gravity = 0.7; // Gravity speed
    const jumpStrength = -9; // Upward velocity for jump
    let isGameStarted = false; // Game start flag

    let pipeSpeed = 3; // Speed at which the pipes move left
    let topPipeX = parseInt(getComputedStyle(topPipe).left); // Get initial pipe positions
    let bottomPipeX = parseInt(getComputedStyle(bottomPipe).left);
    let pipeGap = 200; 
    /* The function below creates pipes of different heights keeping a gap and max and min height*/
    function randomPipeHeight(){
          // Randomize the height orf the top and bottom pipes, keeping the gap
        const maxTopPipeHeight = containerHeight - pipeGap - 50; // Maximum height for the top pipe (leaving room for gap)
        const minTopPipeHeight = 100; // Minimum height for the top pipe
        const topPipeHeight = Math.floor(Math.random() * (maxTopPipeHeight - minTopPipeHeight)) + minTopPipeHeight;
        
        // Ensure bottom pipe has reasonable height by setting its height based on the remaining space
        const minBottomPipeHeight = 100; // Minimum height for the bottom pipe
        const bottomPipeHeight = Math.max(containerHeight - topPipeHeight - pipeGap, minBottomPipeHeight);

        return { topPipeHeight, bottomPipeHeight };
    }
    function falling() {
        if (isGameStarted) {
            // Apply gravity
            vertVelocity += gravity;

            // Update Bucky's vertical position
            y += vertVelocity;

            // Calculate the maximum Y position (bottom of the container)
            const maxY = containerHeight - buckyHeight;

            // Prevent Bucky from falling below the container
            if (y > maxY) {
                y = maxY; // Keep it at the bottom
                vertVelocity = 0; // Stop downward movement
            }

            // Prevent Bucky from moving above the container
            if (y < 0) {
                y = 0; // Keep it at the top
                vertVelocity = 0; // Stop upward movement
            }

            // Update Bucky's position on the screen
            bucky.style.top = `${y}px`;
        }
    }

    function movePipes() {
        if (isGameStarted) {
            // Move pipes to the left
            topPipeX -= pipeSpeed;
            bottomPipeX -= pipeSpeed;

            //check if pipe has reached the halfway mark
            if (topPipeX + topPipe.offsetWidth < containerWidth / 2) {
                // Generate new random pipe sizes
                const { topPipeHeight, bottomPipeHeight } = randomPipeHeight();

                // Apply new sizes to the pipes
                topPipe.style.height = `${topPipeHeight}px`;
                bottomPipe.style.height = `${bottomPipeHeight}px`;

                // Reset pipe positions
                topPipeX = containerWidth;
                bottomPipeX = containerWidth;
            }

            // Reset pipes if they move off-screen (you can replace this logic later)
            if (topPipeX + topPipe.offsetWidth < 0) {
                topPipeX = containerWidth;
            }
            if (bottomPipeX + bottomPipe.offsetWidth < 0) {
                bottomPipeX = containerWidth;
            }

            // Update pipe positions
            topPipe.style.left = `${topPipeX}px`;
            bottomPipe.style.left = `${bottomPipeX}px`;
        }
    }

    function jump() {
        if (isGameStarted) {
            vertVelocity = jumpStrength; // Move Bucky up with jump strength
        }
    }

    function gameLoop() {
        falling(); // Update Bucky's position
        movePipes(); // Update pipe positions
        requestAnimationFrame(gameLoop); // Keep the loop going
    }

    document.addEventListener("click", () => {
        if (!isGameStarted) {
            isGameStarted = true;
            gameLoop();
        } else {
            jump(); // Once game starts, Bucky can jump with the click button
        }
    });
});
