import imgBackground from "../../utilities/imgs/luna.jpg";

function BackgroundPage() {
  return (
    <>
      {/* <!-- Background image --> */}
      <div
        className="bg-no-repeat bg-cover bg-center"
        style={{
          height: "100vh",
          backgroundImage: `url(${imgBackground})`
        }}
      ></div>
      {/* <!-- Background image --> */}
    </>
  );
}

export default BackgroundPage;
