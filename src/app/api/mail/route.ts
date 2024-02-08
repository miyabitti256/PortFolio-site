import nodemailer from 'nodemailer';

export async function POST(req:Request) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.AUTH_GMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSWORD,
    },
 });
 const { name, email, subject, message } = await req.json();
 const formattedMessage = message.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;');

 const mailData = {
    from: email,
    to: process.env.GMAIL_ADDRESS,
    subject: `【お問い合わせ】${subject} -from ${name}様`,
    text: `${formattedMessage} Send from ${email}`,
    html: `
      <p>【名前】${name}</p>
      <p>【内容】<br>${formattedMessage}</p>
      <p>【メールアドレス】${email}</p>
    `,
 };

 const autoReplyData = {
   from: process.env.AUTH_GMAIL_ADDRESS,
   to: email,
   subject: '【自動返信】お問い合わせありがとうございます',
   text: `以下の内容でお問い合わせを受け付けました。\n\n名前: ${name}\nメールアドレス: ${email}\n件名: ${subject}\n内容: ${formattedMessage}\n\n返信までしばらくお待ちください。`,
   html: `
     <p>以下の内容でお問い合わせを受け付けました。</p>
     <p>【名前】 ${name}</p>
     <p>【メールアドレス】: ${email}</p>
     <p>【件名】: ${subject}</p>
     <p>【内容】:</p> 
     <p>${formattedMessage}</p>
     <p>/ * / * / * / * / * / * / * / *</p>
     <p>返信まで少々お待ち下さい。</p>
   `,

 }



 try {
    await transporter.sendMail(mailData);
    await transporter.sendMail(autoReplyData);
    return new Response('Send mail is success!', {
      status: 200,
    })
 } catch (error) {
    console.log(error);
    return new Response('Internal server error!', {
      status: 500,
    })
 }
}