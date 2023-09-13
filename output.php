<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="img/NL.png" type="image/x-icon">
    <link rel="stylesheet" href="output.css">
    <title>This your Bio</title>
</head>
<body>

    <div class="container">
    <center><h2>Share your Novel with me</h2></center>


        <div class="form">
            <div class="a">
                 <div class="dek">
                 <a href="kindex.html"><h1>Novelink</h1></a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nemo quod odio inventore aut a autem aliquid consectetur quibusdam consequatur deleniti nulla eveniet eius tempore est ad, veniam culpa, molestiae omnis, unde laudantium ipsum adipisci impedit? Quam quidem a reiciendis? Fuga, dolores officiis sit id impedit voluptas obcaecati labore sequi.</p>
                </div>
                <div class="item">
                <div class="list">
                    
                    <ul>
                        <li>Nama </li>
                        <li>Title</li>
                        <li>Page</li>
                        <li>Jurusan</li>
                        <li>Description</li>
                       
                    </ul>
                </div>

                <div class="isi">
                    <ul>
                        <?php 
                        $nama=$_POST['name'];
                        $title=$_POST['title'];
                        $page=$_POST['page'];
                        $jurusan=$_POST['jurusan'];
                        $desc=$_POST['desc'];
                        ?>

                        <li><?php echo " : ".$nama; ?></li>
                        <li><?php echo " : ".$title."<br>"; ?></li>
                        <li><?php echo " : ".$page."<br>"; ?></li>
                        <li><?php echo " : ".$jurusan."<br>"; ?></li>
                        <li><?php echo " : ".$desc."<br>";?></li>
                    </ul>

                   
                </div>
              

                </div>
                <H4> Enjoy your book and have a Good Day 📖</H4>
            </div>

            <div class="b">
            <img src="img2/bg2.png" id="kk" alt="">
            </div>


        </div>



    </div>


    
</body>
</html>


       
