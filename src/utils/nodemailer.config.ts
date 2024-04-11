import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// user and pass for nodemailer
//const user = "afiq@nexea.co";

// Uses google's app specific password
//const pass = "bpnolahgcqzqxlmj";

const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: user,
    pass: pass,
  },
});

export const sendResetEmail = (email: any, name: any, resetPasswordToken: any) => {
  transport
    .sendMail({
      from: user,
      to: email,
      subject: '[NEXEA EVENT APP] Password Reset Request',
      html: `
        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:100%;">
          <tbody>
            <tr>
              <td style="display:block;margin:0;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:55%;">
                  <tbody>
                    <tr>
                      <td>
                    <h1>Reset Password Request</h1>
                        
                    <h2 style="font-weight:400;">Hello ${name}, </h2>
                    <p> You're receiving this email because you requested a password reset for your account.
  
                    <p> To reset your password, click here: </p>
                    <a href=http://localhost/auth/reset-password/${resetPasswordToken} style="box-sizing:border-box;text-decoration:none;background-color:#0d6efd;border:solid 1px #007bff;border-radius:4px;color:#ffffff;font-size:16px;font-weight:bold;margin:0;padding:9px 25px;display:inline-block;letter-spacing:1px"> CLick Here!  </a> 
          
                    <p> If you didn't request this, please ignore this message or contact us at [Customer Support Email Address] immediately. </p>
                        
                        
                    <p> Nexea, Techteam </p>
                        
                       </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      `,
    })
    .then(() => {
      console.log('Reset email sent successfully');
      return;
    })
    .catch((err: any) => {
      console.error('Error sending password reset email:', err);
    });
};

export const sendConfirmationEmail = (email: any, name: any, verifyToken: any) => {
  transport
    .sendMail({
      from: user,
      to: email,
      subject: 'Account Verification',
      html: `
        <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:100%;">
          <tbody>
            <tr>
              <td style="display:block;margin:0;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:55%;">
                  <tbody>
                    <tr>
                      <td>
                    <h1>Email confirmation</h1>
                        
                    <h2 style="font-weight:400;"> Hello ${name}, </h2>
                    <p> Thank you for registering an account with us. Please confirm your email to activate your account by clicking the button below. <p>
                    <a href=http://localhost/auth/verify/${verifyToken} style="box-sizing:border-box;text-decoration:none;background-color:#0d6efd;border:solid 1px #007bff;border-radius:4px;color:#ffffff;font-size:16px;font-weight:bold;margin:0;padding:9px 25px;display:inline-block;letter-spacing:1px"> CLick Here!  </a>
                 
                        
                    <p> Nexea, Techteam </p>
                        
                       </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      `,
    })
    .then(() => {
      console.log('Confirmation email sent successfully');
      return;
    })
    .catch((err: any) => {
      console.error('Error sending confirmation email:', err);
    });
};

//     });
// };

// // Remove auth/ if it doesnt work

// export const sendConfirmationEmail = (email: any, name: any, verifyToken: any) => {
//   transport
//     .sendMail({
//       from: user,
//       to: email,
//       subject: 'Account Verification',
//       html: `
//         <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:100%;">
//           <tbody>
//             <tr>
//               <td style="display:block;margin:0;">
//                 <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;width:55%;">
//                   <tbody>
//                     <tr>
//                       <td>
//                     <h1>Email confirmation</h1>

//                     <h2 style="font-weight:400;"> Hello ${name}, </h2>
//                     <p> Thank you for registering an account with us. Please confirm your email to activate your account by clicking the button below. <p>
//                     <a href=http://localhost/auth/verify/${verifyToken} style="box-sizing:border-box;text-decoration:none;background-color:#0d6efd;border:solid 1px #007bff;border-radius:4px;color:#ffffff;font-size:16px;font-weight:bold;margin:0;padding:9px 25px;display:inline-block;letter-spacing:1px"> CLick Here!  </a>

//                     <p> Nexea, Techteam </p>

//                        </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       `,
//     })
//     .then(() => {
//       console.log('Confirmation email sent successfully');
//     })
//     .catch((err: any) => {
//       console.error('Error sending confirmation email:', err);
//     });
// };
