<?php
$auth_file = '.auth';
$f = fopen($auth_file, 'r');
$credentials = explode("\n", fread($f, 64));
fclose($f);

if (!isset($_SERVER['PHP_AUTH_USER']) ||
        (!(
            $_SERVER['PHP_AUTH_USER'] == $credentials[0] &&
            $_SERVER['PHP_AUTH_PW'] == $credentials[1]
        ))) {
    header('WWW-Authenticate: Basic realm="Acesso restrito"');
    header('HTTP/1.0 401 Unauthorized');
    echo 'Acesso negado.';
    die;
}

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
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0">
  <style type="text/css">
    body {
      overflow: hidden;
    }
    textarea {
      position: absolute;
      width: 98%;
      height: 95%;
      border: none;
      font-size: 14px;
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
