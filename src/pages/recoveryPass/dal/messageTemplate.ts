export const message = `<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>HTML email template</title>
    <meta name="viewport" content="width = 375, initial-scale = -1">
  </head>

  <body style="background-color: #ffffff; font-size: 16px;">
    <center>
      <table align="center" border="0" cellpadding="0" cellspacing="0" style="height: 100%; width: 600px; font-size: 18px;">
          <!-- BEGIN EMAIL -->
          <tr>
            <td align="center" bgcolor="#ffffff" style="padding:30px">
               <p style="text-align:left">Hello,<br><br> We received a request to reset the password for your account for this email address. To initiate the password reset process for your account, click the link below.
              </p>
              <p>
                <a target="_blank" style="text-decoration:none; background-color: #17a2b8; border: #17a2b8 1px solid; color: #fff; padding:10px 10px; display:block;" href="https://svensktutby.github.io/cards/#/set-pass/$token$">
                  <strong>Reset Password</strong></a>
              </p>
              <p style="text-align:left">This link can only be used once. If you need to reset your password again, please visit <a href="https://svensktutby.github.io/cards/">our site</a> and request another reset.<br><br>If you did not make this request, you can simply ignore this email.</p>
              <p style="text-align:left">
              Sincerely,<br>The Card website Team
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </center>
  </body>
</html>`;
