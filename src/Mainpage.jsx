import { useEffect, useState } from "react";
import { RiSendPlane2Line } from "react-icons/ri";
import OpenAI from "openai";
import Namepart from "./components/Namepart";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "./slices/authslice";
const Mainpage = () => {
    const API_URL = import.meta.env.API_SECRET_KEY;
    const dispatch=useDispatch();
    const [answerdelay, setdelay] = useState(false);
    const navigate=useNavigate();
    const [appear, setappear] = useState(false);
    const [currentprompt, setprompt] = useState("");
    const [final, setfinale] = useState([{}]);
    const handlesubmit = async() => {
      const openai = new OpenAI({
        apiKey: API_URL,
        dangerouslyAllowBrowser: true,
      });
      try {
        const completion = await openai.chat.completions.create({
          messages: [{ role: "system", content: currentprompt }],
          model: "gpt-3.5-turbo",
        });
        const data = await completion.choices[0].message.content;
        setfinale((e) => [
          ...e,
          {
            questions: currentprompt,
            answers: data,
          },
        ]);
        setprompt("");
      } catch (error) {
        alert(error);
      }
    };
    const handlesubmit2 = async (event) => {
      if (event.key == "Enter") {
        const openai = new OpenAI({
          apiKey: API_URL,
          dangerouslyAllowBrowser: true,
        });
        try {
          const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: currentprompt }],
            model: "gpt-3.5-turbo",
          });
          const data = completion.choices[0].message.content;
          setfinale((e) => [
            ...e,
            {
              questions: currentprompt,
              answers: data,
            },
          ]);
          setprompt("");
        } catch (error) {
          alert(error);
        }
      }
    };
    useEffect(() => {
      setTimeout(() => {
        setappear(true);
      }, 2000);
    }, []);
  
    return (
      <>
        <div className="w-screen min-h-screen bg-slate-700 relative bod">
            <nav className="absolute z-[300] top-0 right-0 left-0 h-16 ">
                <div className="w-full h-full flex max-md:justify-center justify-between  items-center gap-2">
                    <div className="md:text-5xl text-xl blur-xs font-bold text-white font-mono">Seb-GPT</div>
                <Namepart/>
                <button onClick={()=>{dispatch(logout);navigate(-1,{replace:true})}} className="p-1 ml-2 bg-red-500 rounded-md text-white md:px-5 md:py-2">L/O</button>
                </div>
            </nav>
          <div className=" absolute z-[10] w-full h-full bg-slate-900  flex justify-center"> {/* <div className="z-[100] w-full min-h-fit max-h-12  flex justify-center"><p className="italic h-full  text-5xl blur-xs tracking-tight font-mono font-bold text-white"></p></div> */}
          </div>

          <div className="w-screen h-[85vh] bod overflow-scroll  my-auto bg-transparent absolute z-30 top-10   text-white p-5 ">
            <div className="">
              <div className={`relative my-5   ${appear ? "" : "hidden"}`}>
                <div className="md:min-w-[10vw] bg-green-200 md:max-w-[50vw] font-mono w-[75vw]  min-h-7  rounded-lg  left-0 text-black px-6 ">
                  How may i help you sir/ma&apos;am?
                </div>
              </div>
              {final.map((e, i) => {
                return (
                  <>
                    <div key={i}>
                      {e.questions ? (
                        <div className="">
                          <div className={`relative my-5 flex justify-end`}>
                            <div className="md:min-w-[10vw] bg-blue-200 md:max-w-[50vw] font-mono w-[75vw] min-h-7  rounded-lg  left-0 text-black px-6 capitalize">
                              {e.questions}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                      {e.answers ? (
                        <div className={`relative my-5 flex `}>
                          <div className="md:min-w-[10vw] bg-green-200 md:max-w-[50vw] font-mono w-[75vw] min-h-7  rounded-lg  left-0 text-black px-6 capitalize">
                            {e.answers}
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="absolute z-[10] overflow-hidden bottom-5 right-8 left-8 rounded-lg h-10 bg-slate-50">
            <div className=" relative w-full h-full">
              <button className="absolute top-0 bottom-0 cursor-pointer right-0 w-10">
                <div
                  onClick={() => handlesubmit()}
                  className="flex justify-center  h-full items-center text-xl"
                >
                  <RiSendPlane2Line className="" />
                </div>
              </button>
              <input
                onChange={(e) => setprompt(e.target.value)}
                value={currentprompt}
                placeholder="Enter your text here"
                onKeyDown={(e) => handlesubmit2(e)}
                className=" rounded-lg p-2 font-mono w-full h-full"
                type="text"
              />
            </div>
          </div>
        </div>
      </>
  )
}

export default Mainpage
