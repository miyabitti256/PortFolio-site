"use client"
import { ContactFormData } from '@/app/types/ContactForm';
import { Backdrop, Button, CircularProgress, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ContactForm = () => {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [sent, setSent] = useState(false);

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const [sending, setSending] = useState(false);
    const [sendError, setSendError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Function handleSubmit Leady')
        let isValid = true;

        setNameError(false);
        setEmailError(false);
        setMessageError(false);
 
        if (!name) {
            setNameError(true);
            isValid = false;
        } else {
            setNameError(false);
        }
        
        if (!email) {
            setEmailError(true);
            isValid = false;
        } else {
            setEmailError(false);
        }
        
        if (!message) {
            setMessageError(true);
            isValid = false;
        } else {
            setMessageError(false);
        }
        
        if (isValid) {
            setSubmitted(true);
        }
        return
    }

    const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
       
        const data: ContactFormData = {
           name: name,
           email: email,
           subject: subject,
           message: message,
        };
       
        try {
           const response = await fetch('/api/mail/', {
             method: 'POST',
             headers: {
                "Content-Type": "application/json",
             },
             body: JSON.stringify(data),
           });       
           if(response.status === 200) setSent(true);
        } catch (error) {
           console.error('Failed to send email: ', error);
           setSendError(true);
           setSent(true);
        } finally {
           setSending(false);
        }
    };

    const handleBack = () => {
        router.back();
    }
    const handleReset = () => {
        setSubmitted(false);
        setSendError(false);
        setSent(false);
    }

    useEffect(() => {
        console.log('submitted state changed:', submitted, nameError);
    }, [submitted, nameError]);

    return (
        <>
            <Backdrop open={sending} style={{ zIndex: 9999 }}>
                <CircularProgress color="inherit" />
            </Backdrop>
        <h1 className='flex justify-center text-[32px] font-bold m-12'>お問い合わせフォーム</h1>
        <div className='contactForm flex justify-center'>
            {sent ? (
                !sendError ? (
                    <div>
                    <h2>お問い合わせありがとうございました。自動返信メールが届くかどうかをご確認の上、こちらのフォームを離れてください。</h2>
                    <p>10分以内に届いていない場合、送信できていない可能性があるので、間を空けた後、もう一度ご送信ください。</p>
                    <div className='flex justify-center mt-4'>
                        <Button variant='contained' color='primary' type='button' onClick={handleBack} className='bg-[#1976d2]'>戻る</Button>
                    </div>
                </div>

                ) : (
                    <div>
                        <p className='flex justify-center mt-4'>送信中にエラーが発生しました。お手数ですが、時間を空けてもう一度お問い合わせをお願いいたします。</p>
                        <div className='flex justify-center mt-4'>
                            <Button variant='contained' color='primary' type='button' onClick={handleReset} className='bg-[#1976d2]'>戻る</Button>
                        </div>
                    </div>
                )
            ) : (
                submitted ? (
                    <>
                    <div className="confirmation w-[80%] max-w-[720px] p-8 rounded-2xl bg-white [box-shadow:inset_4px_4px_4px_rgba(0,0,0,25%)]">
                        <h2 className='font-bold text-[20px] flex justify-center'>以下の内容で送信してよろしいですか？</h2>
                        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSend(e)}>
                            <div className='m-4'>
                                <span>お名前:</span>
                                <span className='ml-2'>{name}</span>
                            </div>
                            <div className='m-4'>
                                <span>メールアドレス:</span>
                                <span className='ml-2'>{email}</span>
                            </div>
                            <div className='m-4'>
                                <span>件名:</span>
                                {subject ? (
                                    <span>{subject}</span>
                                ) : (
                                    <span>なし</span>
                                )}
                            </div>
                            <div className='m-4'>
                                <span>お問い合わせ内容:</span>
                                <div><pre className='font-Inter block w-[100%] [white-space:pre-wrap]'>{message}</pre></div>
                            </div>
                            <div className='flex justify-center [border-top:1px_solid_#ddd]'>
                                <div className='mt-5'><Button variant='contained' color='error' type='button' onClick={() => setSubmitted(false)} className='bg-[#d32f2f] mt-5'>戻る</Button></div>
                                <div className='ml-4 mt-5'><Button variant='contained' color='primary' type='submit' className='bg-[#1976d2] ml-4 mt-5'>送信</Button></div>
                            </div>
                        </form>
                    </div>
                    </>
                ) : (
                    <>
                    <div className='m-4'>
                        <p className='flex justify-center mb-12'>お問い合わせ、ご依頼等、なにかございましたら下記フォームからご連絡ください。</p>
                        <form className='max-w-[720px] p-8 rounded-2xl bg-white [box-shadow:inset_4px_4px_4px_rgba(0,0,0,25%)]'>
                            <div className='mt-4'><TextField fullWidth label='お名前' value={name} type='name' onChange={e => setName(e.target.value)} error={nameError} helperText={nameError ? '名前を入力してください' : ''} required /></div>
                            <div className='mt-8'><TextField fullWidth label='メールアドレス' value={email} type='email' onChange={e => setEmail(e.target.value)} error={emailError} helperText={emailError ? 'メールアドレスを入力してください' : ''} required /></div>
                            <div className='mt-8'><TextField className='mt-8 block' fullWidth label='件名' value={subject} type='subject' onChange={e => setSubject(e.target.value)} /></div>
                            <div className='mt-8'><TextField fullWidth label='お問い合わせ内容' multiline rows={4} value={message} type='textarea' onChange={e => setMessage(e.target.value)} error={messageError} helperText={messageError ? '内容を入力してください' : ''} required /></div>
                            <div className='w-full flex justify-center mt-8'>
                                <Button variant='contained' color='primary' type='button' className='bg-[#1976d2]' onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)}>入力内容の確認へ</Button>
                            </div>
                        </form>
                    </div>
                    </>
                )
            )}
        </div>
        </>
    )
}

export default ContactForm