function l(l,t){let n=null;return function(...u){null!==n&&clearTimeout(n),n=setTimeout(()=>{l.apply(this,u),n=null},t)}}export{l as d};
