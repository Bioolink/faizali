<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="img/NL.png" type="image/x-icon">
    <link rel="stylesheet" href="input.css">
    <title>Creat Your Bio</title>
</head>
<body>

    <div class="container">
    <center><img src="img/nv4.png" width="300px"></center>


        <div class="form">
            <div class="a">

                <div class="dek">
                <a href="kindex.html"><h1>Novelink</h1></a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nemo quod odio inventore aut a autem aliquid consectetur quibusdam consequatur deleniti nulla eveniet eius tempore est ad, veniam culpa,i.</p>
                </div>
                <form action="output.php" method="POST">
                    <div>
                        <label for="name">Name :</label><br>
                        <input type="text" id="name" name="name" autocomplete="off">
                    </div>
                    <div>
                        <label for="title">Title :</label><br>
                        <input type="text"  id="title" name="title"  autocomplete="off">
                    </div>
                    <div>
                        <label for="page">Page :</label><br>
                        <input type="number" id="pege" name="page"  autocomplete="off">
                    </div>
                    <div>
                        <label for="jurusan">Jurusan :</label><br>
                        <input type="text" id="jurusan" name="jurusan"  autocomplete="off">
                    </div>
                    <div>
                        <label for="desc">Description :</label><br>
                        <input type="text" id="desc" name="desc"  autocomplete="off">
                    </div>
                    <div>
                        <label for="foto" id="pp" >Upload Cover </label><br>
                        <input type="file"  id="foto" name="foto"  autocomplete="off">
                    </div>
                    <div>
                        <button type="submit">Push</button>
                    </div>
                   
                </form>

                <div class="btn">
                    <div class="bulat"></div>
                </div>
            </div>

            <div class="b">
                <img src="img2/bg2.png" id="kk" alt="">
            </div>


        </div>



    </div>


<script src="input.js"></script>
    
</body>
</html>