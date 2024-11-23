

function FirstView() {
 
  return (
    <div className="w-full h-full text-[#dbd6cb]">
      <h1 className="absolute top-1/4 text-6xl text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Invest in true stories, own
        <br /> IPs, and share their creative
        <br /> financial success forever
      </h1>
      
      <h1
        className="absolute  text-md font-sans leading-5 transform -translate-x-1/2 -translate-y-1/2"
        style={{ top: "55%", left: "25%" }}
      >
        COMMUNITY LED WEB3
        <br />
        LAUNCHPAD FOR
        <br />
        TOKENIZING AND MONETIZING
        <br />
        COMPELLING REAL LIFE
        <br />
        STORIES
      </h1>
      <h1
        className="absolute text-md font-sans leading-5 transform -translate-x-1/2 -translate-y-1/2"
        style={{ top: "70%", right: "10%" }}
      >
        INVEST IN TRUE STORIES
        <br /> OWN IPS, AND SHARE THEIR
        <br /> CREATIVE AND FINANCIAL
        <br />
        SUCCESS FOREVER
      </h1>
      <img
        src="./narada.png"
        alt="logo"
        className="h-[40rem] w-[40rem] mt-[6rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <button
        style={{
          border: "2px solid #DBD6CB",
          color: "#DBD6CB",
          borderRadius: "8px",
          padding: "10px 20px",
          backgroundColor: "transparent",
          cursor: "pointer",
          top: "90%",
          left: "50%",
        }}
        className="absolute transform text-xl font-sans -translate-x-1/2"
      >
        Invest Now and Own the Future
      </button>
    </div>
  );
}

export default FirstView;
