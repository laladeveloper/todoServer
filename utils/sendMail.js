import nodemailer from "nodemailer";

export const sendMail = async(email, subject , text )=>{
      const host1 = process.env.SMPT_HOST1;
      const port1 = process.env.SMPT_PORT1;
      const user1 = process.env.SMTP_USER1;
      const pass1 = process.env.SMTP_PASS1;
      console.log(`host ${host1}  port ${port1} user ${user1} pass ${pass1} ` );  

      var transport = nodemailer.createTransport({
            host:host1,
            port:port1,
            auth:{
                  user:user1 ,
                  pass:pass1
            },
      })
      await transport.sendMail({
            from:process.env.SMPT_USER ,
            to:email,
            subject,
            text
      })
}




