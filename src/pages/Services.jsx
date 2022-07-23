import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// icons
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import php from "../assets/icons/php.png";
import reacticon from "../assets/icons/reacticon.png";
import node from "../assets/icons/node.png";
import boot from "../assets/icons/boot.png";
import tailwind from "../assets/icons/tailwind.png";
import spring from "../assets/icons/spring.jpeg"
import java from "../assets/icons/java.png"
import mysql from "../assets/icons/mysql.png"
import mssql from "../assets/icons/mssql.png"
import postgre from "../assets/icons/postgre.jpg"
import mongo from "../assets/icons/mongo.png"

export default function Services() {
  const iconimg = [
    {
      id: 1,
      desc: "HTML",
      imgurl: html,
      category: "Frontend",
    },
    {
      id: 2,
      desc: "CSS",
      imgurl: css,
      category: "Frontend",
    },
    {
      id: 3,
      desc: "Javascript",
      imgurl: js,
      category: "Frontend",
    },
    {
      id: 4,
      desc: "PHP",
      imgurl: php,
      category: "Backend",
    },
    {
      id: 5,
      desc: "ReactJS",
      imgurl: reacticon,
      category: "Frontend",
    },
    {
      id: 6,
      desc: "NodeJS",
      imgurl: node,
      category: "Backend",
    },
    {
      id: 7,
      desc: "Bootstrap",
      imgurl: boot,
      category: "Frontend",
    },
    {
      id: 8,
      desc: "Tailwind",
      imgurl: tailwind,
      category: "Frontend",
    },
    {
      id: 9,
      desc: "Java SpringBoot",
      imgurl: spring,
      category: "Backend",
    },
    {
      id: 10,
      desc: "Java",
      imgurl: java,
      category: "Backend",
    },
    {
      id: 11,
      desc: "MySQL",
      imgurl: mysql,
      category: "Database",
    },
    {
      id: 12,
      desc: "MSSQL",
      imgurl: mssql,
      category: "Database",
    },
    {
      id: 13,
      desc: "PostgreSQL",
      imgurl: postgre,
      category: "Database",
    },
    {
      id: 14,
      desc: "MongoDB",
      imgurl: mongo,
      category: "Database",
    },
  ];
  const [category, setCategory] = useState("");
  console.log(category);
  return (
    <>
      <section className="py-5 text-center container" id="services">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Services</h1>
            <p className="lead">
              Here are some web-related programming services that I offer.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="btn btn-primary mx-1"
            onClick={() => setCategory("")}
          >
            All
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="btn btn-primary mx-1"
            onClick={() => setCategory("Frontend")}
          >
            Frontend
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="btn btn-primary mx-1"
            onClick={() => setCategory("Backend")}
          >
            Backend
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="btn btn-primary mx-1"
            onClick={() => setCategory("Database")}
          >
            Database
          </motion.button>
        </div>
      </section>

      <div className="album py-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="container"
        >
          <motion.div
            layout
            className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3"
          >
            <AnimatePresence>
              {iconimg
                .filter((cat) => cat.category.includes(category))
                .map((item) => (
                  <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="col"
                    key={item.id}
                  >
                    <div className="card shadow-sm">
                      <img
                        src={item.imgurl}
                        alt=""
                        className="card-img-top img-fluid"
                        style={{ height: 250 }}
                      />

                      <div className="card-body bg-dark text-center">
                        <p className="card-text">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
