/* Disable animations on mobile */
const isMobile = window.innerWidth < 900;

if (!isMobile) {

    // ----------------------------
    // WOODGRAIN SCROLL MOVEMENT
    // ----------------------------
    const hero = document.querySelector('.woodgrain-bg');

    window.addEventListener('scroll', () => {
        const scrollAmount = window.scrollY * 0.03; // very subtle
        hero.style.backgroundPosition = `${scrollAmount}px 0`;
    });

    // ----------------------------
    // FLOATING ORANGE BEHAVIOR
    // ----------------------------
    const orange = document.getElementById("floating-orange");
    let orangeInCorner = false;

    function updateOrangePosition() {
        const scroll = window.scrollY;
        const docHeight = document.body.scrollHeight;

        // Show after small scroll
        if (scroll > 40) {
            orange.style.opacity = 1;
        }

        // Drift down gradually
        if (scroll < docHeight * 0.4) {
            orange.style.top = 120 + scroll * 0.15 + "px";
        } else {
            // Snap to lower-right corner once past 40%
            if (!orangeInCorner) {
                orange.style.top = "calc(100vh - 100px)";
                orangeInCorner = true;
            }
        }
    }

    window.addEventListener("scroll", updateOrangePosition);


    // ----------------------------
    // WIGGLE LOOP
    // ----------------------------
    function wiggleLoop() {
        orange.style.animation = "orange-wiggle 0.8s ease";
        setTimeout(() => {
            orange.style.animation = "none";
        }, 900);

        setTimeout(wiggleLoop, 6000);
    }

    setTimeout(wiggleLoop, 3000);


    // ----------------------------
    // CLICK → ROLL AWAY → RETURN
    // ----------------------------
    orange.addEventListener("click", () => {
        orange.style.animation = "roll-away 0.8s forwards";

        setTimeout(() => {
            orange.style.opacity = 0;
            orange.style.transform = "translateY(0)";

            setTimeout(() => {
                orange.style.opacity = 1;
            }, 400);
        }, 1200);
    });

}
