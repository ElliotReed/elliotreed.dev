import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";

import classNames from "classnames";

import Button from "~/components/elements/Button";

import styles from "./contact-form.module.scss";
import Sending from "./Sending";

type FormProps = {
    type: "developer"
    className?: string
}
const CONTACT_ROUTE_URL = import.meta.env.PUBLIC_CONTACT_ROUTE_URL;

const buttonText = {
    sendAnother: "Send Another Message",
    sendAgain: "Try Again",
    sending: "Sending..."
}

async function sendEmail(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
    })
    return await response.json();
}

export default function ContactForm({ type, className }: FormProps) {
    const [directiveText, setDirectiveText] = useState("Send me a message!");
    const [sendButtonText, setSendButtonText] = useState('Send Message')
    const [message, setMessage] = useState({
        name: "",
        email: "",
        message: "",
        type: type,
    });

    const [formState, setFormState] = useState({
        dirty: true,
        submitting: false,
        success: false,
        error: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setMessage({ ...message, [name]: value });
    };

    async function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        setFormState(prev => ({ ...prev, "submitting": true, "dirty": false }));
        setSendButtonText(buttonText.sending)

        try {
            const response = await sendEmail(CONTACT_ROUTE_URL, message);
            if (response.status === 'success') {
                setFormState(prev => ({ ...prev, "submitting": false, "success": true }));
                setDirectiveText(response.data.message);
                setSendButtonText(buttonText.sendAnother);
                handleReset();
                return
            }

            setFormState(prev => ({ ...prev, "submitting": false, "error": true }));
            console.error(response.error);
            throw new Error("There was an error sending your message!")
        }
        catch (error: unknown) {
            setFormState(prev => ({ ...prev, "submitting": false, "error": true }));
            setDirectiveText("There was a server error!");
            setSendButtonText(buttonText.sendAgain);
        }
    }

    const handleReset = () => {
        setFormState(prev => (
            {
                ...prev,
                new: true,
                success: false,
                error: false,
            }
        ));
        setMessage(prev => (
            {
                ...prev,
                message: '',
            }
        ));
    }

    return (
        <form className={classNames(styles["contact-form"], className)} aria-labelledby="form-title" onSubmit={handleSubmit}>

            <p className={formState.error ? styles.error : undefined}>
                {directiveText}
            </p>

            <div>
                <label htmlFor="name">Name</label>
                <input
                    disabled={formState.submitting}
                    id="name"
                    name="name"
                    required
                    type="text"
                    value={message.name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    disabled={formState.submitting}
                    id="email"
                    name="email"
                    required
                    type="email"
                    value={message.email}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="message">Message</label>
                <textarea
                    disabled={formState.submitting}
                    id="message"
                    name="message"
                    required
                    value={message.message}
                    onChange={handleChange}
                />
            </div>

            <Button type="submit" style={styles.full}>
                <Sending shouldAnimate={formState.submitting} />
                {sendButtonText}
            </Button>
        </form>
    )
}

