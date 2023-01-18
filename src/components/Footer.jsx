import React from 'react'
import FootList from './FootList'
import FootNum from './FootNum'
import SmallHeading from './SmallHeading'

const Footer = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-3 d-flex flex-column ">
                    <SmallHeading h={"Need any help?"} />
                    <FootNum h5={"Call 24/7 for any help"} h4={"+00 123 456 789"} />
                    <FootNum h5={"Mail to our support team"} h4={"support@domain.com"} />
                </div>
                <div className="col-2 d-flex flex-column ">
                    <SmallHeading h={"Company"} />
                    <FootList n1={"About Us"} n2={"Testimonials"} n3={"Rewards"} n4={"Rewards"} n5={"Meet the Team"} />
                </div>
                <div className="col-2">
                    <SmallHeading h={"Support"} />
                    <FootList n1={"Account"} n2={"Faq"} n3={"Contact"} n4={"Privacy Policy"} n5={"Legal"} />
                </div>
                <div className="col-2">
                    <SmallHeading h={"Other Services"} />
                    <FootList n1={"Community program"} n2={"Rewards Program"} n3={"Partners"} n4={"Privacy Policy"} n5={"PointsPLUS"} />
                </div>
                <div className="col-2">
                <SmallHeading h={"Top cities"} />
                <FootList n1={"Chicago"} n2={"New York"} n3={"PartnSan Franciscoers"} n4={"PCalifornia"} n5={"Alaska"} />

                </div>
            </div>
        </div>
    )
}

export default Footer