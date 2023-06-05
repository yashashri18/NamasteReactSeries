import {useState} from "react"

const Section = ({title,desc,isVisible,setIsVisible })=> {
    // const [isVisible, setIsVisible] = useState(false)
    return(
        <div className="border-[1px] border-black m-2 p-2">
            <h1>{title}</h1>
            {
                isVisible ? 
                (<button onClick={()=>{
                    setIsVisible()
                }}className="underline m-2 p-2">Hide</button>)
                :
                (<button onClick={()=>{
                    setIsVisible()
                }}className="underline m-2 p-2">Show</button>)
            }
            {isVisible && <h2>{desc}</h2>}
        </div>
    )
}

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("heading1")
    return (
        <div>
            <h1>This is Instamart Component</h1>
            <h2>Created for the purpose to learn Lazy Loading</h2>
            <h3>(Assume it as a heavy functionality with lots of components)</h3>
            <Section 
                title="Heading Section" 
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                isVisible={visibleSection === "heading1"}
                setIsVisible={()=>setVisibleSection(visibleSection === "heading1" ? " " : "heading1")}
            />
            <Section 
                title="Heading Section 2" 
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                isVisible={visibleSection === "heading2"}
                setIsVisible={()=>setVisibleSection(visibleSection === "heading2" ? " " : "heading2")}
            />
            <Section 
                title="Heading Section 3" 
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                isVisible={visibleSection === "heading3"}
                setIsVisible={()=>setVisibleSection(visibleSection === "heading3" ? " " : "heading3")}
            />
        </div>
    )
}
export default Instamart