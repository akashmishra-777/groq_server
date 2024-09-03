const express = require("express");
const app = express();
const PORT = 8000;
const Groq = require("groq-sdk");
const groq = new Groq({apiKey:"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"});

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/login",(req,res)=>{
    res.send("Working fine");
})


app.post("/ai",async (req,res)=>{
  const response  = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `${req.body.msg} Note:answer in one or two lines  do not return any response related to note point. you remeber without responding on it : My name is akash Mishra`,
      },
    ],
    model: "llama3-8b-8192",
  })

  res.send(` ${response.choices[0].message.content}`)

 
})


app.listen(PORT,()=>{
    console.log(`App is listning on PORT:${PORT}`);  
})
