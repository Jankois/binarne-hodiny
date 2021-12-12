let h32 = document.getElementById("h32");
let m32 = document.getElementById("m32");
let s32 = document.getElementById("s32");
let h16 = document.getElementById("h16");
let m16 = document.getElementById("m16");
let s16 = document.getElementById("s16");
let h8 = document.getElementById("h8");
let m8 = document.getElementById("m8");
let s8 = document.getElementById("s8");
let h4 = document.getElementById("h4");
let m4 = document.getElementById("m4");
let s4 = document.getElementById("s4");
let h2 = document.getElementById("h2");
let m2 = document.getElementById("m2");
let s2 = document.getElementById("s2");
let h1 = document.getElementById("h1");
let m1 = document.getElementById("m1");
let s1 = document.getElementById("s1");

setInterval(myTimer, 100);

function myTimer()
{
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var a = 0;

    if(s%2 == 1)
    {
        s1.src="./img/1.jpg";
        a = s - 1;
        s = a/2
    }
    else
    {
        s1.src="./img/0.png"
        s = s/2
    }

    if(s%2 == 1)
    {
        s2.src="./img/1.jpg";
        a = s - 1;
        s = a/2
    }
    else
    {
        s2.src="./img/0.png"
        s = s/2
    }

    if(s%2 == 1)
    {
        s4.src="./img/1.jpg";
        a = s - 1;
        s = a/2
    }
    else
    {
        s4.src="./img/0.png"
        s = s/2
    }

    if(s%2 == 1)
    {
        s8.src="./img/1.jpg";
        a = s - 1;
        s = a/2
    }
    else
    {
        s8.src="./img/0.png"
        s = s/2
    }

    if(s%2 == 1)
    {
        s16.src="./img/1.jpg";
        a = s - 1;
        s = a/2
    }
    else
    {
        s16.src="./img/0.png"
        s = s/2
    }

    if(s%2 == 1)
    {
        s32.src="./img/1.jpg";
        a = s - 1;
        s = a/2
    }
    else
    {
        s32.src="./img/0.png"
        s = s/2
    }

    if(m%2 == 1)
    {
        m1.src="./img/1.jpg";
        a = m - 1;
        m = a/2
    }
    else
    {
        m1.src="./img/0.png"
        m = m/2
    }

    if(m%2 == 1)
    {
        m2.src="./img/1.jpg";
        a = m - 1;
        m = a/2
    }
    else
    {
        m2.src="./img/0.png"
        m = m/2
    }

    if(m%2 == 1)
    {
        m4.src="./img/1.jpg";
        a = m - 1;
        m = a/2
    }
    else
    {
        m4.src="./img/0.png"
        m = m/2
    }

    if(m%2 == 1)
    {
        m8.src="./img/1.jpg";
        a = m - 1;
        m = a/2
    }
    else
    {
        m8.src="./img/0.png"
        m = m/2
    }

    if(m%2 == 1)
    {
        m16.src="./img/1.jpg";
        a = m - 1;
        m = a/2
    }
    else
    {
        m16.src="./img/0.png"
        m = m/2
    }

    if(m%2 == 1)
    {
        m32.src="./img/1.jpg";
        a = m - 1;
        m = a/2
    }
    else
    {
        m32.src="./img/0.png"
        m = m/2
    }

    if(h%2 == 1)
    {
        h1.src="./img/1.jpg";
        a = h - 1;
        h = a/2
    }
    else
    {
        h1.src="./img/0.png"
        h = h/2
    }

    if(h%2 == 1)
    {
        h2.src="./img/1.jpg";
        a = h - 1;
        h = a/2
    }
    else
    {
        h2.src="./img/0.png"
        h = h/2
    }

    if(h%2 == 1)
    {
        h4.src="./img/1.jpg";
        a = h - 1;
        h = a/2
    }
    else
    {
        h4.src="./img/0.png"
        h = h/2
    }

    if(h%2 == 1)
    {
        h8.src="./img/1.jpg";
        a = h - 1;
        h = a/2
    }
    else
    {
        h8.src="./img/0.png"
        h = h/2
    }

    if(h%2 == 1)
    {
        h16.src="./img/1.jpg";
        a = h - 1;
        h = a/2
    }
    else
    {
        h16.src="./img/0.png"
        h = h/2
    }

    if(h%2 == 1)
    {
        h32.src="./img/1.jpg";
        a = h - 1;
        h = a/2
    }
    else
    {
        h32.src="./img/0.png"
        h = h/2
    }
}