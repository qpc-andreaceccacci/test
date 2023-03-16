<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Test</title>
  <link rel="icon" type="image/x-icon" href="https://em-content.zobj.net/thumbs/72/apple/325/beverage-box_1f9c3.png">
  <link rel="stylesheet" href="style.css">

  <!-- Locomotive -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css">
  <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js"></script>

  <!-- Gsap -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
  <script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>
</head>

<body>
  <nav role="navigation">
    <div id="menuToggle">

      <input type="checkbox" />

      <span class="toggle"></span>
      <span class="toggle"></span>
      <span class="toggle"></span>

      <!-- <div id="menu"> -->
      <ul id="menu">
        <a class="menu_link" href="#">Lorem</a>
        <a class="menu_link" href="#">ipsum</a>
        <a class="menu_link" href="#">dolor</a>
        <a class="menu_link" href="#">sit amet</a>
        <a class="menu_link" href="#">consectetur</a>
      </ul>
      <!-- </div> -->

      <!-- <div class="bg"></div> -->
    </div>
  </nav>

    <!-- Inizio locomotive -->
    <main id="content" class="Loop js-loop">
      <?php include("includes/section-1.html"); ?>
      <?php include("includes/section-2.html"); ?>
      <?php include("includes/section-3.html"); ?>
      <?php include("includes/section-4.html"); ?>
       
    </main>
    <!-- Fine locomotive -->

  <div class="cursor"></div>
  
  <script src="cursor.js"></script>
  <script src="hover.js"></script>
  <script src="scroll.js"></script>
  <script src="loop.js"></script>

</body>

</html>