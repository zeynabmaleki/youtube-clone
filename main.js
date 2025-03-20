const menuIcon = document.getElementById('menu-icon');
const sideBar = document.querySelector('.side-bar');

menuIcon.addEventListener('click', () => {
    sideBar.classList.toggle('hidden');
})



function addVideo({
    imgSrc,
    title,
    channelName,
    channelLogo,
    views
}) {
    const videoSection = document.getElementById('video-section');
    const videoDiv = document.createElement('div');
    videoDiv.classList.add('video');
    videoDiv.innerHTML = `
        <img src="${imgSrc}" alt="video thumbnail" class="video-thumbnail">
        <div class="video-info">
            <h3 class="video-title">${title}</h3>
            <div class="channel-info">
                <img src="${channelLogo}" alt="channel logo" class="channel-logo">
                <p class="channel-name">${channelName}</p>
            </div>
            <p class="views">${views}</p>`;
    videoSection.appendChild(videoDiv);
}



addVideo({
    imgSrc: "https://i.ytimg.com/vi/OORUHkgg4IM/maxresdefault.jpg",
    title: "Top 10 Easy To Create JavaScript Games For Beginners",
    channelName: "CodingNepal",
    channelLogo: "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
    views: "27K Views • 4 months ago"
});

addVideo({
    imgSrc: "https://i.ytimg.com/vi/qOO6lVMhmGc/maxresdefault.jpg",
    title: "How to make Responsive Card Slider in HTML CSS & JavaScript",
    channelName: "CodingLab",
    channelLogo: "https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj",
    views: "42K Views • 1 year ago"
});


addVideo({
    imgSrc: "https://i.ytimg.com/vi/YEloDYy3DTg/maxresdefault.jpg",
    title: "Create A Responsive Website with Login & Registration Form in HTML CSS and JavaScript",
    channelName: "CodingNepal",
    channelLogo: "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
    views: "68K Views • 9 months ago"
});

addVideo({
    imgSrc: "https://i.ytimg.com/vi/hSSdc8vKP1I/maxresdefault.jpg",
    title: "Build Hangman Game in HTML CSS and JavaScript",
    channelName: "CodingNepal",
    channelLogo: "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
    views: "57K Views • 11 months ago"
});


addVideo({
    imgSrc: "https://i.ytimg.com/vi/5wtnKulcquA/maxresdefault.jpg",
    title: "Create A Responsive Navigation Menu Bar with HTML CSS & JavaScript",
    channelName: "CodingLab",
    channelLogo: "https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj",
    views: "37K Views • 2 years ago"
});

addVideo({
    imgSrc: "https://i.ytimg.com/vi/6QE8dXq9SOE/maxresdefault.jpg",
    title: "Create A Draggable Card Slider in HTML CSS and Vanilla JavaScript",
    channelName: "CodingNepal",
    channelLogo: "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
    views: "14.2K Views • 4 days ago"
});

addVideo({
    imgSrc: "https://i.ytimg.com/vi/q4RgxiDM6v0/maxresdefault.jpg",
    title: "How to make Responsive Image Slider in HTML CSS and JavaScript",
    channelName: "CodingLab",
    channelLogo: "https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj",
    views: "1M Views • 1 year ago"
});


addVideo({
    imgSrc: "https://i.ytimg.com/vi/9Tf6Zewbq4c/maxresdefault.jpg",
    title: "Create A Responsive Blog Website Using HTML CSS & JavaScript",
    channelName: "CodingNepal",
    channelLogo: "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
    views: "32K Views • 1 year ago"
});

addVideo({
    imgSrc: "https://i.ytimg.com/vi/8n1l7JvU5jI/maxresdefault.jpg",
    title: "Create A Responsive Portfolio Website using HTML CSS & JavaScript",
    channelName: "CodingLab",
    channelLogo: "https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj",
    views: "2.5M Views • 2 years ago"
});


addVideo({
    imgSrc: "https://i.ytimg.com/vi/PsNaoDhzQm0/maxresdefault.jpg",
    title: "Create Responsive Image Slider in HTML CSS and JavaScript",
    channelName: "CodingNepal",
    channelLogo: "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
    views: "157K Views • 9 months ago"
});

addVideo({
    imgSrc: "https://i.ytimg.com/vi/20Qb7pNMv-4/maxresdefault.jpg",
    title: "Make A Flipping Card UI Design in HTML & CSS",
    channelName: "CodingLab",
    channelLogo: "https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj",
    views: "85K Views • 2 months ago"
});


addVideo({
    imgSrc: "https://i.ytimg.com/vi/0_Lwi5ucGwM/maxresdefault.jpg",
    title: "Build A Currency Converter using ReactJS",
    channelName: "CodingNepal",
    channelLogo: "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
    views: "7.2K Views • 2 weeks"
});

addVideo({
    imgSrc: "https://i.ytimg.com/vi/cHkN82X3KNU/maxresdefault.jpg",
    title: "Build A Responsive Calculator in HTML CSS & JavaScript",
    channelName: "CodingLab",
    channelLogo: "https://yt3.googleusercontent.com/LrCNrwOMkNOpLKnRl0GgvIQOgo1mR90oXa1pjbuSRIRBT3_FMTYUbdEllsUTxt7Wq8-qPOdd=s160-c-k-c0x00ffffff-no-rj",
    views: "30K Views • 2 years ago"
});


addVideo({
    imgSrc: "https://i.ytimg.com/vi/9Tf6Zewbq4c/maxresdefault.jpg",
    title: "Create A Responsive Blog Website Using HTML CSS & JavaScript",
    channelName: "CodingNepal",
    channelLogo: "https://yt3.googleusercontent.com/DRtVBjk2Noax94hHqr8yCcEjhNUhHRvyzBE3qS9WWilnE1-uQQNVnQd8mdG9h_IvNZCRApZSQw=s176-c-k-c0x00ffffff-no-rj",
    views: "32K Views • 1 year ago"
});

