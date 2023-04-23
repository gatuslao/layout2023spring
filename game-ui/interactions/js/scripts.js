document
    .addEventListener('DOMContentLoaded', () => {

        document
        const clock = document.getElementById('clock');
        clock.addEventListener('click', (e) => {
            clock.classList.toggle('running')
        })

        // portion made with help from ChatGPT
        var iconIndex = 0;
        var icons = document.getElementsByClassName("weather-icon");

        function showIcon(n) {
            for (var i = 0; i < icons.length; i++) {
                icons[i].style.display = "none";
            }

            icons[n].style.display = "block";
        }

        function transitionIcons() {
            setTimeout(function () {
                showIcon(iconIndex);
                iconIndex++;
                if (iconIndex >= icons.length) {
                    iconIndex = 0;
                }
                transitionIcons();
            }, 10000);
        }

        showIcon(0);

        transitionIcons();


        var seedIndex = 0;
        var seeds = document.getElementsByClassName("seed");
        var seedTimer = null;

        var statusIndex = 0;
        var status = document.getElementsByClassName("bar");
        var statusTimer = null;

        function showSeed(n) {
            for (var i = 0; i < seeds.length; i++) {
                seeds[i].style.display = "none";
            }

            seeds[n].style.display = "block";
        }

        function transitionSeeds() {
            setTimeout(function () {
                showSeed(seedIndex);
                seedIndex++;
                if (seedIndex >= seeds.length) {
                    clearTimeout(seedTimer);
                    seedTimer = null;
                    return;
                }
                transitionSeeds();
            }, 5000);

        }

        function showStatus(n) {
            for (var i = 0; i < status.length; i++) {
                status[i].style.display = "none";
            }
            status[n].style.display = "block";
        }

        function transitionStatus() {
            statusTimer = setTimeout(function () {
                showStatus(statusIndex);
                statusIndex++;
                if (statusIndex >= status.length) {
                    clearTimeout(statusTimer);
                    statusTimer = null;
                    return;
                }
                transitionStatus();
            }, 5000);
        }

        var seedButton = document.getElementById("seed-btn");
        seedButton.addEventListener("click", function () {
            seedIndex = 0;
            showSeed(seedIndex);
            statusIndex = 0;
            showStatus(statusIndex);
            if (!seedTimer, !statusTimer) {
                transitionSeeds();
                transitionStatus();
            }
        });

        showSeed(0)
        transitionSeeds();

        showStatus(0);
        transitionStatus();


        $(document).ready(function () {
            $("#wrapper").hide();
            $("#inventory-info").click(function () {
                $("#wrapper").toggle();
                $("#inventory-info").toggleClass("inventory-open");
                console.log("Toggle!");
            });


        });




    })

