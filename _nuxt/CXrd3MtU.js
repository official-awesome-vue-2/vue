import{_ as n}from"./Bh0Ut5WR.js";import{u as s}from"./BHVO8sXx.js";import{g as i,x as c,h as m,w as u,o as d,d as l,a as f,t as p,k as g}from"./DPJQ-yEl.js";const k={class:"font-semibold"},_=i({__name:"ReadMore",props:{title:{},to:{},target:{},icon:{default:"lucide:bookmark"}},setup(e){const a=c(()=>{if(e.title)return e.title;try{return s(e.to).map(t=>t.title).join(" > ")}catch{return e.to}});return(t,o)=>{const r=n;return d(),m(r,{to:t.to,target:t.target,icon:t.icon},{default:u(()=>[o[0]||(o[0]=l(" Read more at ")),f("span",k,p(g(a)),1)]),_:1},8,["to","target","icon"])}}});export{_ as default};
