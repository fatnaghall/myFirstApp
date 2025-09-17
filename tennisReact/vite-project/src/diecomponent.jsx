export default function Die (props){
    const styles ={
     backgroundColor: props.isHeld ? "#09853bff" :"white"
    }
    return (
      
     <button style={styles}  onClick={props.hold}>  {props.value} </button>


    )
}