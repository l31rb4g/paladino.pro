<?php
error_reporting(E_ALL);
ini_set('display_errors', 'on');
if (isset($_POST['notes'])) {
  $notes = trim($_POST['notes']);
  $f = fopen('notes.txt', 'w');
  fwrite($f, $notes);
  fclose($f);
  die;
}
?>
<!DOCTYPE html>
<html>
<head>
  <title>Notes</title>
  <style type="text/css">
    body {
      overflow: hidden;
    }
    textarea {
      width: 100%;
      height: 100%;
      padding: 5px;
    }
  </style>
</head>
<body>
  <textarea></textarea>

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
					  notes: encodeURIComponent(this.get('value'))
				  }
			  }).send();
      }, 250);
	  });
  });
  </script>
</body>
</html>
