const jwt=require('jsonwebtoken')

const generateTokenAndSetCookie = (userId,res) => {
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"10d",
    });

    res.cookie('jwt',token,{
        expires:new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        httpOnly:true,
        secure:true,
    })
}

module.exports=generateTokenAndSetCookie