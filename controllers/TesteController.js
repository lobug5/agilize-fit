exports.post = (req,res,next)=>{
    res.send("OK POST");
}

exports.get = (req,res,next)=>{
    res.send("OK GET");
}

exports.put = (req,res,next)=>{
    res.send("OK PUT");
}

exports.delete = (req,res,next)=>{
    res.send("OK DELETE");
}