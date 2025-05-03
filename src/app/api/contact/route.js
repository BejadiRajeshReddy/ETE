import nodemailer from 'nodemailer'



export async function POST(request) {
  const { name, email, phone, NameOfOrg, message, service } = await request.json()

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS
      }
      
    })

    const mailOptions = {
      from: email,
      to: process.env.NEXT_PUBLIC_EMAIL_TO,
      subject: `New Message from ${name}: ${service}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    }

    await transporter.sendMail(mailOptions)
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      message : 'success',
      headers: { 'Content-Type': 'application/json' }
    })
    
    
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to send email' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
