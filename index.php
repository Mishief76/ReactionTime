<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reaction Time Test</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom CSS -->
  <link href="styles.css" rel="stylesheet">
</head>
<body>
  <div class="container">
    <!-- หัวเรื่องหน้าเว็บ -->
    <h1 class="mt-5">Reaction Time Test</h1>
    <!-- คำอธิบายการทดสอบ -->
    <p class="lead">กดปุ่ม "Start" เพื่อเริ่มทำการทดสอบความสามารถในการตอบสนอง</p>
    <!-- ปุ่ม "Start" เพื่อเริ่มทดสอบ -->
    <button id="startBtn" class="btn btn-primary">Start</button>
    <!-- ปุ่มทดสอบ "Click me!" ที่ซ่อนไว้ในตอนแรก -->
    <button id="reactionBtn" class="btn btn-primary d-none">Click me!</button>
    <!-- ผลลัพธ์การทดสอบและระดับผลลัพธ์ที่ซ่อนไว้ในตอนแรก -->
    <p id="result" class="mt-3 d-none"></p>
  </div>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <!-- Custom JS -->
  <script src="script.js"></script>
</body>
</html>
