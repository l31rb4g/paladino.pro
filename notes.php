<?php
$notes_file = '/home/l31rb4g/notes.txt';
if (isset($_POST['notes'])) {
  $notes = $_POST['notes'];
  $f = fopen($notes_file, 'w');
  fwrite($f, $notes);
  fclose($f);
  die;
}
$notes = file_get_contents($notes_file, 'r');
?>
<!DOCTYPE html>
<html>
<head>
  <title>Notes</title>
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
  <style type="text/css">
    body {
      overflow: hidden;
    }
    textarea {
      position: absolute;
      width: 98%;
      height: 95%;
      padding: 5px;
    }
  </style>
</head>
<body>
  <textarea><?php echo $notes; ?></textarea>

  <script type="text/javascript" src="js/mootools-core-1.5.0-full-nocompat-yc.js"></script>
  <script type="text/javascript">
  window.addEvent('domready', function(){
	  $$('textarea')[0].addEvent('keydown', function(){
      if (window.timer){
        clearTimeout(window.timer);
      }
      window.timer = setTimeout(() => {
			  new Request({
				  data: {
					  notes: this.get('value')
				  }
			  }).send();
      }, 250);
	  });
  });
  </script>
</body>
</html>
