<DOCTYPE html>
<html>
<head>
  <title>Notes</title>
  <style type="text/css">
    body {
      overflow: hidden;
    }
    pre {
      width: 100%;
      height: 100%;
      padding: 5px;
    }
  </style>
</head>
<body>
  <pre	contenteditable="true"></pre>

  <script type="text/javascript" src="js/mootools-core-1.5.0-full-nocompat-yc.js"></script>
  <script type="text/javascript">
  window.addEvent('domready', function(){
    if (window.timer){
      clearTimeout(window.timer);
    }
	  window.timer = setTimeout(() => {
		  $$('pre')[0].addEvent('keydown', function(){
			  new Request({
				  data: {
					  notes: encodeURIComponent(this.get('text'))
				  }
			  }).send();
		  });
	  }, 250);
  });
  </script>
</body>
</html>
