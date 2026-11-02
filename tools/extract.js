const fs=require('fs');const src=fs.readFileSync(process.argv[2],'utf8');
const T=new Function(src+';return TERMS;')();
const out=T.map(t=>({id:t.id,category:t.category,risk:t.risk,tags:t.tags||[],term:t.de.term,short:t.de.short,long:t.de.long,links:t.links||[],related:t.related||[]}));
fs.writeFileSync(process.argv[3],JSON.stringify(out));
const cats={};out.forEach(o=>cats[o.category]=(cats[o.category]||0)+1);console.log(out.length,cats);
fs.writeFileSync(process.argv[4],out.map(o=>o.id+'\t'+o.term+'\t'+o.short.slice(0,90)).join('\n'));
