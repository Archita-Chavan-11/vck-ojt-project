import Header from "../components/Header/Header";

const ContactPage =() =>{
    return(
        <div className="root">
           <Header/>
        <div className="box">
            <h1 className="b1">Contact Us</h1>
            <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            <h2>General Enquiries</h2>
            
            <p><b>Vivekanand College Main Campus</b></p>
            <p>[Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]</p>
            <p>India</p>
            <p>Phone: <b>+91 12345 67890</b></p>
            <p>Email: <b>info@vivekanandcollege.edu</b></p>
            <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
            <h2>Admissions Office</h2>
            
            <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
            <p>Phone: +91 98765 43210</p>
            <p>Email: admissions@vivekanandcollege.edu</p>
            <h2>Student Support Services</h2>
            <hr></hr>
            <p>For current student support, academic advising, or general assistance:</p>
            <p>Phone: +91 87654 32109</p>
            <p>Email: studentsupport@vivekanandcollege.edu</p>
            <h2>Find Us on the Map</h2>
            

            <a href="https://www.google.com/maps/dir/16.787126,74.2592047/2130,+E+Ward,+Tarabai+Park,+Kolhapur,+Maharashtra+416003/@16.7123339,74.1562079,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc100664ad0e191:0x4b2af9253659bbec!2m2!1d74.2386116!2d16.7123415?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"><u>View on Google Maps</u></a>
            <h2>Send Us a Message</h2>
            
            <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
        </div>
        </div>
    )
}


export default ContactPage;