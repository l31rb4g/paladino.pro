<?php
if ($_SERVER['HTTP_HOST'] == '34.234.32.45'){
    //die;
}
$date = date('Ymd');
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Gabriel Paladino</title>

    <link rel="stylesheet" href="css/reset.css"/>
    <link rel="stylesheet" href="css/main.css?t=<?php echo $date; ?>"/>

    <script type="text/javascript" src="js/mootools-core-1.5.0-full-nocompat-yc.js"></script>
    <script type="text/javascript" src="js/interface.js?t=<?php echo $date; ?>"></script>
    <script type="text/javascript" src="js/flying_char.js?t=<?php echo $date; ?>"></script>
    <script type="text/javascript" src="js/flying_object.js?t=<?php echo $date; ?>"></script>
    <script type="text/javascript" src="js/flying_string.js?t=<?php echo $date; ?>"></script>
    <script type="text/javascript" src="js/main.js?t=<?php echo $date; ?>"></script>

</head>
<body>
    O mundo está cheio de surpresas. E de automóveis.
</body>
</html>

