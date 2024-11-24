document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");
    const bucky = document.querySelector(".bucky");

    const container_height = container.offsetHeight; // Height of the container
    const bucky_height = bucky.offsetHeight; // Height of Bucky

    let y = 50; // Initial Y position (matches CSS top)
    let vert_velocity = 0; // Initial vertical velocity
    const gravity = 0.7; // Gravity speed
    let is_game_started = false; // Game start flag

    let is_paused = False; //Tracks whether game is paused
    let last_frame_time = 0; //Tracks game time while paused


    function falling() {
        if (is_game_started) {
            // Apply gravity
            vert_velocity += gravity;

            // Update Bucky's vertical position
            y += vert_velocity;

            // Calculate the maximum Y position (bottom of the container)
            const max_y = container_height - bucky_height;

            // Prevent Bucky from falling below the container
            if (y > max_y) {
                y = max_y; // Keep it at the bottom
                vert_velocity = 0; // Stop downward movement
            }

            // Prevent Bucky from moving above the container
            if (y < 0) {
                y = 0; // Keep it at the top
                vert_velocity = 0; // Stop upward movement
            }

            // Update Bucky's position on the screen
            bucky.style.top = `${y}px`;
        }
    }

    function game_loop() {
        falling(); // Update Bucky's position
        requestAnimationFrame(game_loop); // Keep the loop going
    }

    document.addEventListener("click", () => {
        if (!is_game_started) {
            is_game_started = true;
            game_loop();
        }
    });

    document.addEventListener("keydown", (event) => {if (event.key == "p" || event.key == "P")  
        {
            toggle_pause();
        }


    })
});


function toggle_pause()
{
    is_paused = !is_paused;

    if (!is_paused)
    {
        last_frame_time = performance.now();
        game_loop(last_frame_time);
    }

}