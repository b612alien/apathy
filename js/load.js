window.addEventListener("load", function () {
    var loadingPage = document.getElementById("loading-page");
    var content = document.getElementById("content");
    var imageContainer = document.getElementById("image-container");
    var postitsContainer = document.getElementById('question-container');

    // 이미지 배열
    var images = Array.from(imageContainer.children);

    // 이미지를 클래스로 그룹화
    var imageGroups = {};
    images.forEach(function (image) {
        var imageClass = image.classList[0]; // 클래스 이름으로 그룹화
        if (!imageGroups[imageClass]) {
            imageGroups[imageClass] = [];
        }
        imageGroups[imageClass].push(image);
    });

    // 로딩이 끝난 후에 로딩 페이지를 5초 동안 표시합니다.
    loadingPage.style.display = "block";
    content.style.display = "none";

    // 랜덤으로 이미지 배치
    images.forEach(function (image) {
        var randomX = Math.random() * window.innerWidth;
        var randomY = Math.random() * window.innerHeight;
        image.style.position = "absolute";
        image.style.left = randomX + "px";
        image.style.top = randomY + "px";
    });

    // 각 이미지 그룹 별로 순차적으로 사라지게 설정
    var delay = 100; // 각 이미지 간의 간격 (밀리초)
    Object.values(imageGroups).forEach(function (group, groupIndex) {
        group.forEach(function (image, index) {
            setTimeout(function () {
                image.style.transition = "opacity 1s ease-in-out";
                image.style.opacity = 0;
            }, delay * index + groupIndex * 1000); // 그룹 간의 간격 추가
        });
    });

    setTimeout(function () {
        loadingPage.style.opacity = 0;

        setTimeout(function () {
            loadingPage.style.display = "none";
            loadingPage.style.opacity = 1; // 초기 상태로 되돌림
            content.style.display = "block";

            // 랜덤으로 postits 이미지 생성 및 배치
        for (var i = 0; i < 1; i++) {
            var randomPostit = postitsContainer.children[Math.floor(Math.random() * postitsContainer.children.length)].cloneNode(true);
            postitsContainer.appendChild(randomPostit);

            // 이미지의 크기를 고려하여 랜덤한 좌표 생성
            var randomX = Math.random() * (window.innerWidth - randomPostit.width);
            var randomY = Math.random() * (window.innerHeight - randomPostit.height);

            // 좌표가 음수가 되지 않도록 보정
            randomX = Math.max(randomX, 0);
            randomY = Math.max(randomY, 0);

            randomPostit.style.position = "absolute";
            randomPostit.style.left = randomX + "px";
            randomPostit.style.top = randomY + "px";
        }

        }, 1500); // 페이드아웃 후 1.5초 후에 로딩 페이지 완전히 숨김
    }, images.length * delay + 3000); // 로딩 페이지를 이미지 숨기는 시간까지 고려하여 설정

    window.addEventListener("unload", function () {
        loadingPage.style.display = "none";
        window.location.href = './index.html'; // Replace "new_page.html" with the URL of the new page.
    });
});







