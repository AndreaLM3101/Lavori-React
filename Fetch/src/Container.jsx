import { useState } from "react"

export function Container ({title, children}) {
    const [collapsed, setCollapse] = useState(false)

    function handleCollapse () {
        setCollapse ((x)=> !x)
    }


    return <div className="appContainer">
        <div>{title}</div>

        <div>
            <button onClick={handleCollapse}>Nascondi o Mostra</button>
        </div>

        <div className={!collapsed ? "app" : "appContainerHiden"}>{children}</div>
        
    </div>

}