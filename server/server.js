var path=require('path');
const express=require('express');

console.log(__dirname+'./../public');

const port=process.env.PORT || 3000;
const app=express();
var publicPath=path.join(__dirname,'../public');
app.use(express.static(publicPath));

console.log(publicPath);

app.listen(port,()=>{
  console.log(`Server start on port ${port}`);
})
