document.getElementById('moveButton').addEventListener('click', function() {
    const movingWindow = document.getElementById('movingWindow');
    const currentPosition = parseInt(getComputedStyle(movingWindow).left);
  
    if (currentPosition === 0) {
      movingWindow.style.left = '-200px';
    } else {
      movingWindow.style.left = '0';
    }
  });

  $(document).ready(function() {
    $('#changeColorButton1').click(function() {
      $(':root').css('--background-color', '#f5f5f5');
      $(':root').css('--main-font-color', '#333333');
      $(':root').css('--main-color', '#e96b52');
      $(':root').css('--div-color', '#3b5e95');
      $(':root').css('--div-color2', '#eeb560');
      $(':root').css('--div-color3', '#efcdd9');
      $(':root').css('--div-color4', '#96d0c3');
    });
    $('#changeColorButton2').click(function() {
      $(':root').css('--background-color', '#f5f5f5');
      $(':root').css('--main-font-color', '#261e1b');
      $(':root').css('--main-color', '#e65956');
      $(':root').css('--div-color', '#5d7eb3');
      $(':root').css('--div-color2', '#dcb94f');
      $(':root').css('--div-color3', '#e4ab9b');
      $(':root').css('--div-color4', '#256968');
    });
    $('#changeColorButton3').click(function() {
      $(':root').css('--background-color', '#eae7e0');
      $(':root').css('--main-font-color', '#212121');
      $(':root').css('--main-color', '#d56e32');
      $(':root').css('--div-color', '#44553c');
      $(':root').css('--div-color2', '#e9bf43');
      $(':root').css('--div-color3', '#d56e32');
      $(':root').css('--div-color4', '#44553c');
    });
    $('#changeColorButton4').click(function() {
      $(':root').css('--background-color', '#f5f5f5');
      $(':root').css('--main-font-color', '#333333');
      $(':root').css('--main-color', '#f27258');
      $(':root').css('--div-color', '#6479a2');
      $(':root').css('--div-color2', '#eac56e');
      $(':root').css('--div-color3', '#e3a9b4');
      $(':root').css('--div-color4', '#addbcd');
    });
  });