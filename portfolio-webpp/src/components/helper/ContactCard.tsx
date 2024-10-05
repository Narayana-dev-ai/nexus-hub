import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";
import { bar_data, COLORS, data, handleDownload } from "../../utils/commons_modules";
import "./ContactCard.scss";
import { ContactFormModal } from "./ContactFormModal";

export const ContactCard = () => {

  return (
    <div className="about_page">
      <div className="ab_card">
        <div className="card__details">
          <h1 className="home__title">
            Hi,
            <br />
            This is <span className="home__title__color">Narayana</span>
            <br />
            I'm a Software Engineer
            <p>
              ⚡Crazy programmer! Professional & Ambitious. I love the wide
              range of stacks of Software Engineering that includes Frontend,
              Backend, and DevOps⚡
            </p>
          </h1>
          <div className="home_btn">
            <button className="contact__btn" onClick={ContactFormModal}>
              CONTACT ME
            </button>
            <button onClick={handleDownload} className="contact__btn">
              GET RESUME
            </button>
          </div>
        </div>

        <div className="profile__pic">
          <img alt="profile_image" src="profilePhoto.jpg" className="photo" />
        </div>
      </div>
      <div className="insights">
        <PieChart width={500} height={500}>
          <Pie
            data={data}
            dataKey="language"
            outerRadius={250}
            fill="green"
            style={{ cursor: "pointer", outline: "none" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <BarChart width={600} height={600} data={bar_data}>
          <Bar dataKey="skill" fill="green" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name"/>
          <YAxis />
        </BarChart>
      </div>
    </div>
  );
};
