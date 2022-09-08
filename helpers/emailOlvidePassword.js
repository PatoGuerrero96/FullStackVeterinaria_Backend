import nodemailer from "nodemailer" ;

const emailOlvidePassword = async (datos)=>{
    const transporter = nodemailer.createTransport({
        host:process.env.EMAIL_HOST,
        port:process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });

      //Envia el email de registro con los datos

      const {nombre, email, token} =datos;
      const info =  await transporter.sendMail({
        from: "Administrador de pacientes de veterinaria",
        to:email,
        subject:"Restablecer contraseña",
        text: "Cambiar contraseña",
        html:` Hola ${nombre} Ya puedes cambiar tu contraseña
               Ir al siguiente enlace
               <a href="${process.env.FRONTEND}/olvide-password/${token}">Cambiar contraseña</a>
        `,
      });
      console.log("mensaje enviado", info.messageId);
};

export default emailOlvidePassword;