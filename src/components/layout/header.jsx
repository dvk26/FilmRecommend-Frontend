
import { AliwangwangOutlined, AuditOutlined, HomeOutlined, LoginOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Menu, message } from 'antd';
import { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logoutAPI } from "../../services/api_service";
import { AuthContext } from "../context/auth_context";
import "./header.css";
const Header = () =>{
    const [current, setCurrent] = useState('');
    const {user,setUser} = useContext(AuthContext)

    useEffect(() => {
    console.log("User state updated:", user);
    }, [user]);

    console.log("check data >>>>>>:",user)
    const onClick = (e) => {
        setCurrent(e.key);
    };
    const  navigate= useNavigate()
    const handleLogout = async()=>{
        const  res= await logoutAPI();
        if(res.data){
            //clear data
            localStorage.removeItem('access_token');
            setUser({
                email:"",
                phone:"",
                fullName:"",
                role: "",
                avatar:"",
                id:""


            })

            message.success("Logout thanh cong");

            navigate("/");
        }
    }
    const items = [
        {
            label: 
                <div style={{ display: "inline-flex", alignItems: "center" }}>
                    <img 
                        src="/Logo.svg" 
                        alt="Logo" 
                        style={{width: "75px", marginTop: "15px"}} 
                    />
                    <span className="logoTitle" id="LogoHeader" style={{fontSize: "30px", marginTop: "20px", marginLeft: "20px"}}>MIUVIE</span>
                </div>,
            key: 'home',
        },
        {
            label: <NavLink to="/about" className="siteTitle" style={{fontSize: "23px", color: "white"}}>GIỚI THIỆU</NavLink>,
            key: 'about',
            style: {marginLeft: 'auto', marginTop: "20px"},
        },
        {
            label: <NavLink to="/users" className="siteTitle" style={{fontSize: "23px", color: "white"}}>ĐĂNG KÝ</NavLink>,
            key: 'users',
            style: {marginTop: "20px"},
        },
        {
            label: <NavLink to="/login" className="siteTitle" style={{fontSize: "23px", color: "white"}}>ĐĂNG NHẬP</NavLink>,
            key: 'login',
            style: {marginTop: "20px"},
        },
        // {
        // label: <NavLink to="/" className="siteTitle">Home</NavLink>,
        // key: 'home',
        // icon: <HomeOutlined  />,
        // },
        // {
        //     label: <NavLink to="/users" className="siteTitle">Users</NavLink>,
        //     key: 'users',
        //     icon: <UsergroupAddOutlined  />,
        // },
        // {
        //     label: <NavLink to="/products" className="siteTitle">Products</NavLink>,
        //     key: 'products',
        //     icon: <AuditOutlined />,
        // },
        // {
        //     label: <NavLink to="/about" className="siteTitle">Giới thiệu</NavLink>,
        //     key: 'about',
        // },
        
        // ...(!user?.id ?
        //     [
        //         {
        //             label: <Link to = {"/login"}>Login</Link>,
        //             key: 'login',
        //             icon:<LoginOutlined/>,
        //         }
        //     ]:[]
        // ),
        // ...(user?.id ?  
        //     [
        //         {
        //             label: `Welcome ${user.fullName}`,
        //             key: 'setting',
        //             icon:<AliwangwangOutlined/>,
        //             children:
        //             [
        //                 {
        //                     label:<span onClick={()=>handleLogout()}>Đăng xuất</span>,
        //                     key:"logout"
        //                 }
        //             ]
        //         }
        //     ]:[]
        // ),

    ];
    return (
        <Menu   
            style={{paddingRight:"50px", paddingLeft:"60px"}}
            className = "Navbar"
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        ></Menu>
        // <Menu
            
        //     onClick={onClick}
        //     selectedKeys={[current]}
        //     mode="horizontal"
        //     items={items}
        // />
    );
}

export default Header;