import { Resend } from "resend";

const resend = new Resend("re_bKSPEnaK_NDPU5bC6gajNPyrbaJeQXPK6");


export default async function enviarEmail(from, to, subject, body) {
  try {
    const data = await resend.emails.send({
      from: from,
      to: [...to],
      subject: subject,
      html: body,
    });
    data.then((res) => { return res })
  }
  catch (error) {
    return error
  }
}
