<?php

function getConnection(){
    // database connection datails
    $host = "localhost";
    $db_name = "perpustakaan_db";
    $username = "root";
    $password = "";

    // create connection
    $conn = new mysqli($host, $username, $password, $db_name);

    // check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connection_error);
    }

    return $conn;
}