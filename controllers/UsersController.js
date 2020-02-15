exports.post = (req,res,next)=>{
    res.send("OK POST");
}

exports.get = ('/', async (req, res)=>{
    await data.getUsers()
    .then(result => res.json(result))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
  })

exports.put = (req,res,next)=>{
    res.send("OK PUT");
}

exports.delete = (req,res,next)=>{
    res.send("OK DELETE");
}