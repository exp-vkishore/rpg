<?php
/**
 * Created by JetBrains PhpStorm.
 * User: vivek
 * Date: 1/11/12
 * Time: 10:03 AM
 * To change this template use File | Settings | File Templates.
 */

    $arr = array(
        array(0,0,0,0,0,0,0,0,0,0,0,0,0,0),
        array(0,1,1,1,1,1,1,1,1,1,1,1,1,1),
        array(1,1,1,1,1,1,1,1,1,1,0,0,1,1),
        array(1,1,1,1,1,1,1,1,1,1,0,0,0,1),
        array(1,1,1,1,1,1,1,1,1,1,0,0,0,1),
        array(1,1,1,1,1,1,1,1,1,1,1,1,1,1),
        array(1,1,1,1,1,1,1,1,1,1,1,1,1,1),
        array(1,1,1,1,1,1,1,1,1,0,0,1,1,1),
        array(1,1,0,0,1,1,1,1,1,0,1,1,1,1),
        array(0,0,0,0,0,1,1,1,1,1,1,1,1,1),
        array(1,1,1,1,0,1,1,1,1,1,1,1,1,1),
        array(1,1,1,1,0,1,1,1,1,1,1,1,1,1),
        array(1,1,1,1,1,1,1,1,1,1,1,1,1,1),
        array(1,1,1,1,0,1,1,1,1,0,1,1,1,1),
        array(0,0,0,0,0,0,0,0,0,0,0,0,0,0)
     );

$playerPos = array('X'=>3,'Y'=>4);


print json_encode(array($arr,$playerPos));

?>