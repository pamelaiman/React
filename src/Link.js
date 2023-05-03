import './Button.css';


function Link(props) {

  console.log(props);

  return (
    <>
      <a className = "testButton" href={props.linkAddress}>
        <img src={props.imgSrc} width="100" alt={props.ImgDescription} />
        {props.ButtonText}
      </a>
    </>
  );
}

export default Link;