import React from 'react';
class Footer extends React.Component {
    render() {
        return (
            <>
                <footer>
                    <div className="container flex footer-container">
                    <div className="link-coloumn flex">
                            <h4>Recommended</h4>
                            <a href="#" className="hover-link">
                                Overview
                            </a>
                            <a href="#" className="hover-link">
                                realme C75
                            </a>
                            <a href="#" className="hover-link">
                                realme 13+ 5G
                            </a>
                            <a href="#" className="hover-link">
                                realme Note 60
                            </a>
                            <a href="#" className="hover-link">
                                realme C61
                            </a>
                            <a href="#" className="hover-link">
                                realme C65
                            </a>
                            <a href="#" className="hover-link">
                                realme 12
                            </a>
                            <a href="#" className="hover-link">
                                realme 12+ 5G
                            </a>
                        </div>
                        <div className="link-coloumn flex">
                            <h4>Support</h4>
                            <a href="#" className="hover-link">
                                FAQ
                            </a>
                            <a href="#" className="hover-link">
                                Troubleshooting
                            </a>
                        </div>
                        <div className="link-coloumn flex">
                            <h4>About realme</h4>
                            <a href="#" className="hover-link">
                                Our Brand
                            </a>
                            <a href="#" className="hover-link">
                                Newsroom
                            </a>
                        </div>
                        <div className="link-coloumn flex">
                            <h4>Contact realme</h4>
                            <a href="#" className="hover-link">
                                Whatsapp
                            </a>
                            <a href="#" className="hover-link">
                                service.pk@realme.com
                            </a>
                        </div>
                        <div className="link-coloumn flex">
                            <h3 style={{color: 'white', fontWeight: 'bold', marginBottom: '15px'}}>04238048018</h3>
                            <a href="#" className="hover-link" style={{marginBottom: '15px'}}>
                                9:30 - 18:00, MON - SAT
                                <br />
                                Exclude Holidays
                            </a>
                        </div>
                    </div>
                </footer>
                {/* SUBFOOTER */}
                <div className="subfooter">
                    <div className="container flex subfooter-container">
                        <a className="hover-link" href="#" style={{fontSize: '14px'}}>
                        Pakistan ( English / PKR )
                        © 2019-2024 realme. All Rights Reserved. 
                        </a>
                    </div>
                </div>
            </>

        );
    }
}

export default Footer;