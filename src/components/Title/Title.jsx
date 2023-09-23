import "./Title.scss";

function Title({ title,id }) {
  return (
    <div className="title-container" id={id}>
      <div className="title-container-div">
        <div className="title-line-left"></div>
        <div className="title-div">
          <h2 className="title">{title}</h2>
        </div>
        <div className="title-line-right"></div>
      </div>
    </div>
  );
}

export default Title;
