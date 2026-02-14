*{ margin:0; padding:0; box-sizing:border-box; font-family: Arial, sans-serif; }

/* Entire screen light pink */
body{
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:#ffd6e6; /* light pink */
}

.title{
  position:absolute;
  top:25px;
  color:#fff;
  font-size:40px;
  font-weight:700;
  letter-spacing:2px;
  opacity:0.95;
}

.subtitle{
  position:absolute;

  left:80px;            /* ✅ moves it fully inside */
  bottom:260px;         /* ✅ sits above kid’s head */

  width:300px;
  padding:14px 18px;

  background: rgba(255, 255, 255, 0.45);
  border-radius:18px;

  font-size:14px;
  font-weight:600;
  color:#ff4f86;

  line-height:1.45;
  text-align:left;

  box-shadow: 0 10px 22px rgba(255, 91, 143, 0.2);
  backdrop-filter: blur(4px);

  z-index:5;            /* ✅ ensures it’s above everything */
}

.subtitle::after{
  content:"";
  position:absolute;
  bottom:-10px;
  left:45px;
  width:0;
  height:0;
  border-left:12px solid transparent;
  border-right:12px solid transparent;
  border-top:12px solid rgba(255,255,255,0.45);
}

.card{
  width:90vw;
  max-width:650px;
  height:400px;
  background:#ffd6e6;   /* SAME as body */
  border-radius:0;      /* remove rounded white board */
  position:relative;
  overflow:hidden;
}

/* SVG kid position */
.kid{
  position:absolute;
  left:30px;
  bottom:25px;
  width:190px;
  height:190px;
}

/* Drawing effect */
.stroke{
  fill:none;
  stroke:#111;
  stroke-width:5;
  stroke-linecap:round;
  stroke-linejoin:round;

  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  animation: draw 0.55s ease forwards;
  opacity:0;
}

/* draw animation */
@keyframes draw{
  to{
    stroke-dashoffset: 0;
    opacity:1;
  }
}

/* Delay each path */
.p1{ animation-delay: 0.2s; }
.p2{ animation-delay: 0.8s; }
.p3{ animation-delay: 1.2s; }
.p4{ animation-delay: 1.35s; }
.p5{ animation-delay: 1.55s; }
.p6{ animation-delay: 1.75s; }
.p7{ animation-delay: 1.95s; }
.p8{ animation-delay: 2.05s; }
.p9{ animation-delay: 2.25s; }
.p10{ animation-delay: 2.35s; }
.p11{ animation-delay: 2.55s; }

/* Small heart near hand (appears after hand draws) */
.handHeart{
  fill:#ff2d6f;
  font-size:18px;
  opacity:0;
  transform-origin:center;
  animation: heartPop 0.35s ease forwards;
  animation-delay: 2.25s;
}

@keyframes heartPop{
  0%{ opacity:0; transform:scale(0); }
  100%{ opacity:1; transform:scale(1); }
}

/* Hearts container */
.hearts{
  position:absolute;
  right:40px;
  top:70px;
  width:360px;
  height:260px;
}

.heart{
  position:absolute;
  font-size:22px;
  transform: scale(0);
  animation: pop 0.25s ease forwards;
  user-select:none;
}

@keyframes pop{
  to{ transform:scale(1); }
}

/* move whole heart up after drawing */
.hearts.moveUp{
  animation: up 2.1s ease forwards;
}

@keyframes up{
  to{ transform: translateY(-120px); }
}

/* message appears */
.msg{
  position:absolute;
  right:40px;
  bottom:25px;          /* ✅ instead of top */
  width:360px;
  text-align:center;

  font-size:44px;       /* slightly smaller to be safe */
  line-height:1.05;     /* ✅ tighter line spacing */

  font-weight:700;
  color:#ff5b8f;

  opacity:0;
  transform: translateY(15px);
  transition: 0.8s ease;
  text-shadow: 0 0 18px rgba(255, 91, 143, 0.45);
}

.msg.show{
  opacity:1;
  transform: translateY(0);
}
