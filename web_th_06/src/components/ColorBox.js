

const ColorBox = (props) => {
    const { color } = props;

    return (
        <div style={{ width: "100px", 
                      height: "100px", 
                      backgroundColor: color 
                    }}> 
        </div>
    )
}

export default ColorBox;