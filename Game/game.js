/*   
 *   Date Last Revised: 11/26/2024
 *   Citation: https://copilot.cloud.microsoft/?fromcode=bingchat&redirectid=529F0A91369945A293D831F9318F215F&auth=2
 */

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");
    const bucky = document.querySelector(".bucky");

    const container_height = container.offsetHeight; // Height of the container
    const bucky_height = bucky.offsetHeight; // Height of Bucky

    let y = 50; // Initial Y position (matches CSS top)
    let vert_velocity = 0; // Initial vertical velocity
    const gravity = 0.7; // Gravity speed
    const jump_strength = -12; //Upward velocity for jump
    let is_game_started = false; // Game start flag

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

    function jump(){
        if(is_game_started){
            vert_velocity = jump_strength; // move buck up with vert_velocity
           
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
        } else{
            jump(); //once game starts, bucky can jup with the click button
        }
    });
});
