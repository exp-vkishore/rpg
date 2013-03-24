<?php
/**
 * Created by JetBrains PhpStorm.
 * User: vivek
 * Date: 1/11/12
 * Time: 11:49 AM
 * To change this template use File | Settings | File Templates.
 */

$userAtBlock = array('user'=>array(array('user_id'=>2,'type'=>'monster','defence'=>2,'attack'=>2,'damage'=>2,'health'=>5, 'title'=>'monster'),array('user_id'=>1,'type'=>'monster','defence'=>2,'attack'=>2,'damage'=>2,'health'=>5, 'title'=>'user')));
print json_encode($userAtBlock);