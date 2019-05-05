<?php

    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $nome = $_POST["fname"];
        $sobrenome = $_POST["lname"];
        $email = $_POST["email"];
        $login = $_POST["login"];
        $senha = $_POST["pass"];
        $senha2 = $_POST["rpass"];
        
        if($senha != $senha2)
            die("Senhas não coincidem");
        else
        {
            include 'connection.php';
            
            $senha = hash('sha256', $senha);
            
            $query = "call sp_registrar(?,?,?,?,?);";
            
            $stmt = $conn->prepare($query);
            
            $stmt->bindParam(1, $nome);
            $stmt->bindParam(2, $sobrenome);
            $stmt->bindParam(3, $email);
            $stmt->bindParam(4, $login);
            $stmt->bindParam(5, $senha);
            
            $stmt->execute();
            
            echo "<script> alert('Usuario registrado com sucesso!'); </script>";
            header("./index.html");
        }
    }

?>