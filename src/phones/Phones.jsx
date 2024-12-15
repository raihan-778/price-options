import axios from "axios";
import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";


const Phones = () => {
    const [phones,setPhones]=useState([])

    const [loading,setLoading]=useState(true)


    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=>res.json())
        // .then(data=>setPhones(data.data))

        axios.get(
            'https://openapi.programming-hero.com/api/phones?search=iphone'
           )
           .then(data=>{
            const phoneData=data.data.data
            const phoneWithFakeData=phoneData.map(phone=>{
                const obj={
                    name:phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1])
                }
                return obj
            })
            setPhones(phoneWithFakeData)
           })
           setLoading(false)
    },[])
 
    return (
        <div>
   {loading &&         <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />}
            {/* Loding Spinner */}
            <h1 className="text-5xl">Phones:{phones.length}</h1>
            <BarChart width={730} height={250} data={phones}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  {/* <Bar dataKey="phone_Name" fill="#8884d8" /> */}
  <Bar dataKey="price" fill="#82ca9d" />
</BarChart>
            
            
            
        </div>
    );
};

export default Phones;