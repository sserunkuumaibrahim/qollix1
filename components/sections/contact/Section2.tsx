'use client';

export default function Section2() {
    return (
        <div className="contact-map-page">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7477445089803!2d32.614086489620526!3d0.3289976740319094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc962d4e8c3b%3A0x8b89c1d4f1e2a3b4!2sPlot%2019-21%20PortBell%20Road%2C%20Nakawa%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1642760000000!5m2!1sen!2sug"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}
