import nodemailer from "nodemailer" ;

const emailRegistro = async (datos)=>{
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
        subject:"Comprobación de cuenta",
        html:` Hola ${nombre} Comprueba tu cuenta de Veterinario
               Tu cuenta esta lista, ingresa en el siguiente link para comprobarla
               <a href="${process.env.FRONTEND}/confirmar/${token}">Comprobar tu cuenta</a>
        `,
      });
      console.log("mensaje enviado", info.messageId);
};

export default emailRegistro;