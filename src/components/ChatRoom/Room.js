import Profile from "../../Picture1.png"
import { BsTrash, BsHeart} from 'react-icons/bs';
import { IoMdAttach, } from 'react-icons/io';
import InputEmoji from "react-input-emoji";
import React,{ useState } from "react";
import {Dropdown, Icon}from "rsuite"
 function Room() {
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);

		fetch(
			'https://freeimage.host/api/1/upload?key=<6d207e02198a847aa98d0a2a901485a5>',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	
    const [text, setText] = useState("");

    function handleOnEnter(text) {
      console.log("enter", text);
    }
    return (
 <div style={{width:"70%",position:"absolute",left: "30%" }}>

 <div style={{border:"15px solid red", backgroundColor:"red" ,width:"100%"}}>
    <h1>Chat name </h1>
    <img src={Profile} style={{position: "absolute",
width: "90px",
height:"90px",
left: "85%",
top: "1px"}}/>


<BsTrash style={{
    position: "absolute",
    width: "30px",
    height:"30px",
    left: "93%",
    right: "0.9%",
    top:" 10px",
    bottom:" 90.23%",
    }} />

    
<BsHeart style={{
    position: "absolute",
    width: "30px",
    height:"30px",
    left: "93%",
    right: "0.9%",
    top:" 50px",
    }} />
</div>
<div style={{backgroundColor:"#F48444", width:"500px", height: "100px", borderRadius:"50%",position:"unset",left:"70%", padding:"5%" ,paddingLeft:"10%",paddingBottom:"6%",marginLeft:"55%",marginTop:"2%"}}>
<h3 >text</h3>
</div>

<div style={{
position: "absolute",
width: "90%",
height: "54px",
left: "30%px",
top: "298%",
boxSizing:" border-box"}}>
{/* <button >  */}
    <IoMdAttach style={{
    position: "absolute",
    width: "40px",
    height:"40px",
    left: "100%",
    right: "0.9%",
    top:" 90.23 %",
    bottom:"10px",
    
}}/>
{/* <input type="file" name="file" onChange={changeHandler} />
			{isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div> */}
{/* </button> */}
    <InputEmoji
      value={text}
      onChange={setText}
      cleanOnEnter
      onEnter={handleOnEnter}
      placeholder="Type a message"
    />
</div>

</div>

   );
 };
  
 export default Room;