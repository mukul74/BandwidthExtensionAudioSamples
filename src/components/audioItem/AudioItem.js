const AudioItem = (props) => {
    const { filePath, title } = props;
    return <div style={{ margin: "4rem 2rem" }}>
        <div>
            <h4 style={{fontSize: '16px', fontWeight: 'bold'}}>{title}</h4>
        </div>


        <div class="well well-lg">
            <audio src={require(`../../media/${filePath}`)} controls style={{ width: "100%" }} />
        </div>
    </div>
}

export default AudioItem;