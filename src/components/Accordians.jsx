import { useState } from "react"
import faq from "../API/faq.json"
import { useEffect } from "react";
import { FAQ } from "./UI/FAQ";

export const Accordian =()=>{
    const [data,setData]=useState([]);
    const [activeId,setActiveId]=useState(false)

    useEffect (()=>{
        setData(faq)
    },[])
    
   const handleButton =(id)=>{
    setActiveId((prev)=>{
        return (
        prev === id ? false : id 
        )
    })
}
    return (
        <>
          <h1>The Accordians</h1>
          <ul className="section-accordion">
            {
                data.map((curData)=>{
                    return (
                        <FAQ  
                        key={curData.id} 
                        curData={curData} 
                        isActive={activeId === curData.id}
                        onToggle={()=>handleButton(curData.id)} 

                        />
                )

                })
            }
          </ul>
        </>
    )
}