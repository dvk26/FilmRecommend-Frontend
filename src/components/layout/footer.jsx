import { Row, Col, Button, Input, Flex } from "antd";
import "./footer.css"

const Footer = () => {
    return (
        <Row style={{paddingRight:"50px", paddingLeft:"60px", marginTop: "90px"}}>
            <Col span={10} style={{color: "white"}}>   
                <p className="siteTitle" style={{fontSize: "38px"}}>Liên hệ với chúng tôi</p>
               

                <div className="siteContent" style={{fontSize: "26px", lineHeight: "1.2"}}>
                    <p>Trường Đại học Khoa học tự nhiên - HCMUS</p>
                    <p>227 Nguyễn Văn Cừ, phường 4, Quận 5 </p>
                    <p >Thành phố Hồ Chí Minh</p>
                </div>

                <p className="siteTitle" style={{fontSize: "38px", marginTop: "50px"}}>Hotline</p>
                <p className="siteContent" style={{fontSize: "26px"}}>0908.xxx.xxx - Ông Phạm Nguyên Khánh</p>

                <div style={{ display: "inline-flex", alignItems: "center", marginTop: "50px", marginBottom: "30px"}}>
                    <img 
                        src="/Logo.svg" 
                        alt="Logo" 
                        style={{width: "75px", marginTop: "15px"}} 
                    />
                    <span className="logoTitle" id="LogoHeader" style={{fontSize: "30px", marginTop: "20px", marginLeft: "20px"}}>MIUVIE</span>
                </div>
            </Col>
            <Col span={7} style={{marginLeft: "auto", marginRight: "45px"}}>  

                <div className="siteTitle" style={{textAlign: "right", fontSize: "38px"}}>
                    <p>Đăng ký để nhận</p>
                    <p>Thông tin mới nhất!</p>
                </div>
                <br />

                <Input placeholder="Email Address" className="siteContent" id="inputFieldAbout" size="large"/>

                <Flex vertical gap="small" style={{ width: '100%' }}>
                    <Button type="primary" block size={"large"} className= "siteTitle" id="ButtonAbout" style=
                        {{ 
                            
                        }}> 
                    Subscribe!</Button>
                </Flex>

                <div className="siteContent" style={{fontSize: "18px", marginTop: "40px"}}>
                    <p style={{textAlign: "left", paddingLeft: "126px"}}>Name Inc. © 2024 All Rights Reserved</p>
                    <div style={{textAlign: "right"}}>
                        <p>Machine Learning</p>
                        <p>22KHMT1 - Group 06</p>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Footer;