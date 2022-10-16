export function Project(props) {
  return (
    <>
      <div id="creationContainer">
        <div className="imageContainer">
          <img src={props.image} className="image" />
          <div className="overlay">
            <div className="hidden-text">{props.description}</div>
          </div>
        </div>
        <a target="_blank" href={props.link}>
          <p>{props.text}</p>
        </a>
      </div>
      <style jsx>{`
        a {
          background-color: #777986;
          border-radius: 20px;
          color: white;
          cursor: pointer;
          display: flex;
          height: 50px;
          justify-content: center;
          margin: 0px 5px 0px 5px;
          text-decoration: none;
          transition: all 0.15s ease-in-out;
          width: auto;
        }
        a:hover {
          filter: brightness(120%);
          transform: scale(1.01);
        }
        #creationContainer {
          background-color: #282a3a;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 328px;
          width: 250px;
        }
        #creationImage {
          border-radius: 20px;
          height: 260px;
          transition: all 0.15s ease-in-out;
          padding: 5px 5px 5px 5px;
          width: auto;
        }
        #creationImage:hover {
          filter: brightness(120%);
        }
        #creationTitle {
          align-self: center;
          font-family: "Rajdhani", sans-serif;
          font-weight: 500;
          font-size: 18px;
          padding: 8px;
        }
        .hidden-text {
          align-items: center;
          color: black;
          display: flex;
          flex: 1 0 auto;
          flex-wrap: wrap;
          font-family: "Rajdhani", sans-serif;
          font-weight: 500;
          margin: 0 auto;
          text-align: center;
          width: 60%;
        }
        .imageContainer {
          background-color: #b3b5bd;
          border-radius: 20px;
          display: flex;
          height: 250px;
          margin: 5px;
          position: relative;
          width: 240px;
        }
        .imageContainer:hover .overlay {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }
        .image {
          background-size: cover;
          border-radius: 20px;
          height: 100%;
          width: 100%;
        }
        .overlay {
          backdrop-filter: blur(8px);
          border-radius: 20px;
          clip-path: polygon(0 calc(100%), 100% calc(100%), 100% 100%, 0% 100%);
          display: flex;
          flex-direction: column;
          height: 250px;
          position: absolute;
          transition: all 0.75s;
          width: 240px;
        }
        p {
          align-self: center;
          font-family: "Rajdhani", sans-serif;
          font-weight: 500;
          font-size: 18px;
        }
      `}</style>
    </>
  );
}
