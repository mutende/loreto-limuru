<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="animate.css">
   
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="images/fav-icon.png" type="image/x-icon" />
    <title>Portal | Loreto High School Limuru</title>
</head>
<body>
<!-- Navbar -->
<div class="mb-5" style="margin-bottom: 120px;">
<!-- Nav-->
<header>     
        <nav class="navbar fixed-top navbar-expand-lg navbar-light scrolling-navbar bg-white">
          <div class="container">
            <a class="navbar-brand absolute" href="index.php"> <img src="images/fav-icon.png" height="50" width="50" class="img mr-2" alt="logo"><strong> Loreto High School Limuru</strong>
            </a></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse navbar-light" id="navbarsExample05">
              <ul class="navbar-nav mx-auto">                            
                <li class="nav-item">
                  <a class="nav-link" href='index.php'>Home</a>
                </li>                                           
                <li class="nav-item">
                    <a class="nav-link" href='academics.php'>Academics</a>
                  </li>   
                  <li class="nav-item">
                      <a class="nav-link" href='departments.php'>Departments</a>
                  </li>                                                                    
                <li class="nav-item">
                  <a class="nav-link active" href='portal.php'>Portal</a>
                </li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
              </ul>          
            </div>
          </div>
        </nav>
      </header>
      <!-- end Nav -->
</div>
<br>
<!-- end Navbar -->

<!-- content -->
<div class="container">
    <div class="row mt-5">
      
        <div class="col-md-4 ml-auto mr-auto">
            <div class="card">
                <div class="card-header">
                    <p>Parent login</p>
                </div>
                <div class="card-body">         
                <form>
                    <div class="form-group">
                        <label for="PhoneNumber">Phone Number</label>
                        <input type="number" class="form-control" id="PhoneNumber"  placeholder="7xxxxxxxxx" required>
                    </div>
                    <div class="form-group">
                        <label for="admNo">Student Admission Number</label>
                        <input type="password" class="form-control" id="admNo" required>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="yes" id="rememberMe">
                        <label class="form-check-label" for="rememberMe">
                            Remember Me
                        </label>
                    </div>

                    <div class="form-group mt-3">                      
                        <button type="submit" class="btn btn-primary btn-sm btn-block float-left" onClick="alert('We are working on that..')">Login</button>
                    </div>
                </form>
        
            </div>
        </div>
        
    </div>
</div>
    

 
    <script src="bootstrap/js/jquery-3.3.1.min.js"></script>
    <script src="bootstrap/js/popper.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <script src="wow.min.js"></script>

    <script>
         new WOW().init();
        </script>
</body>
</html>