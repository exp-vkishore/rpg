<?php
/**
 * Created by JetBrains PhpStorm.
 * User: vivek
 * Date: 1/11/12
 * Time: 10:13 AM
 * To change this template use File | Settings | File Templates.
 */

try {
    $conn = new PDO('mysql:host=localhost;dbname=rpg', $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage();
}