function showPage(pageId) {
    const pages = document.querySelectorAll('.container');
    pages.forEach(page => {
        if (page.id === pageId) {function showPage(pageId) {
  const pages = document.querySelectorAll('.container');
  pages.forEach(page => {
    if (page.id === pageId) {
      page.classList.remove('hidden');
    } else {
      page.classList.add('hidden');
    }
  });
}

// Load initial home page
window.onload = () => showPage('home');

            page.classList.remove('hidden');
        } else {
            page.classList.add('hidden');
        }
    });
}
// Initial page setup
showPage('home')

 function changeRoom(currentRoomId, nextRoomId) {
    // Hide current room and stop any videos in it
    const currentRoom = document.getElementById(currentRoomId);
    currentRoom.classList.add('hidden');

    // Pause and reset all videos in the current room
    const videos = currentRoom.querySelectorAll('video');
    videos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });

    // Show the next room
    const nextRoom = document.getElementById(nextRoomId);
    nextRoom.classList.remove('hidden');
  }
