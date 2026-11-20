/* =========================
   音乐列表
   扫描自 assets/music
   共 26 首
   以后加歌：复制文件 + 在数组里加一项
   ========================= */

   const DEFAULT_COVER = "assets/covers/f.jpg";

   const TRACKS = [
       { artist: "水月陵", title: "Summer Pockets", src: "assets/music/水月陵 - Summer Pockets.mp3", cover: "assets/covers/f.jpg" },
       { artist: "rionos", title: "ポケットをふくらませて (把口袋鼓起来)", src: "assets/music/rionos - ポケットをふくらませて (把口袋鼓起来).mp3", cover: "assets/covers/f.jpg" },
       { artist: "VISUAL ARTS Key Sound Label", title: "風の軌跡", src: "assets/music/VISUAL ARTS Key Sound Label - 風の軌跡.ogg", cover: "assets/covers/f.jpg" },
       { artist: "はな", title: "櫻ノ詩 (樱之诗)", src: "assets/music/はな - 櫻ノ詩 (樱之诗).mp3", cover: "assets/covers/f.jpg" },
       { artist: "忍", title: "Reincarnation I", src: "assets/music/忍 - Reincarnation I.mp3", cover: "assets/covers/f.jpg" },
       { artist: "忍", title: "あさきゆめみし -world's end love Arrange-", src: "assets/music/忍 - あさきゆめみし -world's end love Arrange-.mp3", cover: "assets/covers/f.jpg" },
       { artist: "忍", title: "あさきゆめみし", src: "assets/music/忍 - あさきゆめみし.mp3", cover: "assets/covers/f.jpg" },
       { artist: "忍", title: "さくら、もゆ。 -orgel Arrange-", src: "assets/music/忍 - さくら、もゆ。 -orgel Arrange-.mp3", cover: "assets/covers/f.jpg" },
       { artist: "忍", title: "ほしめぐるまほう", src: "assets/music/忍 - ほしめぐるまほう.mp3", cover: "assets/covers/f.jpg" },
       { artist: "忍", title: "紅い瞳に映るセカイarrange", src: "assets/music/忍 - 紅い瞳に映るセカイarrange.mp3", cover: "assets/covers/f.jpg" },
       { artist: "忍", title: "聖夜をめぐるまほう", src: "assets/music/忍 - 聖夜をめぐるまほう.mp3", cover: "assets/covers/f.jpg" },
       { artist: "忍", title: "輪廻 -Arrange-", src: "assets/music/忍 - 輪廻 -Arrange-.mp3", cover: "assets/covers/f.jpg" },
       { artist: "折戸伸治", title: "Childish White (稚白)", src: "assets/music/折戸伸治 - Childish White (稚白).mp3", cover: "assets/covers/f.jpg" },
       { artist: "折戸伸治", title: "夏の子守歌", src: "assets/music/折戸伸治 - 夏の子守歌.mp3", cover: "assets/covers/f.jpg" },
       { artist: "松本文紀", title: "この櫻ノ詩の下 (樱之诗)", src: "assets/music/松本文紀 - この櫻ノ詩の下 (樱之诗).mp3", cover: "assets/covers/f.jpg" },
       { artist: "松本文紀", title: "ざくざくと散る錆びた夢", src: "assets/music/松本文紀 - ざくざくと散る錆びた夢.mp3", cover: "assets/covers/f.jpg" },
       { artist: "松本文紀", title: "夢の歩みを見上げて (仰望梦想的脚步)", src: "assets/music/松本文紀 - 夢の歩みを見上げて (仰望梦想的脚步).mp3", cover: "assets/covers/f.jpg" },
       { artist: "松本文紀", title: "守りたいもの", src: "assets/music/松本文紀 - 守りたいもの.mp3", cover: "assets/covers/f.jpg" },
       { artist: "松本文紀", title: "永遠を願うとき (祈求永恒)", src: "assets/music/松本文紀 - 永遠を願うとき (祈求永恒).mp3", cover: "assets/covers/f.jpg" },
       { artist: "松本文紀", title: "空を舞う月 空を舞う翼 (空中飞舞的月，空中飞舞的翅膀)", src: "assets/music/松本文紀 - 空を舞う月 空を舞う翼 (空中飞舞的月，空中飞舞的翅膀).mp3", cover: "assets/covers/f.jpg" },
       { artist: "水月陵", title: "夜は短く、空は遠くて…", src: "assets/music/水月陵 - 夜は短く、空は遠くて….mp3", cover: "assets/covers/f.jpg" },
       { artist: "水月陵", title: "眩しさの中", src: "assets/music/水月陵 - 眩しさの中.mp3", cover: "assets/covers/f.jpg" },
       { artist: "竹下智博", title: "夏を刻んだ、波の音は…", src: "assets/music/竹下智博 - 夏を刻んだ、波の音は….mp3", cover: "assets/covers/f.jpg" },
       { artist: "虻川治", title: "under the moon (月下)", src: "assets/music/虻川治 - under the moon (月下).mp3", cover: "assets/covers/f.jpg" },
       { artist: "虻川治", title: "あの日に帰りたい", src: "assets/music/虻川治 - あの日に帰りたい.mp3", cover: "assets/covers/f.jpg" },
       { artist: "麻枝准", title: "Sea, You & Me", src: "assets/music/麻枝准 - Sea, You & Me.mp3", cover: "assets/covers/f.jpg" }
   ];
/* =========================
   曲目列表渲染
   ========================= */

   function initMusicList() {
    const trackList = document.getElementById("trackList");

    if (!trackList) {
        console.warn("没有找到 #trackList");
        return;
    }

    const fragment = document.createDocumentFragment();
    const itemTag =
        trackList.tagName === "UL" || trackList.tagName === "OL"
            ? "li"
            : "div";

    TRACKS.forEach((track, index) => {
        const item = document.createElement(itemTag);
        item.className = "track-item";
        item.dataset.index = String(index);

        const number = document.createElement("span");
        number.className = "track-index";
        number.textContent = String(index + 1).padStart(2, "0");

        const meta = document.createElement("div");
        meta.className = "track-meta";

        const title = document.createElement("span");
        title.className = "track-title";
        title.textContent = track.title;

        const artist = document.createElement("span");
        artist.className = "track-artist";
        artist.textContent = track.artist;

        const duration = document.createElement("span");
        duration.className = "track-duration";
        duration.dataset.durationFor = String(index);
        duration.textContent = "--:--";

        meta.append(title, artist);
        item.append(number, meta, duration);
        fragment.appendChild(item);
    });

    trackList.replaceChildren(fragment);
}

function initMusic() {
    initMusicList();
    initPlayer();
    initMiniPlayer();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMusic);
} else {
    initMusic();
}
    /* =========================
   播放核心
   ========================= */

function initPlayer() {
    const audio = document.getElementById("audio");
    const trackList = document.getElementById("trackList");

    const playBtn = document.getElementById("playBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const musicCover = document.getElementById("musicCover");
    //旋转
    const vinyl = document.getElementById("vinyl");

    const musicTitle = document.getElementById("musicTitle");
    const musicArtist = document.getElementById("musicArtist");

    const progress = document.getElementById("progress");
    const currentTime = document.getElementById("currentTime");
    const duration = document.getElementById("duration");

    const muteBtn = document.getElementById("muteBtn");
    const volume = document.getElementById("volume");
    const volumeValue = document.getElementById("volumeValue");

    if (!audio || !trackList || !playBtn) {
        console.warn("播放器缺少必要的 HTML 元素");
        return;
    }

    let currentIndex = 0;
    let lastVolume = 0.8;

    function formatTime(value) {
        if (!Number.isFinite(value) || value < 0) {
            return "0:00";
        }

        const total = Math.floor(value);
        const minutes = Math.floor(total / 60);
        const seconds = String(total % 60).padStart(2, "0");

        return `${minutes}:${seconds}`;
    }

    function updatePlayButton() {
        const isPlaying = !audio.paused && !audio.ended;

        playBtn.textContent = isPlaying ? "❚❚" : "▶";
        playBtn.setAttribute("aria-label", isPlaying ? "暂停" : "播放");
        playBtn.classList.toggle("is-playing", isPlaying);
        if (vinyl) {
            vinyl.classList.toggle("is-playing", isPlaying);
        }
    }

    function updateActiveTrack() {
        const items = trackList.querySelectorAll(".track-item");

        items.forEach((item, index) => {
            item.classList.toggle("is-active", index === currentIndex);
        });
    }

    function updateProgress() {
        if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
            return;
        }

        const percent = (audio.currentTime / audio.duration) * 100;

        progress.value = String(percent);
        currentTime.textContent = formatTime(audio.currentTime);
        duration.textContent = formatTime(audio.duration);
    }

    function updateVolumeUI() {
        const percent = Math.round(
            (audio.muted ? 0 : audio.volume) * 100
        );

        volume.value = String(percent);
        volumeValue.textContent = `${percent}%`;

        muteBtn.classList.toggle(
            "is-muted",
            audio.muted || audio.volume === 0
        );
    }

    function loadTrack(index, autoplay) {
        if (!TRACKS.length) {
            return;
        }

        currentIndex =
            (index + TRACKS.length) % TRACKS.length;

        const track = TRACKS[currentIndex];

        audio.pause();
        audio.src = track.src;
        audio.load();

        if (musicCover) {
            musicCover.src = track.cover || DEFAULT_COVER;
            musicCover.alt = `${track.title} 封面`;
        }

        if (musicTitle) {
            musicTitle.textContent = track.title;
        }

        if (musicArtist) {
            musicArtist.textContent = track.artist;
        }

        progress.value = "0";
        currentTime.textContent = "0:00";
        duration.textContent = "0:00";

        updateActiveTrack();
        updatePlayButton();

        if (autoplay) {
            audio.play().catch((error) => {
                console.warn("播放被阻止或音频无法播放", error);
                updatePlayButton();
            });
        }
    }

    function togglePlay() {
        if (!audio.src) {
            loadTrack(0, true);
            return;
        }

        if (audio.paused) {
            audio.play().catch((error) => {
                console.warn("播放失败", error);
                updatePlayButton();
            });
        } else {
            audio.pause();
        }
    }

    playBtn.addEventListener("click", togglePlay);

    prevBtn?.addEventListener("click", () => {
        loadTrack(currentIndex - 1, true);
    });

    nextBtn?.addEventListener("click", () => {
        loadTrack(currentIndex + 1, true);
    });

    trackList.addEventListener("click", (event) => {
        const item = event.target.closest(".track-item");

        if (!item || !trackList.contains(item)) {
            return;
        }

        const index = Number(item.dataset.index);

        if (Number.isInteger(index)) {
            loadTrack(index, true);
        }
    });

    audio.addEventListener("play", updatePlayButton);
    audio.addEventListener("pause", updatePlayButton);
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress);
    audio.addEventListener("durationchange", updateProgress);

    audio.addEventListener("ended", () => {
        loadTrack(currentIndex + 1, true);
    });

    audio.addEventListener("error", () => {
        console.error(
            "音频加载失败:",
            audio.src,
            audio.error
        );

        if (musicTitle) {
            musicTitle.textContent = "音频加载失败";
        }
    });

    progress.addEventListener("input", () => {
        if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
            return;
        }

        const percent = Number(progress.value);
        audio.currentTime = (percent / 100) * audio.duration;

        currentTime.textContent = formatTime(audio.currentTime);
    });

    volume.addEventListener("input", () => {
        const percent = Number(volume.value);

        audio.muted = false;
        audio.volume = percent / 100;

        if (percent > 0) {
            lastVolume = audio.volume;
        }

        updateVolumeUI();
    });

    muteBtn?.addEventListener("click", () => {
        if (audio.muted || audio.volume === 0) {
            audio.muted = false;
            audio.volume = lastVolume || 0.8;
        } else {
            lastVolume = audio.volume;
            audio.muted = true;
        }

        updateVolumeUI();
    });

    audio.addEventListener("volumechange", updateVolumeUI);

    // 初始化音量和第一首歌
    audio.volume = 0.8;
    lastVolume = 0.8;
    updateVolumeUI();
    loadTrack(0, false);
}
function initMiniPlayer() {
    const audio = document.getElementById("audio");
    const miniPlayer = document.getElementById("miniPlayer");

    if (!audio || !miniPlayer) {
        return;
    }

    const miniHandle = document.getElementById("miniHandle");
    const miniCover = document.getElementById("miniCover");
    const miniTitle = document.getElementById("miniTitle");
    const miniArtist = document.getElementById("miniArtist");
    const miniPlay = document.getElementById("miniPlay");
    const miniPrev = document.getElementById("miniPrev");
    const miniNext = document.getElementById("miniNext");
    const miniProgress = document.getElementById("miniProgress");
    const miniMute = document.getElementById("miniMute");
    const miniVolume = document.getElementById("miniVolume");

    const playBtn = document.getElementById("playBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const muteBtn = document.getElementById("muteBtn");

    const musicCover = document.getElementById("musicCover");
    const musicTitle = document.getElementById("musicTitle");
    const musicArtist = document.getElementById("musicArtist");

    function syncMini() {
        const hasSource = Boolean(audio.currentSrc || audio.src);

        miniPlayer.classList.toggle("is-visible", hasSource);

        if (musicTitle && miniTitle) {
            miniTitle.textContent = musicTitle.textContent || "未播放";
        }

        if (musicArtist && miniArtist) {
            miniArtist.textContent = musicArtist.textContent || "—";
        }

        if (miniCover && musicCover && musicCover.src) {
            miniCover.style.backgroundImage =
                `url("${musicCover.src}")`;
        }

        const isPlaying = !audio.paused && !audio.ended;

        if (miniPlay) {
            miniPlay.textContent = isPlaying ? "❚❚" : "▶";
            miniPlay.setAttribute(
                "aria-label",
                isPlaying ? "暂停" : "播放"
            );
        }

        if (miniProgress) {
            if (Number.isFinite(audio.duration) && audio.duration > 0) {
                miniProgress.value = String(
                    (audio.currentTime / audio.duration) * 100
                );
            } else {
                miniProgress.value = "0";
            }
        }

        if (miniVolume) {
            const percent = Math.round(
                (audio.muted ? 0 : audio.volume) * 100
            );

            miniVolume.value = String(percent);
        }

        if (miniMute) {
            const muted = audio.muted || audio.volume === 0;

            miniMute.textContent = muted ? "🔇" : "🔊";
            miniMute.setAttribute(
                "aria-label",
                muted ? "取消静音" : "静音"
            );
        }
    }

    let dragState = null;
    let suppressHandleClick = false;

    miniHandle?.addEventListener("click", () => {
        if (suppressHandleClick) {
            suppressHandleClick = false;
            return;
        }

        const collapsed =
            miniPlayer.classList.toggle("is-collapsed");

        miniHandle.setAttribute(
            "aria-expanded",
            String(!collapsed)
        );
    });

    miniHandle?.addEventListener("pointerdown", (event) => {
        if (event.button !== 0) {
            return;
        }

        const rect = miniPlayer.getBoundingClientRect();

        dragState = {
            pointerId: event.pointerId,
            startX: event.clientX,
            startY: event.clientY,
            left: rect.left,
            top: rect.top,
            moved: false
        };

        miniHandle.setPointerCapture(event.pointerId);
    });

    miniHandle?.addEventListener("pointermove", (event) => {
        if (!dragState || event.pointerId !== dragState.pointerId) {
            return;
        }

        const dx = event.clientX - dragState.startX;
        const dy = event.clientY - dragState.startY;

        if (!dragState.moved && Math.hypot(dx, dy) < 5) {
            return;
        }

        if (!dragState.moved) {
            dragState.moved = true;
            miniPlayer.classList.add("is-dragging");
            miniPlayer.style.bottom = "auto";
            miniPlayer.style.transform = "none";
        }

        const width = miniPlayer.offsetWidth;
        const height = miniPlayer.offsetHeight;

        const maxLeft = Math.max(0, window.innerWidth - width);
        const maxTop = Math.max(0, window.innerHeight - height);

        const left = Math.min(
            Math.max(dragState.left + dx, 0),
            maxLeft
        );

        const top = Math.min(
            Math.max(dragState.top + dy, 0),
            maxTop
        );

        miniPlayer.style.left = `${left}px`;
        miniPlayer.style.top = `${top}px`;
    });

    function endMiniDrag(event) {
        if (!dragState || event.pointerId !== dragState.pointerId) {
            return;
        }

        if (dragState.moved) {
            suppressHandleClick = true;

            setTimeout(() => {
                suppressHandleClick = false;
            }, 0);
        }

        miniPlayer.classList.remove("is-dragging");
        dragState = null;
    }

    miniHandle?.addEventListener("pointerup", endMiniDrag);
    miniHandle?.addEventListener("pointercancel", endMiniDrag);

    miniPlay?.addEventListener("click", () => {
        playBtn?.click();
    });

    miniPrev?.addEventListener("click", () => {
        prevBtn?.click();
    });

    miniNext?.addEventListener("click", () => {
        nextBtn?.click();
    });

    miniMute?.addEventListener("click", () => {
        muteBtn?.click();
    });

    miniProgress?.addEventListener("input", () => {
        if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
            return;
        }

        const percent = Number(miniProgress.value);

        audio.currentTime = (percent / 100) * audio.duration;
        syncMini();
    });

    miniVolume?.addEventListener("input", () => {
        const percent = Number(miniVolume.value);

        audio.muted = false;
        audio.volume = percent / 100;

        syncMini();
    });

    ["loadedmetadata", "play", "pause", "timeupdate", "volumechange", "emptied"]
        .forEach((eventName) => {
            audio.addEventListener(eventName, syncMini);
        });

    miniHandle?.setAttribute(
        "aria-expanded",
        String(!miniPlayer.classList.contains("is-collapsed"))
    );

    syncMini();
}