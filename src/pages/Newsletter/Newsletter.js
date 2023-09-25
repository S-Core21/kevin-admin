import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import * as XLSX from 'xlsx';
import FileSaver from 'file-saver';

const Newsletter = () => {


    const [user, setUser] = useState()
    const [clickindex, setClickindex] = useState(null)

    const toggleDelete = (index)=>{
        setClickindex(index)
        window.location.reload()
    }

    useEffect(() => {
        axios.get('https://blogapi-31c0.onrender.com/api/all_newsletters')
            .then(response => {
                console.log('blog added')
                console.log(response.data.mail)
                setUser(response.data.mail)
            })
            .catch(err => {
                console.log(err, 'not going')
            })
    }, [])

    function delSub(id){
            axios.delete(`https://blogapi-31c0.onrender.com/api/newsletter/${id}`)
        .then(response => {
            console.log('deleted')
            console.log(response.data.mail)
        })
        .catch(err => {
            console.log(err, 'not going')
        })
        
    }

    function s2ab (s){
        const buf = new ArrayBuffer(s.length);
        const view = new Uint8Array(buf)
        for (let i=0; i<s.length; i++){
          view[i] = s.charCodeAt(i) & 0xFF;
        }
        return buf
      }
      
      function handlesave(){
        const worksheet = XLSX.utils.json_to_sheet(user)
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      
        const filename = 'data.xlsx'
      
        const wbout = XLSX.write(workbook, {bookType: 'xlsx', type: 'binary'});
        const blob = new Blob([s2ab(wbout)], {type: 'application/octet-stream'});
        FileSaver.saveAs(blob, filename);
      }


  return (
    <div className='ViewUsers'>
    <h1>
        Newsletter
    </h1>
    <button onClick={handlesave}>Export</button>
    <ul className='headers'>
        <li>Name</li>
        <li>Email</li>
        {/* <li>Delete</li> */}
    </ul>
    {user &&
        user.map((item, index) => {
            return <ul key={index} style={{display : clickindex === index ? 'none' : 'flex'}} >
                <li>{item.fullname}</li>
                <li>{item.email}</li>
                <li className='delL' onClick={()=>{
                    delSub(item._id)
                    toggleDelete()
                }}><img alt='delete' src='/images/del.png' /></li>
            </ul>
        })
    }
</div>
  )
}

export default Newsletter