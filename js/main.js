(() => {
    "use strict";

    const body = document.body;
    const menuToggle = document.getElementById("menuToggle");
    const menuItems = Array.from(document.querySelectorAll(".menu-item"));

    const homeProfile = document.querySelector(".profile");
    const musicPage = document.getElementById("musicPage");
    const bgSwitcher = document.querySelector(".bg-switcher");

    const backdrop = document.getElementById("backdrop");
    const toast = document.getElementById("toast");
    const dots = Array.from(document.querySelectorAll(".bg-dot"));

    const BG_KEY = "nyapc-background";
    let toastTimer = 0;

    function setMenuCollapsed(collapsed) {
        body.classList.toggle("menu-collapsed", collapsed);

        if (menuToggle) {
            menuToggle.setAttribute("aria-expanded", String(!collapsed));
        }
    }

    function showToast(message) {
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add("is-visible", "show");

        clearTimeout(toastTimer);
        toastTimer = window.setTimeout(() => {
            toast.classList.remove("is-visible", "show");
        }, 2200);
    }

    function setPage(page) {
        const isMusic = page === "music";

        if (homeProfile) {
            homeProfile.hidden = isMusic;
            homeProfile.style.display = isMusic ? "none" : "";
        }

        if (musicPage) {
            musicPage.hidden = !isMusic;
            musicPage.style.display = isMusic ? "" : "none";
        }

        if (bgSwitcher) {
            bgSwitcher.hidden = isMusic;
            bgSwitcher.style.display = isMusic ? "none" : "";
        }

        body.dataset.page = page;

        menuItems.forEach((item) => {
            const active = item.dataset.page === page;
            item.classList.toggle("is-active", active);
            item.classList.toggle("active", active);
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function setBackground(path, save) {
        if (!path || !backdrop) return;

        backdrop.style.backgroundImage = `url("${path}")`;

        dots.forEach((dot) => {
            const active = dot.dataset.bg === path;

            dot.classList.toggle("is-active", active);
            dot.classList.toggle("active", active);
            dot.setAttribute("aria-pressed", String(active));
        });

        if (save) {
            try {
                localStorage.setItem(BG_KEY, path);
            } catch (error) {
                console.warn("背景记忆保存失败", error);
            }
        }
    }

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            setMenuCollapsed(!body.classList.contains("menu-collapsed"));
        });
    }

    menuItems.forEach((item) => {
        item.addEventListener("click", () => {
            const page = item.dataset.page;

            if (page === "home" || page === "music") {
                setPage(page);
                return;
            }

            showToast("该功能尚未开发，敬请期待～");
        });
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            setBackground(dot.dataset.bg, true);
        });
    });

    // 初始化
    setMenuCollapsed(true);
    setPage("home");

    let savedBackground = null;

    try {
        savedBackground = localStorage.getItem(BG_KEY);
    } catch (error) {
        console.warn("背景记忆读取失败", error);
    }

    const initialDot =
        dots.find((dot) => dot.dataset.bg === savedBackground) ||
        dots[0];

    if (initialDot) {
        setBackground(initialDot.dataset.bg, false);
    }
})();