document.addEventListener('mousemove', function (e) {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    trail.style.left = `${e.clientX - 8}px`;
    trail.style.top = `${e.clientY - 8}px`;
    document.body.appendChild(trail);

    setTimeout(function () {
      trail.remove();
    }, 1000);
  });