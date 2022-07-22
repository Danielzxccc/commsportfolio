
// images
import vasco from "../assets/vasco.jpg";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.jfif"
import four from "../assets/4.png"
import five from "../assets/5.png"
import six from "../assets/6.jfif"
import seven from "../assets/7.png"
import eight from "../assets/8.png"
import nine from "../assets/9.jfif"
import ten from "../assets/10.jfif"
import eleven from "../assets/11.jfif"

export default function Proof() {
  
  const userProofs = [
    {
      id: 1,
      desc: 'PHP w/ MYSQL CRUD System',
      imgurl : one
    },
    {
      id: 2,
      desc: 'DB2 Database Queries',
      imgurl : two
    },
    {
      id: 3,
      desc: 'Two CRUD Springboot Web App',
      imgurl : three
    },
    {
      id: 4,
      desc: 'Java Spring Boot Web App',
      imgurl : four
    },
    {
      id: 5,
      desc: 'Java Spring Boot Web App',
      imgurl : five
    },
    {
      id: 6,
      desc: 'SQL queries',
      imgurl : six
    },
    {
      id: 7,
      desc: 'SQL queries',
      imgurl : seven
    },
    {
      id: 8,
      desc: 'ReactJS NodeJS system',
      imgurl: eight
    },
    {
      id: 9,
      desc: 'Java Abstraction and Interface',
      imgurl: nine
    },
    {
      id: 10,
      desc: 'Java Methods',
      imgurl: ten
    },
    {
      id: 11,
      desc: 'ReactJS Signup Form',
      imgurl: eleven
    }

  ]
  return (
    <>
      <section className="py-5 text-center container" id="proofs">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Proofs and Feedback</h1>
            <p className="lead">
            Here are some compilations of my proofs and feedback from clients with whom I have worked.
            </p>
          </div>
        </div>
      </section>

      <div class="album py-5">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {userProofs.map((item) =>(
              <div class="col" key={item.id}>
              <div class="card shadow-sm">
                <img src={item.imgurl} alt="" className="card-img-top img-fluid" style={{height: 400}}/>

                <div class="card-body bg-dark text-center">
                  <p class="card-text">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
