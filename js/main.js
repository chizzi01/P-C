document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(1678905000)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
      let example = document.getElementById('example');
      example.style.display = 'none';
      let body = document.body;
      body.classList.add('fondoBello');
      let alignModal = document.getElementById('alignModal');
      alignModal.style.visibility = 'visible';
      let innerPropuesta = document.getElementById('innerPropuesta');
      innerPropuesta.innerText = 'Querés ser mí novia?';
    });

  // Toggle theme
  let body = document.body;
  body.classList.add('light-theme');
  body.querySelector('#flipdown').classList.add('flipdown__theme-dark');


  let si = document.getElementById('si');
  si.addEventListener('click', () => {
    let alignModal = document.getElementById('alignModal');
    alignModal.style.display = 'none';
    let video = document.getElementById('videoNutrias');
    video.style.display = 'block';
    let example = document.getElementById('example');
    example.style.display = 'none';
    let body = document.body;
    body.classList.add('fondoBello');
  });

  let siRojo = document.getElementById('siRojo');
  siRojo.addEventListener('click', () => {
    let alignModal = document.getElementById('alignModal');
    alignModal.style.display = 'none';
    let video = document.getElementById('videoNutrias');
    video.style.display = 'block';
  });


});
