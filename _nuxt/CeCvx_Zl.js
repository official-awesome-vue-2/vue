import{C as l,x as e}from"./DPJQ-yEl.js";const m=[{name:"npm",command:"npm ",install:"i ",installEmpty:"install",run:"run ",x:"npx ",saveDev:"-D "},{name:"pnpm",command:"pnpm ",install:"i ",installEmpty:"install",run:"run ",x:"pnpm dlx ",saveDev:"-D "},{name:"bun",command:"bun ",install:"add ",installEmpty:"install",run:"run ",x:"bun x ",saveDev:"-d "},{name:"yarn",command:"yarn ",install:"add ",installEmpty:"install",run:"run ",x:"yarn dlx ",saveDev:"-D "}];function i(){const{pm:n}=l().value.main;return{packageManagers:e(()=>m.filter(a=>n.includes(a.name)))}}export{i as u};
