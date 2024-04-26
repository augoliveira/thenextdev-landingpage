import React from 'react';
import ContactCard from "@/app/contato/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/contato/ContactForm";
import GoogleMaps from "./GoogleMaps";
import { PageIntroduction } from './page-introduction/index';

const Contact = () => {
    return (
      <div className="bg-slate-500/50 backdrop-blur-sm"> 
        <PageIntroduction />
            <div className={styles.container}>
           
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>
            <GoogleMaps />

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.0215792912772!2d-48.032529323978544!3d-15.855463124463633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2d9dccec7577%3A0x5270849032386a2f!2sGlazing%20design!5e0!3m2!1spt-BR!2sbr!4v1713620547647!5m2!1spt-BR!2sbr"
                width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
    );
};

export default Contact;