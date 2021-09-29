  // self executing function here
(function() {
    const Http = new XMLHttpRequest();
    const url='https://www.ovlg.com/users/logged-in-status';
    Http.open("POST", url,true);
    Http.send();
     Http.onload = function() {
        if(this.responseText)
        {
            var string =this.responseText;
            var arrayData = string.split('####');
            if(arrayData[0] && arrayData[1])
            {
                var Newhtml='<li itemprop="name" class="nav-item dropdown" style="padding: 0;"><a itemprop="url" class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">'+arrayData[0]+'</a><ul class="dropdown-menu" aria-labelledby="navbarDropdown4" style=""><li itemprop="name"><a itemprop="url" class="dropdown-item" href="'+arrayData[1]+'" title="">My Account</a></li><li itemprop="name"><a itemprop="url" class="dropdown-item" href="/user/logout">Logout</a></li></ul></li>';
                document.getElementById("login_logout_area").innerHTML = Newhtml;
            }
        } 
      }

 })();
