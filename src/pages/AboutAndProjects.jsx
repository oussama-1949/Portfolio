import About from "../components/About"
import MySkills from "../components/MySkills"
import  MyProjects  from "../components/MyProjects"


function AboutAndProjects (){
  return (
    <div className="bg-secondBg px-28 py-20 ">
    <About/>
    <MySkills/>
    <MyProjects/>

    </div>
  )
}
export default AboutAndProjects