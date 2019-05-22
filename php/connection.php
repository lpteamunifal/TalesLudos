<?php

    $servername = "localhost";
    $user = "talesLudos";
    $password = "t4l3s";
    
    try {
        $conn = new PDO("mysql: host=$servername;dbname=talesludos;", $user, $password);
        
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
    } catch (PDOException $e) {
        echo "Erro ao conectar-se ao banco de dados!";
    }
?>