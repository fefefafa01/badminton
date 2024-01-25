import nodeMailer from 'nodemailer';

async function main(email) {
    const username = email.split('@')[0];

    const html = `
    <h1>Xin chào ${username} từ BCB( Badminton Court Booking )</h1>
    <p>Chúng tôi và muốn chúc mừng bạn đã đăng kí thành công và chào mừng bạn đến với chúng tôi</p>
    `;

    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'hcmutbcb@gmail.com',
            pass: 'a30102000z'
        }
    })

    const info = await transporter.sendMail({
        from: 'hcmutbcb@gmail.com',
        to: email,
        subject: 'Xác nhận đăng kí vào BCB thành công',
        html: html,
    })

    console.log("Message sent: " + info.messageId);

}

main('pthanhtung412@gmail.com')
.catch(e => console.log(e));